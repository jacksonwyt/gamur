import React from 'react'
import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  Appbar,
  Text,
  Button,
  Card,
  Title,
  ActivityIndicator,
  Paragraph,
  Snackbar,
} from 'react-native-paper'
import {
  useQuery,
  UseQueryResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainStackParamList } from '../navigation/MainNavigator'
import { habitService } from '../api/habitService'
import { Habit, HabitLog } from '../types/habit'

type HabitDetailScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'HabitDetail'
>

export function HabitDetailScreen({
  route,
  navigation,
}: HabitDetailScreenProps) {
  const { habitId } = route.params
  const queryClient = useQueryClient()
  const [snackbarVisible, setSnackbarVisible] = React.useState(false)
  const [snackbarMessage, setSnackbarMessage] = React.useState('')

  const {
    data: habit,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<Habit, Error, Habit, readonly string[]>({
    queryKey: ['habit', habitId] as const,
    queryFn: () => habitService.getHabitById(habitId),
  })

  const {
    data: habitLogs,
    isLoading: isLoadingLogs,
    isError: isErrorLogs,
    error: errorLogs,
  } = useQuery<HabitLog[], Error, HabitLog[], readonly string[]>({
    queryKey: ['habitLogs', habitId] as const,
    queryFn: () => habitService.getHabitLogs(habitId),
    enabled: !!habitId,
  })

  const logCompletionMutation = useMutation<void, Error, string>(
    (hId: string) => habitService.logHabitCompletion(hId),
    {
      onSuccess: () => {
        setSnackbarMessage('Habit marked as complete!')
        setSnackbarVisible(true)
        queryClient.invalidateQueries({ queryKey: ['habit', habitId] })
        queryClient.invalidateQueries({ queryKey: ['habitLogs', habitId] })
        queryClient.invalidateQueries({ queryKey: ['habits'] })
      },
      onError: error => {
        setSnackbarMessage(
          `Error: ${error.message || 'Could not mark complete.'}`,
        )
        setSnackbarVisible(true)
      },
    },
  )

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Loading Habit..." />
        </Appbar.Header>
        <View style={styles.centered}>
          <ActivityIndicator animating size="large" />
        </View>
      </SafeAreaView>
    )
  }

  if (isError) {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Error" />
        </Appbar.Header>
        <View style={styles.centered}>
          <Paragraph>Could not load habit details.</Paragraph>
          {error && <Paragraph>{error.message}</Paragraph>}
          <Button onPress={() => refetch()}>Try Again</Button>
        </View>
      </SafeAreaView>
    )
  }

  if (!habit) {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="No Data" />
        </Appbar.Header>
        <View style={styles.centered}>
          <Paragraph>Habit data is not available. Please try again.</Paragraph>
          <Button onPress={() => refetch()}>Try Again</Button>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={habit.name} />
        <Appbar.Action
          icon="pencil"
          onPress={() => {
            navigation.navigate('EditHabit', { habitId: habit.id })
          }}
        />
        {/* Removed Delete action from Appbar */}
      </Appbar.Header>
      <View style={styles.content}>
        <Card style={styles.card}>
          <Card.Content>
            <Title>{habit.name}</Title>
            {habit.description && (
              <Text style={styles.detailText}>
                Description: {habit.description}
              </Text>
            )}
            <Text style={styles.detailText}>Frequency: {habit.frequency}</Text>
            {habit.target !== undefined && (
              <Text style={styles.detailText}>Target: {habit.target}</Text>
            )}
            <Text style={styles.detailText}>
              Current Streak:{' '}
              {habit.currentStreak !== undefined ? habit.currentStreak : '0'}
            </Text>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title>Progress / Log</Title>
            {isLoadingLogs && <ActivityIndicator animating />}
            {isErrorLogs && (
              <View>
                <Paragraph>Could not load habit logs.</Paragraph>
                {errorLogs && <Paragraph>{errorLogs.message}</Paragraph>}
              </View>
            )}
            {!isLoadingLogs &&
              !isErrorLogs &&
              habitLogs &&
              habitLogs.length > 0 &&
              habitLogs.map(log => (
                <Text
                  key={log.id}
                  style={
                    styles.logEntry
                  }>{`Completed: ${new Date(log.completionDate).toLocaleDateString()} ${log.notes ? '- ' + log.notes : ''}
                `}</Text>
              ))}
            {!isLoadingLogs &&
              !isErrorLogs &&
              (!habitLogs || habitLogs.length === 0) && (
                <Paragraph>No completion logs yet for this habit.</Paragraph>
              )}
            <Button
              mode="contained"
              style={styles.button}
              onPress={() => {
                logCompletionMutation.mutate(habitId)
              }}
              loading={logCompletionMutation.isLoading}
              disabled={logCompletionMutation.isLoading}>
              {logCompletionMutation.isLoading ? 'Logging...' : 'Mark Complete'}
            </Button>
          </Card.Content>
        </Card>
      </View>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={Snackbar.DURATION_SHORT}>
        {snackbarMessage}
      </Snackbar>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    // Added for centering loading/error states
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
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
  detailText: {
    // Added for better spacing of details
    fontSize: 16,
    marginBottom: 8,
  },
  logEntry: {
    marginBottom: 8,
  },
})
