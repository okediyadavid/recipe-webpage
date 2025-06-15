"use client"

import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { AdminNavbar } from "@/components/admin/AdminNavbar"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const { isAuthenticated, isAdmin } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!isAuthenticated || !isAdmin) {
            router.push("/login")
        }
    }, [isAuthenticated, isAdmin, router])

    if (!isAuthenticated || !isAdmin) {
        return null
    }

    return (
        <div className="min-h-screen bg-muted/30">
            <AdminNavbar />
            <main className="pt-4">
                {children}
            </main>
        </div>
    )
} 