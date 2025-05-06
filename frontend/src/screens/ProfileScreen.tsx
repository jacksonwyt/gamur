import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Appbar, Text, Avatar, Button, Snackbar } from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainStackParamList } from '../navigation/MainNavigator'
import apiClient from '../api/client' // Assuming API client path
import { useAuth } from '../contexts/AuthContext' // Import the custom hook

type ProfileData = {
  id: string
  userId: string
  username: string
  currentLevel: number
  currentXP: number
  xpToNextLevel: number
  // Add other profile fields as needed, e.g., avatarConfig
  createdAt: string
  updatedAt: string
}

type ProfileScreenProps = NativeStackScreenProps<MainStackParamList, 'Profile'>

export function ProfileScreen({ navigation }: ProfileScreenProps) {
  const [profileData, setProfileData] = useState<ProfileData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { logout } = useAuth() // Use the custom hook and get the logout function

  useEffect(() => {
    async function fetchProfile() {
      setIsLoading(true)
      setError(null)
      try {
        // TODO: Ensure apiClient is configured to send auth token
        const response = await apiClient.get<ProfileData>('/profile/me')
        setProfileData(response.data)
      } catch (err: any) {
        console.error('Failed to fetch profile:', err)
        if (err.response?.status === 401) {
          // Unauthorized, likely expired token
          setError('Session expired. Please log in again.')
          // Optional: Trigger automatic sign out after a delay or user action
          // await logout();
          // navigation.navigate('Login'); // Redirect to login
        } else {
          setError('Failed to load profile data. Please try again.')
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchProfile()
  }, [logout]) // Dependency is now logout

  const handleEditProfile = () => {
    if (profileData) {
      // Navigate to the EditProfile screen and pass currentUsername
      navigation.navigate('EditProfile', {
        currentUsername: profileData.username ?? '',
      })
    } else {
      // Handle case where profile data is not available (optional)
      console.log('Profile data not available to edit.')
      // Maybe show a message to the user
    }
  }

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Profile" />
        </Appbar.Header>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Profile" />
      </Appbar.Header>
      <View style={styles.content}>
        {profileData ? (
          <>
            <Avatar.Icon
              size={80}
              icon="account-circle"
              style={styles.avatar}
            />
            <Text variant="headlineMedium" style={styles.username}>
              {profileData.username}
            </Text>
            <Text style={styles.level}>
              Level {profileData.currentLevel} - XP: {profileData.currentXP}/
              {profileData.xpToNextLevel}
            </Text>
            {/* TODO: Add other profile details display */}
            <Button
              mode="outlined"
              onPress={handleEditProfile}
              style={styles.button}>
              Edit Profile
            </Button>
          </>
        ) : (
          <Text>Could not load profile data.</Text> // Display if data is null after loading
        )}
      </View>
      <Snackbar
        visible={!!error}
        onDismiss={() => setError(null)}
        action={{
          label: 'Dismiss',
          onPress: () => setError(null),
        }}>
        {error}
      </Snackbar>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    marginTop: 20,
  },
  avatar: {
    marginBottom: 16,
  },
  username: {
    marginBottom: 8,
  },
  level: {
    marginBottom: 24,
    color: 'grey',
  },
  button: {
    marginTop: 16,
    width: '80%',
  },
})
