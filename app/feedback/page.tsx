"use client"

import { useState } from "react"

export default function Feedback() {
  const [feedback, setFeedback] = useState("")
  const [category, setCategory] = useState("general")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the feedback to your backend
    console.log("Submitting feedback:", { category, feedback })
    // Reset form
    setFeedback("")
    setCategory("general")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Feedback</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="category" className="block mb-2">
            Feedback Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded px-2 py-1"
          >
            <option value="general">General</option>
            <option value="route">Route Optimization</option>
            <option value="traffic">Traffic Data</option>
            <option value="app">App Experience</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="feedback" className="block mb-2">
            Your Feedback
          </label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full h-32 border rounded px-2 py-1"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit Feedback
        </button>
      </form>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">How accurate is the traffic data?</h3>
            <p>Our traffic data is updated in real-time and has an accuracy rate of over 95%.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Can I customize my route preferences?</h3>
            <p>Yes, you can set your preferences in the Settings page to optimize for distance or fuel efficiency.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">How often is the app updated?</h3>
            <p>We release updates on a bi-weekly basis to ensure optimal performance and introduce new features.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

