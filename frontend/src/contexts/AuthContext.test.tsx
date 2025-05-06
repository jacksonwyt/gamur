import React from 'react'
import { renderHook, act } from '@testing-library/react-native'
import * as SecureStore from 'expo-secure-store'
import apiClient from '../api/client'
import { AuthProvider, useAuth } from './AuthContext'

// Mock SecureStore
jest.mock('expo-secure-store', () => ({
  getItemAsync: jest.fn(),
  setItemAsync: jest.fn(),
  deleteItemAsync: jest.fn(),
}))

// Mock apiClient
jest.mock('../api/client', () => ({
  defaults: {
    headers: {
      common: {},
    },
  },
}))

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <AuthProvider>{children}</AuthProvider>
)

describe('AuthContext', () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks()
    apiClient.defaults.headers.common = {} // Reset headers
  })

  it('should load token from storage on init', async () => {
    const mockToken = 'test-token'
    ;(SecureStore.getItemAsync as jest.Mock).mockResolvedValueOnce(mockToken)

    const { result } = renderHook(() => useAuth(), { wrapper })

    // Wait for useEffect to run and state to update
    await act(async () => {
      // Wait for isLoading to become false
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    expect(SecureStore.getItemAsync).toHaveBeenCalledWith('authToken')
    expect(result.current.token).toBe(mockToken)
    expect(apiClient.defaults.headers.common.Authorization).toBe(
      `Bearer ${mockToken}`,
    )
    expect(result.current.isLoading).toBe(false)
  })

  it('should be in loading state initially and then false if no token', async () => {
    ;(SecureStore.getItemAsync as jest.Mock).mockResolvedValueOnce(null)
    const { result } = renderHook(() => useAuth(), { wrapper })
    expect(result.current.isLoading).toBe(true) // Initial state before useEffect finishes

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0))
    })
    expect(result.current.isLoading).toBe(false)
    expect(result.current.token).toBeNull()
  })

  it('login should store token and update state and apiClient headers', async () => {
    const newToken = 'new-login-token'
    const { result } = renderHook(() => useAuth(), { wrapper })

    await act(async () => {
      await result.current.login(newToken)
    })

    expect(SecureStore.setItemAsync).toHaveBeenCalledWith('authToken', newToken)
    expect(result.current.token).toBe(newToken)
    expect(apiClient.defaults.headers.common.Authorization).toBe(
      `Bearer ${newToken}`,
    )
  })

  it('logout should remove token and update state and apiClient headers', async () => {
    // First, simulate a login
    const initialToken = 'initial-token'
    ;(SecureStore.getItemAsync as jest.Mock).mockResolvedValueOnce(initialToken)
    const { result } = renderHook(() => useAuth(), { wrapper })

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0)) // for initial load
    })
    expect(result.current.token).toBe(initialToken) // Ensure token is set initially

    // Then, logout
    await act(async () => {
      await result.current.logout()
    })

    expect(SecureStore.deleteItemAsync).toHaveBeenCalledWith('authToken')
    expect(result.current.token).toBeNull()
    expect(apiClient.defaults.headers.common.Authorization).toBeUndefined()
  })

  it('should handle error when loading token fails', async () => {
    ;(SecureStore.getItemAsync as jest.Mock).mockRejectedValueOnce(
      new Error('Failed to load'),
    )
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    const { result } = renderHook(() => useAuth(), { wrapper })

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    expect(result.current.isLoading).toBe(false)
    expect(result.current.token).toBeNull()
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Failed to load auth token from storage',
      expect.any(Error),
    )
    consoleErrorSpy.mockRestore()
  })

  it('should handle error when saving token fails during login', async () => {
    ;(SecureStore.setItemAsync as jest.Mock).mockRejectedValueOnce(
      new Error('Failed to save'),
    )
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {})
    const { result } = renderHook(() => useAuth(), { wrapper })

    await expect(
      act(async () => {
        await result.current.login('any-token')
      }),
    ).rejects.toThrow('Failed to save')

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Failed to save auth token',
      expect.any(Error),
    )
    consoleErrorSpy.mockRestore()
  })

  it('should handle error when deleting token fails during logout', async () => {
    ;(SecureStore.deleteItemAsync as jest.Mock).mockRejectedValueOnce(
      new Error('Failed to delete'),
    )
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {})
    const { result } = renderHook(() => useAuth(), { wrapper })

    await expect(
      act(async () => {
        await result.current.logout()
      }),
    ).rejects.toThrow('Failed to delete')

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Failed to delete auth token',
      expect.any(Error),
    )
    consoleErrorSpy.mockRestore()
  })
})
