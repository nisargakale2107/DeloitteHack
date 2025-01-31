"use client"

import { useState } from "react"

export default function Dashboard() {
  const [userType, setUserType] = useState("driver") // Can be 'driver', 'cityPlanner', or 'admin'

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* User type selector */}
      <div className="mb-6">
        <label htmlFor="userType" className="block mb-2">
          Select User Type:
        </label>
        <select
          id="userType"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="driver">Driver</option>
          <option value="cityPlanner">City Planner</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      {/* Driver View */}
      {userType === "driver" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Current Route</h2>
          <div className="bg-gray-200 p-4 rounded">
            {/* Placeholder for map */}
            <div className="bg-gray-300 h-64 flex items-center justify-center">Map Placeholder</div>
          </div>
        </div>
      )}

      {/* City Planner View */}
      {userType === "cityPlanner" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Traffic Insights</h2>
          <div className="bg-gray-200 p-4 rounded">
            {/* Placeholder for traffic heatmap */}
            <div className="bg-gray-300 h-64 flex items-center justify-center">Traffic Heatmap Placeholder</div>
          </div>
        </div>
      )}

      {/* Admin View */}
      {userType === "admin" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">System Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-200 p-4 rounded">
              <h3 className="text-xl font-semibold mb-2">Fleet Status</h3>
              {/* Placeholder for fleet status chart */}
              <div className="bg-gray-300 h-40 flex items-center justify-center">Fleet Status Chart Placeholder</div>
            </div>
            <div className="bg-gray-200 p-4 rounded">
              <h3 className="text-xl font-semibold mb-2">System Efficiency</h3>
              {/* Placeholder for efficiency chart */}
              <div className="bg-gray-300 h-40 flex items-center justify-center">Efficiency Chart Placeholder</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

