import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to TrafficOptimizer</h1>
        <p className="text-xl mb-8">Intelligent route planning and traffic analysis for smarter cities</p>
        <Link
          href="/signup"
          className="bg-blue-600 text-white px-6 py-2 rounded-full text-lg hover:bg-blue-700 transition-colors"
        >
          Get Started
        </Link>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Route Optimization</h3>
            <p>Get the most efficient routes for your fleet, saving time and fuel.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
            <p>Monitor your vehicles and traffic conditions in real-time.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Traffic Analysis</h3>
            <p>Gain insights into traffic patterns to improve urban planning.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

