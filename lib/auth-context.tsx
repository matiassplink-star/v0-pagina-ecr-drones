"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type UserPlan = 'free' | 'vip' | 'premium'

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  plan: UserPlan
  progress: number
  completedLessons: number
  totalLessons: number
  joinedAt: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string, plan?: UserPlan) => Promise<boolean>
  logout: () => void
  updatePlan: (plan: UserPlan) => void
  updateProgress: (completedLessons: number) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const DEMO_USERS: Record<string, { password: string; user: User }> = {
  'demo@ecrdrones.com': {
    password: 'demo123',
    user: {
      id: '1',
      name: 'Aluno Demo',
      email: 'demo@ecrdrones.com',
      plan: 'free',
      progress: 25,
      completedLessons: 3,
      totalLessons: 12,
      joinedAt: '2024-01-15'
    }
  },
  'vip@ecrdrones.com': {
    password: 'vip123',
    user: {
      id: '2',
      name: 'Aluno VIP',
      email: 'vip@ecrdrones.com',
      plan: 'vip',
      progress: 65,
      completedLessons: 8,
      totalLessons: 12,
      joinedAt: '2024-01-10'
    }
  },
  'premium@ecrdrones.com': {
    password: 'premium123',
    user: {
      id: '3',
      name: 'Aluno Premium',
      email: 'premium@ecrdrones.com',
      plan: 'premium',
      progress: 81,
      completedLessons: 10,
      totalLessons: 12,
      joinedAt: '2024-01-05'
    }
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem('ecr_user')
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch {
        localStorage.removeItem('ecr_user')
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    const storedUsers = localStorage.getItem('ecr_registered_users')
    const registeredUsers = storedUsers ? JSON.parse(storedUsers) : {}
    
    // Check demo users first
    const demoUser = DEMO_USERS[email.toLowerCase()]
    if (demoUser && demoUser.password === password) {
      setUser(demoUser.user)
      localStorage.setItem('ecr_user', JSON.stringify(demoUser.user))
      return true
    }
    
    // Check registered users
    const registeredUser = registeredUsers[email.toLowerCase()]
    if (registeredUser && registeredUser.password === password) {
      setUser(registeredUser.user)
      localStorage.setItem('ecr_user', JSON.stringify(registeredUser.user))
      return true
    }
    
    return false
  }

  const register = async (name: string, email: string, password: string, plan: UserPlan = 'free'): Promise<boolean> => {
    const storedUsers = localStorage.getItem('ecr_registered_users')
    const registeredUsers = storedUsers ? JSON.parse(storedUsers) : {}
    
    if (DEMO_USERS[email.toLowerCase()] || registeredUsers[email.toLowerCase()]) {
      return false // Email already exists
    }
    
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email: email.toLowerCase(),
      plan,
      progress: 0,
      completedLessons: 0,
      totalLessons: 12,
      joinedAt: new Date().toISOString().split('T')[0]
    }
    
    registeredUsers[email.toLowerCase()] = { password, user: newUser }
    localStorage.setItem('ecr_registered_users', JSON.stringify(registeredUsers))
    
    setUser(newUser)
    localStorage.setItem('ecr_user', JSON.stringify(newUser))
    
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('ecr_user')
  }

  const updatePlan = (plan: UserPlan) => {
    if (user) {
      const updatedUser = { ...user, plan }
      setUser(updatedUser)
      localStorage.setItem('ecr_user', JSON.stringify(updatedUser))
      
      // Update in registered users
      const storedUsers = localStorage.getItem('ecr_registered_users')
      if (storedUsers) {
        const registeredUsers = JSON.parse(storedUsers)
        if (registeredUsers[user.email]) {
          registeredUsers[user.email].user = updatedUser
          localStorage.setItem('ecr_registered_users', JSON.stringify(registeredUsers))
        }
      }
    }
  }

  const updateProgress = (completedLessons: number) => {
    if (user) {
      const progress = Math.round((completedLessons / user.totalLessons) * 100)
      const updatedUser = { ...user, completedLessons, progress }
      setUser(updatedUser)
      localStorage.setItem('ecr_user', JSON.stringify(updatedUser))
    }
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout, updatePlan, updateProgress }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
