import React, { useState } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, TextInput, Button } from 'react-native-paper' // Removed ActivityIndicator
import { useAuth } from '../contexts/AuthContext' // Import useAuth hook
import { NativeStackScreenProps } from '@react-navigation/native-stack' // Import navigation types
import { MainStackParamList } from '../navigation/MainNavigator' // Import stack param list
import apiClient from '../api/client' // Import the apiClient

// TODO: Define a proper type for the login response (e.g., containing a token)
interface LoginResponse {
  accessToken: string
  // Add other expected fields from the backend response if necessary
}

// Define props type including navigation
type LoginScreenProps = NativeStackScreenProps<MainStackParamList, 'Login'>

export function LoginScreen({ navigation }: LoginScreenProps) {
  // Destructure navigation prop
  const { login } = useAuth() // Get login function from context
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false) // Add loading state
  const [error, setError] = useState<string | null>(null) // Add error state

  async function handleLogin() {
    // Make the function async
    setIsLoading(true)
    setError(null)

    try {
      // TODO: Update the endpoint if your backend route is different
      const response = await apiClient.post<LoginResponse>('/auth/login', {
        email,
        password,
      })

      console.log('Backend login response data:', JSON.stringify(response.data, null, 2));
      const { access_token: accessToken } = response.data;
      console.log('Extracted accessToken:', accessToken);
      console.log('Type of accessToken:', typeof accessToken);

      // TODO: Securely store the access token (e.g., using expo-secure-store)
      // console.log('Login successful, token:', accessToken);
      try {
        await login(accessToken) // Use the login function from AuthContext
        console.log('Token stored and context updated')

        // TODO: Update global auth state (e.g., using Context API)

        // Navigate to Home on successful login
        navigation.replace('Home')
      } catch (storeError) {
        console.error('Failed to store the auth token via context:', storeError)
        // Handle storage error, maybe show an alert to the user
        Alert.alert('Storage Error', 'Could not save login information.')
        // Optionally, don't navigate if storage fails, or log the user out.
        setError('Failed to save login session.') // Update error state
      }
    } catch (err) {
      // Catch errors
      // Type err more specifically if possible, e.g., AxiosError
      let errorMessage = 'Login failed. Please check your credentials.'
      if (
        err instanceof Error &&
        'response' in err &&
        err.response &&
        typeof err.response === 'object' &&
        err.response !== null &&
        'data' in err.response &&
        err.response.data &&
        typeof err.response.data === 'object' &&
        err.response.data !== null &&
        'message' in err.response.data
      ) {
        errorMessage =
          (err.response.data as { message: string }).message || errorMessage
        console.error('Login failed:', err.response.data)
      } else if (err instanceof Error) {
        errorMessage = err.message
        console.error('Login failed:', err.message)
      } else {
        console.error('Login failed with unknown error type:', err)
      }

      setError(errorMessage)
      // Optionally show an alert
      Alert.alert(
        'Login Error',
        errorMessage || 'An unexpected error occurred.',
      )
    } finally {
      setIsLoading(false)
    }
  }

  function handleNavigateToSignUp() {
    navigation.navigate('SignUp') // Navigate to the SignUp screen
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Login
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
          disabled={isLoading} // Disable input when loading
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          mode="outlined"
          style={styles.input}
          secureTextEntry
          disabled={isLoading} // Disable input when loading
        />
        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.button}
          disabled={isLoading} // Disable button when loading
          loading={isLoading} // Show loading indicator in button
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
        <Button
          mode="text"
          onPress={handleNavigateToSignUp}
          style={styles.button}
          disabled={isLoading} // Disable button when loading
        >
          Don&apos;t have an account? Sign Up
        </Button>
        <Button
          mode="text"
          onPress={() => navigation.navigate('ForgotPassword')}
          style={styles.forgotPasswordButton}
          labelStyle={styles.forgotPasswordLabel}
          disabled={isLoading}>
          Forgot Password?
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
  forgotPasswordButton: {
    marginTop: 4,
    alignSelf: 'center',
  },
  forgotPasswordLabel: {
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
    textAlign: 'center',
  },
})
