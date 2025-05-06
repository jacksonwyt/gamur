import React from 'react'
import { ScrollView, StyleSheet, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Appbar, List, Divider, Switch, Button, useTheme } from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainStackParamList } from '../navigation/MainNavigator'
import { useAuth } from '../contexts/AuthContext'

type SettingsScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'Settings'
>

export function SettingsScreen({ navigation }: SettingsScreenProps) {
  const theme = useTheme()
  const { logout } = useAuth()
  // Placeholder state for settings
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true)
  const [darkMode, setDarkMode] = React.useState(false)

  const renderDarkModeSwitch = React.useCallback(
    () => <Switch value={darkMode} onValueChange={setDarkMode} />,
    [darkMode, setDarkMode],
  )

  const renderNotificationsSwitch = React.useCallback(
    () => (
      <Switch
        value={notificationsEnabled}
        onValueChange={setNotificationsEnabled}
      />
    ),
    [notificationsEnabled, setNotificationsEnabled],
  )

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Settings" />
      </Appbar.Header>
      <ScrollView style={styles.content}>
        <List.Section title="General">
          <List.Item title="Dark Mode" right={renderDarkModeSwitch} />
          {/* TODO: Link to actual theme switching */}
        </List.Section>
        <Divider />
        <List.Section title="Notifications">
          <List.Item
            title="Enable Notifications"
            right={renderNotificationsSwitch}
          />
          {/* TODO: Add specific notification toggles */}
        </List.Section>
        <Divider />
        <List.Section title="Account">
          <List.Item
            title="Change Password"
            onPress={() => {
              /* TODO */
            }}
          />
          <List.Item
            title="Privacy Policy"
            onPress={() => {
              /* TODO */
            }}
          />
          <List.Item
            title="Terms of Service"
            onPress={() => {
              /* TODO */
            }}
          />
          <Button
            mode="outlined"
            color={theme.colors.error}
            style={styles.button}
            onPress={async () => {
              try {
                await logout()
                // Optional: navigation.replace('Login') or similar if not handled by AuthContext/MainNavigator automatically
              } catch (error) {
                console.error('Logout failed:', error)
                Alert.alert('Logout Failed', 'Could not log out. Please try again.')
              }
            }}>
            Logout
          </Button>
          <Button
            mode="contained"
            buttonColor="red"
            textColor="white"
            style={styles.button}
            onPress={() => {
              /* TODO: Delete account */
            }}>
            Delete Account
          </Button>
        </List.Section>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  button: {
    margin: 16,
  },
})
