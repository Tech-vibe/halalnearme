"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { ThemeProvider } from "next-themes"

// Auth Context
interface User {
  id: string
  email: string
  name: string
  role: "customer" | "vendor" | "admin"
  isVerified: boolean
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, name: string, role: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Initialize Firebase Auth listener
    const initAuth = async () => {
      // Simulate auth check
      setLoading(false)
    }
    initAuth()
  }, [])

  const login = async (email: string, password: string) => {
    // Firebase Auth login implementation
    console.log("Login:", email)
  }

  const register = async (email: string, password: string, name: string, role: string) => {
    // Firebase Auth registration implementation
    console.log("Register:", email, name, role)
  }

  const logout = async () => {
    // Firebase Auth logout implementation
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, loading, login, register, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  )
}
