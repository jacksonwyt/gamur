import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button, useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

export function ForgotPasswordScreen() {
  const theme = useTheme()
  const navigation = useNavigation()

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text variant="headlineMedium" style={styles.title}>
        Forgot Password
      </Text>
      <Text style={styles.subtitle}>(Functionality coming soon)</Text>
      {/* Placeholder for email input and submit button */}
      <Button
        mode="outlined"
        onPress={() => navigation.goBack()}
        style={styles.button}>
        Back to Login
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    marginBottom: 20,
    textAlign: 'center',
    opacity: 0.7,
  },
  button: {
    marginTop: 20,
  },
})
