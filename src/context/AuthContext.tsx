import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext<any>(null)

const AUTH_STORAGE_KEY = 'isAuthenticated'

export const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadAuthState = async () => {
      try {
        const storedValue = await AsyncStorage.getItem(AUTH_STORAGE_KEY)
        setIsAuthenticated(storedValue === 'true')
      } finally {
        setIsLoading(false)
      }
    }

    loadAuthState()
  }, [])

  const login = async () => {
    setIsAuthenticated(true)
    await AsyncStorage.setItem(AUTH_STORAGE_KEY, 'true')
  }

  const logout = async () => {
    setIsAuthenticated(false)
    await AsyncStorage.removeItem(AUTH_STORAGE_KEY)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  )
}