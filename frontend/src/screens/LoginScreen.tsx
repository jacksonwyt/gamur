import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TextInput, Button } from 'react-native-paper'; // Using Paper components
import { NativeStackScreenProps } from '@react-navigation/native-stack'; // Import navigation types
import { MainStackParamList } from '../navigation/MainNavigator'; // Import stack param list

// Define props type including navigation
type LoginScreenProps = NativeStackScreenProps<MainStackParamList, 'Login'>;

export function LoginScreen({ navigation }: LoginScreenProps) { // Destructure navigation prop
  // Placeholder state and handlers will go here
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleLogin() {
    // TODO: Implement real login logic (API call, state update)
    console.log('Login attempt:', email);
    // Navigate to Home on successful login (placeholder)
    navigation.replace('Home'); // Use replace to prevent going back to Login
  }

  function handleNavigateToSignUp() {
    navigation.navigate('SignUp'); // Navigate to the SignUp screen
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Login
        </Text>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          mode="outlined"
          style={styles.input}
          secureTextEntry
        />
        <Button mode="contained" onPress={handleLogin} style={styles.button}>
          Login
        </Button>
        <Button mode="text" onPress={handleNavigateToSignUp} style={styles.button}>
          Don't have an account? Sign Up
        </Button>
      </View>
    </SafeAreaView>
  );
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
}); 