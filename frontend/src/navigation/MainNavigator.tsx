import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native' // Added StyleSheet
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useAuth } from '../contexts/AuthContext' // Import useAuth
import { HomeScreen } from '../screens/HomeScreen' // Import the placeholder screen
import { LoginScreen } from '../screens/LoginScreen' // Import LoginScreen
import { SignUpScreen } from '../screens/SignUpScreen' // Import SignUpScreen
import { HabitListScreen } from '../screens/HabitListScreen' // Import HabitListScreen
import { CreateHabitScreen } from '../screens/CreateHabitScreen' // Import CreateHabitScreen
import { ProfileScreen } from '../screens/ProfileScreen' // Import ProfileScreen
import { SettingsScreen } from '../screens/SettingsScreen' // Import SettingsScreen
import { HabitDetailScreen } from '../screens/HabitDetailScreen' // Import HabitDetailScreen
import { EditProfileScreen } from '../screens/profile/EditProfileScreen' // Import the new screen
import { ForgotPasswordScreen } from '../screens/ForgotPasswordScreen' // Import ForgotPasswordScreen

// Define the type for the stack parameters
export type MainStackParamList = {
  Home: undefined // No params expected for Home screen
  Login: undefined // Added Login screen
  SignUp: undefined // Added SignUp screen
  HabitList: undefined // Add HabitList route
  CreateHabit: undefined // Add CreateHabit route
  Profile: undefined // Added Profile screen
  Settings: undefined // Added Settings screen
  HabitDetail: { habitId: string } // Added HabitDetail screen (will need ID)
  EditProfile: { currentUsername?: string } // Define parameters for EditProfile
  ForgotPassword: undefined // Add ForgotPassword screen
  // Add other screens here later, e.g., Login: undefined;
}

const Stack = createNativeStackNavigator<MainStackParamList>()

// Define the Auth stack component
function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  )
}

// Define the App stack component
function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home" // Default to Home when logged in
      screenOptions={{ headerShown: false }} // Default to no header
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Dashboard',
          headerShown: true, // Show header only for Home/Dashboard
        }}
      />
      <Stack.Screen
        name="HabitList"
        component={HabitListScreen}
        options={{ headerShown: false }} // HabitListScreen has its own Appbar
      />
      <Stack.Screen
        name="CreateHabit"
        component={CreateHabitScreen}
        options={{ headerShown: false }} // CreateHabitScreen has its own Appbar
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        // options={{ headerShown: false }} // ProfileScreen has its own Appbar
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        // options={{ headerShown: false }} // SettingsScreen has its own Appbar
      />
      <Stack.Screen
        name="HabitDetail"
        component={HabitDetailScreen}
        // options={{ headerShown: false }} // HabitDetailScreen has its own Appbar
      />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  )
}

export function MainNavigator() {
  const { token, isLoading } = useAuth()

  if (isLoading) {
    // Show a loading screen while checking for the token
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  // Conditionally render AuthStack or AppStack based on token
  return token ? <AppStack /> : <AuthStack />
}

// Added StyleSheet for loading container
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
