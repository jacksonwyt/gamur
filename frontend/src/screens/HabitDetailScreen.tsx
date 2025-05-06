import React from 'react'
import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Appbar, Text, Button, Card, Title } from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainStackParamList } from '../navigation/MainNavigator'

type HabitDetailScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'HabitDetail'
>

interface Habit {
  id: string
  name: string
  description?: string
  frequency: string
  target: string
  streak: number
  // Add other relevant habit properties here (e.g., frequency, icon, progress)
}

export function HabitDetailScreen({
  route, // Keep as route to match NativeStackScreenProps
  navigation,
}: HabitDetailScreenProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _unusedRoute = route // Assign to an underscored variable if truly unused to satisfy one rule, and disable for the other
  // const { habitId } = route.params // Assuming you pass habitId as a param

  // Placeholder: Fetch or use habit data based on habitId
  // For now, using dummy data. Replace with actual data fetching.
  const habit: Habit = {
    id: '123', // route.params.habitId, <--- This should use route.params if we intend to use it
    name: 'Drink Water', // Placeholder name
    description: 'Stay hydrated!',
    frequency: 'daily',
    target: '8 glasses',
    streak: 5,
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={habit.name} />
        <Appbar.Action
          icon="pencil"
          onPress={() => {
            /* TODO: Navigate to Edit */
          }}
        />
        <Appbar.Action
          icon="delete"
          onPress={() => {
            /* TODO: Delete action */
          }}
        />
      </Appbar.Header>
      <View style={styles.content}>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Details</Title>
            <Text>Description: {habit.description}</Text>
            <Text>Frequency: {habit.frequency}</Text>
            <Text>Target: {habit.target}</Text>
            <Text>Current Streak: {habit.streak} days</Text>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title>Progress / Log</Title>
            <Text>Placeholder for completion log or chart.</Text>
            <Button mode="contained" style={styles.button} onPress={() => {}}>
              Mark Complete for Today
            </Button>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
})
