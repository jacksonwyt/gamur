import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, useTheme } from 'react-native-paper';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { useAuth } from '../../contexts/AuthContext'; // Import the useAuth hook
import apiClient from '../../api/client'; // Use default import
import { MainStackParamList } from '../../navigation/MainNavigator'; // Use correct exported type name

type EditProfileScreenRouteProp = RouteProp<
  MainStackParamList, // Use correct param list type
  'EditProfile'
>;

export function EditProfileScreen() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute<EditProfileScreenRouteProp>();
  const { token } = useAuth(); // Use the hook and get the token

  // Ensure route.params exists and has currentUsername, provide default
  const currentUsername = route.params?.currentUsername ?? '';

  const [username, setUsername] = useState(currentUsername);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // --- Handlers ---
  async function handleUpdateProfile() {
    // Basic validation
    if (!username || username.trim().length < 3) {
      setError('Username must be at least 3 characters long.');
      return;
    }
    // Check if username actually changed
    if (username.trim() === currentUsername) {
      navigation.goBack(); // No changes, just go back
      return;
    }
    // Check for token
    if (!token) {
        setError('Authentication error. Please log in again.');
        // Optional: Consider navigation.navigate('Login');
        return;
    }

    setIsLoading(true);
    setError(null);

    try {
        // Make API call with authorization header
        const response = await apiClient.put(
          '/profile/me',
           { username: username.trim() },
           {
             headers: { Authorization: `Bearer ${token}` } // Use the token from useAuth
           }
        );

        if (response.status === 200) {
            // Success: Navigate back. ProfileScreen will refetch data.
            navigation.goBack();
            // TODO: Add Snackbar feedback on ProfileScreen after navigation?
        } else {
            // Handle unexpected success status codes (e.g., 201, 204 if applicable)
            setError(`Update failed with status: ${response.status}. Please try again.`);
        }
    } catch (err: any) {
        console.error('Update Profile Error:', err);
        // Extract user-friendly error message from response if available
        const message = err.response?.data?.message || 'An unexpected error occurred while updating your profile.';
        setError(message);
    } finally {
        setIsLoading(false);
    }
  }

  // --- Render ---
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Consider adding Appbar.Header here for consistency */}
      <Text variant="headlineMedium" style={styles.title}>
        Edit Username
      </Text>

      {error && (
        <Text style={[styles.errorText, { color: theme.colors.error }]}>
          {error}
        </Text>
      )}

      <TextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
        mode="outlined"
        style={styles.input}
        disabled={isLoading}
        autoCapitalize="none"
        maxLength={30}
        error={!!error} // Highlight field if there's an error related to it
      />

      <Button
        mode="contained"
        onPress={handleUpdateProfile}
        loading={isLoading}
        // Disable if loading, no token, length < 3, or username hasn't changed
        disabled={isLoading || !token || username.trim().length < 3 || username.trim() === currentUsername}
        style={styles.button}
      >
        Save Changes
      </Button>

      <Button
        mode="outlined"
        onPress={() => navigation.goBack()}
        disabled={isLoading}
        style={styles.button}
      >
        Cancel
      </Button>
    </View>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
  },
  errorText: {
    // color: 'red', // Use theme color instead
    marginBottom: 10,
    textAlign: 'center',
  },
});

// --- Helper Functions (if any) ---

// --- Static Content (if any) ---

// --- Types (if any) --- 