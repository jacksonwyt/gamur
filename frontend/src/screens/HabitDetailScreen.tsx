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

export function HabitDetailScreen({
  route,
  navigation,
}: HabitDetailScreenProps) {
  // Placeholder: Get habit ID from route params later
  // const { habitId } = route.params;

  // Placeholder data
  const habit = {
    id: '123',
    name: 'Drink Water',
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
            <Button
              mode="contained"
              style={styles.button}
              onPress={() => {
                
              }}>
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
