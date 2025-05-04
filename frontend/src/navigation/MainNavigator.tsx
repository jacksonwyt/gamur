import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen'; // Import the placeholder screen
import { LoginScreen } from '../screens/LoginScreen'; // Import LoginScreen
import { SignUpScreen } from '../screens/SignUpScreen'; // Import SignUpScreen
import { HabitListScreen } from '../screens/HabitListScreen'; // Import HabitListScreen
import { CreateHabitScreen } from '../screens/CreateHabitScreen'; // Import CreateHabitScreen
import { ProfileScreen } from '../screens/ProfileScreen'; // Import ProfileScreen
import { SettingsScreen } from '../screens/SettingsScreen'; // Import SettingsScreen
import { HabitDetailScreen } from '../screens/HabitDetailScreen'; // Import HabitDetailScreen

// Define the type for the stack parameters
export type MainStackParamList = {
  Home: undefined; // No params expected for Home screen
  Login: undefined; // Added Login screen
  SignUp: undefined; // Added SignUp screen
  HabitList: undefined; // Add HabitList route
  CreateHabit: undefined; // Add CreateHabit route
  Profile: undefined; // Added Profile screen
  Settings: undefined; // Added Settings screen
  HabitDetail: { habitId: string }; // Added HabitDetail screen (will need ID)
  // Add other screens here later, e.g., Login: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

export function MainNavigator() {
  // Determine initial route based on auth status (later)
  const initialRoute: keyof MainStackParamList = 'Login'; // Start with Login for now

  return (
    <Stack.Navigator 
      initialRouteName={initialRoute}
      screenOptions={{ headerShown: false }} // Default to no header
    >
      {/* Auth Screens */} 
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      
      {/* Main App Screen (after login) */}
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        // options={{ 
        //   title: 'Dashboard', 
        options={{ 
          title: 'Dashboard', 
          headerShown: true // Show header only for Home/Dashboard
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
    </Stack.Navigator>
  );
} 