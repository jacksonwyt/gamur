import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'
import * as SecureStore from 'expo-secure-store'
import apiClient from '../api/client' // Import the apiClient to potentially set auth headers

interface AuthContextData {
  token: string | null
  isLoading: boolean
  login: (newToken: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextData | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true) // Start loading initially to check stored token

  useEffect(() => {
    // Load token from secure store on mount
    async function loadToken() {
      try {
        const storedToken = await SecureStore.getItemAsync('authToken')
        if (storedToken) {
          setToken(storedToken)
          // Configure apiClient to use the token for subsequent requests
          apiClient.defaults.headers.common.Authorization = `Bearer ${storedToken}`
        }
      } catch (e) {
        console.error('Failed to load auth token from storage', e)
        // Handle error, maybe navigate to login or show error
      } finally {
        setIsLoading(false)
      }
    }

    loadToken()
  }, [])

  async function login(newToken: string) {
    try {
      await SecureStore.setItemAsync('authToken', newToken)
      setToken(newToken)
      // Configure apiClient with the new token
      apiClient.defaults.headers.common.Authorization = `Bearer ${newToken}`
    } catch (e) {
      console.error('Failed to save auth token', e)
      // Optionally re-throw or handle the error (e.g., show a message)
      throw e // Re-throw to allow calling component to handle it
    }
  }

  async function logout() {
    try {
      await SecureStore.deleteItemAsync('authToken')
      setToken(null)
      // Remove the token from apiClient headers
      delete apiClient.defaults.headers.common.Authorization
    } catch (e) {
      console.error('Failed to delete auth token', e)
      // Optionally re-throw or handle the error
      throw e // Re-throw to allow calling component to handle it
    }
  }

  const value = {
    token,
    isLoading,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
