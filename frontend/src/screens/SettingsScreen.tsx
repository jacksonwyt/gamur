import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Appbar, List, Divider, Switch, Button } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../navigation/MainNavigator';

type SettingsScreenProps = NativeStackScreenProps<MainStackParamList, 'Settings'>;

export function SettingsScreen({ navigation }: SettingsScreenProps) {
  // Placeholder state for settings
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Settings" />
      </Appbar.Header>
      <ScrollView style={styles.content}>
        <List.Section title="General">
          <List.Item
            title="Dark Mode"
            right={() => <Switch value={darkMode} onValueChange={setDarkMode} />}
          />
          {/* TODO: Link to actual theme switching */} 
        </List.Section>
        <Divider />
        <List.Section title="Notifications">
          <List.Item
            title="Enable Notifications"
            right={() => (
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
              />
            )}
          />
          {/* TODO: Add specific notification toggles */} 
        </List.Section>
        <Divider />
        <List.Section title="Account">
          <List.Item title="Change Password" onPress={() => { /* TODO */ }} />
          <List.Item title="Privacy Policy" onPress={() => { /* TODO */ }} />
          <List.Item title="Terms of Service" onPress={() => { /* TODO */ }} />
          <Button mode="outlined" color="red" style={styles.button} onPress={() => { /* TODO: Logout */ }}>
            Logout
          </Button>
           <Button mode="contained" buttonColor="red" textColor="white" style={styles.button} onPress={() => { /* TODO: Delete account */ }}>
            Delete Account
          </Button>
        </List.Section>
      </ScrollView>
    </SafeAreaView>
  );
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
}); 