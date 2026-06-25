import { Navigate } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"
import type { JSX } from "react"

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth()

  if (loading) {
    return <div className="text-center">...</div>
  }

  if (!user) {
    return <Navigate to="/" replace />
  }

  return children
}