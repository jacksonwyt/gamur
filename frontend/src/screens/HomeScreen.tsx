import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  Appbar,
  Avatar,
  Button,
  Card,
  List,
  Text,
  Title,
} from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainStackParamList } from '../navigation/MainNavigator'

type HomeScreenProps = NativeStackScreenProps<MainStackParamList, 'Home'>

export function HomeScreen({ navigation }: HomeScreenProps) {
  function handleNavigateToHabits() {
    navigation.navigate('HabitList')
  }

  function handleNavigateToProfile() {
    navigation.navigate('Profile')
  }

  function handleNavigateToSettings() {
    navigation.navigate('Settings')
  }

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <Appbar.Header>
        <Appbar.Content title="Dashboard" />
        <Appbar.Action
          icon="account-circle"
          onPress={handleNavigateToProfile}
        />
        <Appbar.Action icon="cog" onPress={handleNavigateToSettings} />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Card style={styles.card}>
          <Card.Title
            title="Welcome Back!"
            subtitle="Here's your dashboard overview."
            left={props => <Avatar.Icon {...props} icon="account-circle" />}
          />
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title>Mood</Title>
            <Text>Placeholder for mood display/tracker.</Text>
            {/* TODO: Add mood chart or interactive element */}
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title>Today's Habits</Title>
            <List.Item
              title="Drink Water"
              description="8 glasses"
              left={props => <List.Icon {...props} icon="cup-water" />}
              right={props => (
                <List.Icon {...props} icon="check-circle-outline" />
              )}
            />
            <List.Item
              title="Morning Walk"
              description="30 minutes"
              left={props => <List.Icon {...props} icon="walk" />}
              right={props => (
                <List.Icon {...props} icon="checkbox-blank-circle-outline" />
              )}
            />
            {/* TODO: Fetch and display actual habits */}
            <Button
              mode="contained"
              onPress={handleNavigateToHabits}
              style={styles.button}
              icon="view-list">
              Manage Habits
            </Button>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title>Activity</Title>
            <Text>Steps: Placeholder</Text>
            <Text>Sleep: Placeholder</Text>
            {/* TODO: Integrate health data display */}
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
})
