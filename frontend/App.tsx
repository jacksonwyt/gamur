import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PaperProvider } from 'react-native-paper'
import { AuthProvider } from './src/contexts/AuthContext'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import theme from './src/theme/theme'
import { MainNavigator } from './src/navigation/MainNavigator'

// Create a client
const queryClient = new QueryClient()

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <NavigationContainer>
              <MainNavigator />
              <StatusBar style="auto" />
            </NavigationContainer>
          </QueryClientProvider>
        </AuthProvider>
      </PaperProvider>
    </SafeAreaProvider>
  )
}
