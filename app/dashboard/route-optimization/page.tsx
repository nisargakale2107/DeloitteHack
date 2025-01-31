"use client"

import { useState } from "react"

export default function RouteOptimization() {
  const [pickup, setPickup] = useState("")
  const [dropoff, setDropoff] = useState("")
  const [deliveryType, setDeliveryType] = useState("normal")

  const handleOptimize = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically call an API to optimize the route
    console.log("Optimizing route...")
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Route Optimization</h1>

      <div className="flex gap-6">
        <div className="flex-1">
          <form onSubmit={handleOptimize} className="space-y-4">
            <div>
              <label htmlFor="pickup" className="block mb-1">
                Pickup Location
              </label>
              <input
                id="pickup"
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full border rounded px-2 py-1"
                required
              />
            </div>
            <div>
              <label htmlFor="dropoff" className="block mb-1">
                Drop-off Location
              </label>
              <input
                id="dropoff"
                type="text"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                className="w-full border rounded px-2 py-1"
                required
              />
            </div>
            <div>
              <label htmlFor="deliveryType" className="block mb-1">
                Delivery Type
              </label>
              <select
                id="deliveryType"
                value={deliveryType}
                onChange={(e) => setDeliveryType(e.target.value)}
                className="w-full border rounded px-2 py-1"
              >
                <option value="normal">Normal</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Optimize Route
            </button>
          </form>
        </div>
        <div className="flex-1">
          <div className="bg-gray-200 p-4 rounded">
            {/* Placeholder for map */}
            <div className="bg-gray-300 h-64 flex items-center justify-center">Map Placeholder</div>
          </div>
          <div className="mt-4 bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">Optimization Results</h2>
            <p>Estimated Time: 30 minutes</p>
            <p>Fuel Consumption: 2.5 liters</p>
          </div>
        </div>
      </div>
    </div>
  )
}

