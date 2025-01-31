import Link from "next/link"

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/dashboard/route-optimization" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Route Optimization
            </Link>
          </li>
          <li>
            <Link href="/dashboard/traffic-analysis" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Traffic Analysis
            </Link>
          </li>
          <li>
            <Link href="/dashboard/settings" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar

