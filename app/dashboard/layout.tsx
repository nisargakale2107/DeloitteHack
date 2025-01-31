import type React from "react"
import Sidebar from "../components/Sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-10">{children}</div>
    </div>
  )
}

