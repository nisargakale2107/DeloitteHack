"use client"

import { useState } from "react"

export default function Settings() {
  const [name, setName] = useState("John Doe")
  const [email, setEmail] = useState("john@example.com")
  const [notifications, setNotifications] = useState(true)
  const [dataSource, setDataSource] = useState("realtime")
  const [optimizationPreference, setOptimizationPreference] = useState("distance")
  const [theme, setTheme] = useState("light")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically update the user's settings
    console.log("Updating settings...")
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded px-2 py-1"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                  className="mr-2"
                />
                Receive route alerts
              </label>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">System Preferences</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="dataSource" className="block mb-1">
                Traffic Data Source
              </label>
              <select
                id="dataSource"
                value={dataSource}
                onChange={(e) => setDataSource(e.target.value)}
                className="w-full border rounded px-2 py-1"
              >
                <option value="realtime">Real-time Data</option>
                <option value="historical">Historical Data</option>
              </select>
            </div>
            <div>
              <label htmlFor="optimizationPreference" className="block mb-1">
                Route Optimization Preference
              </label>
              <select
                id="optimizationPreference"
                value={optimizationPreference}
                onChange={(e) => setOptimizationPreference(e.target.value)}
                className="w-full border rounded px-2 py-1"
              >
                <option value="distance">Shortest Distance</option>
                <option value="fuel">Fuel Efficiency</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Theme Preferences</h2>
          <div>
            <label htmlFor="theme" className="block mb-1">
              App Theme
            </label>
            <select
              id="theme"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full border rounded px-2 py-1"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Save Settings
        </button>
      </form>
    </div>
  )
}

