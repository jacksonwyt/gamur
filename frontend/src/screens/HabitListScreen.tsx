import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Appbar, List, Text } from 'react-native-paper'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '../navigation/MainNavigator' // Adjust the path as necessary

// TODO: Define Habit interface
interface Habit {
  id: string
  name: string
  description?: string
  icon: string
  completed: boolean
}

// Placeholder data - replace with actual data fetching
const dummyHabits: Habit[] = [
  {
    id: '1',
    name: 'Drink Water',
    description: '8 glasses',
    icon: 'cup-water',
    completed: true,
  },
  {
    id: '2',
    name: 'Morning Walk',
    description: '30 minutes',
    icon: 'walk',
    completed: false,
  },
  {
    id: '3',
    name: 'Read Book',
    description: '15 minutes',
    icon: 'book-open-variant',
    completed: false,
  },
]

type HabitListScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'HabitList'
>

export function HabitListScreen({ navigation }: HabitListScreenProps) {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Appbar.Header>
        <Appbar.Content title="Manage Habits" />
        <Appbar.Action
          icon="plus"
          onPress={() => navigation.navigate('CreateHabit')}
        />
      </Appbar.Header>
      <View style={styles.content}>
        {dummyHabits.length === 0 ? (
          <Text style={styles.emptyText}>
            No habits added yet. Tap &apos;+&apos; to create one!
          </Text>
        ) : (
          <List.Section>
            <List.Subheader>Your Habits</List.Subheader>
            {dummyHabits.map(habit => (
              <List.Item
                key={habit.id}
                title={habit.name}
                description={habit.description}
                left={props => <List.Icon {...props} icon={habit.icon} />}
                right={props => (
                  <List.Icon
                    {...props}
                    icon={
                      habit.completed
                        ? 'check-circle'
                        : 'checkbox-blank-circle-outline'
                    }
                  />
                  // TODO: Add onPress to toggle completion
                )}
                // TODO: Add onPress to navigate to Habit Detail/Edit
              />
            ))}
          </List.Section>
        )}
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
  emptyText: {
    textAlign: 'center',
    marginTop: 32,
    fontSize: 16,
  },
})
