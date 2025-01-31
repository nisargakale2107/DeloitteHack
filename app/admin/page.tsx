"use client"

import { useState } from "react"

export default function Admin() {
  const [selectedReport, setSelectedReport] = useState("daily")

  // Placeholder data
  const overviewData = {
    activeDeliveries: 150,
    totalFleet: 200,
    onlineDrivers: 180,
  }

  const analyticsData = {
    averageDeliveryTime: "28 minutes",
    fuelSavings: "15%",
    routeEfficiency: "92%",
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <p>Active Deliveries: {overviewData.activeDeliveries}</p>
          <p>Total Fleet: {overviewData.totalFleet}</p>
          <p>Online Drivers: {overviewData.onlineDrivers}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Key Metrics</h2>
          <p>Avg. Delivery Time: {analyticsData.averageDeliveryTime}</p>
          <p>Fuel Savings: {analyticsData.fuelSavings}</p>
          <p>Route Efficiency: {analyticsData.routeEfficiency}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full mb-2">
            Send System Alert
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full">
            Generate Report
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-semibold mb-4">Performance Analytics</h2>
        <div className="bg-gray-200 h-64 flex items-center justify-center">Performance Chart Placeholder</div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Reports</h2>
        <div className="mb-4">
          <label htmlFor="report" className="block mb-2">
            Select Report:
          </label>
          <select
            id="report"
            value={selectedReport}
            onChange={(e) => setSelectedReport(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="daily">Daily Report</option>
            <option value="weekly">Weekly Report</option>
            <option value="monthly">Monthly Report</option>
          </select>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Download {selectedReport.charAt(0).toUpperCase() + selectedReport.slice(1)} Report
        </button>
      </div>
    </div>
  )
}

