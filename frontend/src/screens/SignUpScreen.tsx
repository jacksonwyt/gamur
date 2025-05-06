import React, { useState } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, TextInput, Button } from 'react-native-paper'
import { useAuth } from '../contexts/AuthContext'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainStackParamList } from '../navigation/MainNavigator'
import apiClient from '../api/client'

interface SignUpResponse {
  accessToken: string
}

type SignUpScreenProps = NativeStackScreenProps<MainStackParamList, 'SignUp'>

export function SignUpScreen({ navigation }: SignUpScreenProps) {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSignUp() {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.')
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await apiClient.post<SignUpResponse>('/auth/register', {
        email,
        password,
      })

      // Log the raw response data to understand its structure
      console.log('API Response data:', JSON.stringify(response.data, null, 2))

      const { accessToken } = response.data

      // Log the extracted token and its type for verification
      console.log('Extracted accessToken:', accessToken)
      console.log('Type of accessToken:', typeof accessToken)

      // Ensure accessToken is a string before proceeding
      if (typeof accessToken !== 'string') {
        console.error(
          'Sign up error: accessToken is not a string.',
          accessToken,
        )
        const errorMessage = 'Received invalid token format from the server.'
        setError(errorMessage)
        Alert.alert('Sign Up Error', errorMessage)
        setIsLoading(false) // Ensure loading state is reset
        return // Stop execution if token is invalid
      }

      await login(accessToken)
      console.log('Sign up successful, token stored via context')
    } catch (err) {
      let errorMessage = 'Sign up failed. Please try again.'
      // Check if it's an Axios-like error with a response object
      if (
        err &&
        typeof err === 'object' &&
        'response' in err &&
        err.response &&
        typeof err.response === 'object' &&
        err.response !== null
      ) {
        const responseError = err.response as { data?: { message?: string } } // Basic type for response data
        if (responseError.data?.message) {
          errorMessage = responseError.data.message
        }
        console.error('Sign up failed:', responseError.data || err.message)
      } else if (err instanceof Error) {
        errorMessage = err.message
        console.error('Sign up failed:', err.message)
      } else {
        console.error('Sign up failed with unknown error type:', err)
      }
      setError(errorMessage)
      Alert.alert('Sign Up Error', errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  function handleNavigateToLogin() {
    navigation.navigate('Login')
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Sign Up
        </Text>
        {error && <Text style={styles.errorText}>{error}</Text>}
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          disabled={isLoading}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          mode="outlined"
          style={styles.input}
          secureTextEntry
          disabled={isLoading}
        />
        <TextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          mode="outlined"
          style={styles.input}
          secureTextEntry
          disabled={isLoading}
        />
        <Button
          mode="contained"
          onPress={handleSignUp}
          style={styles.button}
          disabled={isLoading}
          loading={isLoading}>
          {isLoading ? 'Signing Up...' : 'Sign Up'}
        </Button>
        <Button
          mode="text"
          onPress={handleNavigateToLogin}
          style={styles.button}
          disabled={isLoading}>
          Already have an account? Login
        </Button>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    marginBottom: 24,
  },
  input: {
    width: '100%',
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
    width: '100%',
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
    textAlign: 'center',
  },
})
