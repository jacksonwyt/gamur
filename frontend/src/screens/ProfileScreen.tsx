import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Appbar, Text, Avatar, Button } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../navigation/MainNavigator';

type ProfileScreenProps = NativeStackScreenProps<MainStackParamList, 'Profile'>;

export function ProfileScreen({ navigation }: ProfileScreenProps) {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Profile" />
      </Appbar.Header>
      <View style={styles.content}>
        <Avatar.Icon size={80} icon="account-circle" style={styles.avatar} />
        <Text variant="headlineMedium" style={styles.username}>
          Username Placeholder
        </Text>
        <Text style={styles.level}>Level 1 - XP: 0/100</Text>
        {/* TODO: Add profile details (email, etc.) and edit functionality */}
        <Button mode="outlined" style={styles.button}>
          Edit Profile
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
}); 