import React, { memo, useState } from 'react'
import { StyleSheet, View, FlatList, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  Appbar,
  List,
  Text,
  ActivityIndicator,
  Button,
  FAB,
  IconButton,
  Menu,
  Portal,
  Dialog,
  Snackbar,
} from 'react-native-paper'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '../navigation/MainNavigator' // Adjust the path as necessary
import type { StyleProp, ViewStyle } from 'react-native' // Added for List.Icon props
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import type { Habit } from '../types/habit'
import { habitService } from '../api/habitService'

// Props type for List.Icon callback, based on react-native-paper documentation
interface ListItemIconProps {
  color: string
  style?: StyleProp<ViewStyle>
}

type HabitListScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'HabitList'
>

interface HabitListItemProps {
  habit: Habit
  onEdit: (habitId: string) => void
  onDeleteRequest: (habitId: string, habitName: string) => void
  onViewDetails: (habitId: string) => void
  onLogCompletion: (habitId: string) => void
  isLoggingCompletion: boolean
}

const HabitListItem = memo(function HabitListItem({
  habit,
  onEdit,
  onDeleteRequest,
  onViewDetails,
  onLogCompletion,
  isLoggingCompletion,
}: HabitListItemProps) {
  const [menuVisible, setMenuVisible] = React.useState(false)
  const openMenu = () => setMenuVisible(true)
  const closeMenu = () => setMenuVisible(false)

  const descriptionParts = []
  if (habit.description) {
    descriptionParts.push(habit.description)
  }
  if (typeof habit.currentStreak === 'number' && habit.currentStreak > 0) {
    descriptionParts.push(`🔥 Streak: ${habit.currentStreak}`)
  } else if (typeof habit.currentStreak === 'number') {
    descriptionParts.push('No active streak.')
  }

  return (
    <List.Item
      title={habit.name}
      description={
        descriptionParts.length > 0
          ? descriptionParts.join(' | ')
          : 'Log your first completion!'
      }
      onPress={() => onViewDetails(habit.id)}
      left={props => (
        <IconButton
          {...props}
          icon="check-circle-outline"
          onPress={() => onLogCompletion(habit.id)}
          disabled={isLoggingCompletion}
        />
      )}
      right={props => (
        <Menu
          visible={menuVisible}
          onDismiss={closeMenu}
          anchor={
            <IconButton {...props} icon="dots-vertical" onPress={openMenu} />
          }>
          <Menu.Item
            onPress={() => {
              onEdit(habit.id)
              closeMenu()
            }}
            title="Edit"
            leadingIcon="pencil"
          />
          <Menu.Item
            onPress={() => {
              onDeleteRequest(habit.id, habit.name)
              closeMenu()
            }}
            title="Delete"
            leadingIcon="delete"
          />
        </Menu>
      )}
    />
  )
})
HabitListItem.displayName = 'HabitListItem'

export function HabitListScreen({ navigation }: HabitListScreenProps) {
  const queryClient = useQueryClient()
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [habitToDelete, setHabitToDelete] = useState<{
    id: string
    name: string
  } | null>(null)
  const [snackbarVisible, setSnackbarVisible] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')

  const {
    data: habits,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<Habit[], Error>({
    queryKey: ['habits'],
    queryFn: habitService.getHabits,
  })

  const deleteHabitMutation = useMutation<void, Error, string>({
    mutationFn: habitService.deleteHabit,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['habits'] })
      setSnackbarMessage('Habit deleted successfully.')
      setSnackbarVisible(true)
    },
    onError: error => {
      setSnackbarMessage(`Error deleting habit: ${error.message}`)
      setSnackbarVisible(true)
    },
    onSettled: () => {
      setHabitToDelete(null)
      setShowDeleteDialog(false)
    },
  })

  const logHabitCompletionMutation = useMutation<void, Error, string>({
    mutationFn: habitService.logHabitCompletion,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['habits'] })
      setSnackbarMessage('Habit logged successfully!')
      setSnackbarVisible(true)
    },
    onError: error => {
      setSnackbarMessage(`Error logging habit: ${error.message}`)
      setSnackbarVisible(true)
    },
  })

  function handleNavigateToCreate() {
    navigation.navigate('CreateHabit')
  }

  function handleEditHabit(habitId: string) {
    navigation.navigate('EditHabit', { habitId })
  }

  function requestDeleteHabit(habitId: string, habitName: string) {
    setHabitToDelete({ id: habitId, name: habitName })
    setShowDeleteDialog(true)
  }

  function confirmDeleteHabit() {
    if (habitToDelete) {
      deleteHabitMutation.mutate(habitToDelete.id)
    }
  }

  function cancelDeleteHabit() {
    setHabitToDelete(null)
    setShowDeleteDialog(false)
  }

  function handleViewHabitDetails(habitId: string) {
    navigation.navigate('HabitDetail', { habitId })
  }

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <Appbar.Header>
          <Appbar.Content title="Manage Habits" />
        </Appbar.Header>
        <View style={styles.centeredContent}>
          <ActivityIndicator animating={true} size="large" />
          <Text style={styles.loadingText}>Loading habits...</Text>
        </View>
      </SafeAreaView>
    )
  }

  if (isError) {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <Appbar.Header>
          <Appbar.Content title="Manage Habits" />
        </Appbar.Header>
        <View style={styles.centeredContent}>
          <Text style={styles.errorText}>
            Error fetching habits: {error?.message || 'Unknown error'}
          </Text>
          <Button
            onPress={() => refetch()}
            mode="contained"
            style={styles.button}>
            Try Again
          </Button>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Appbar.Header>
        <Appbar.Content title="Manage Habits" />
      </Appbar.Header>
      <View style={styles.content}>
        {!habits || habits.length === 0 ? (
          <View style={styles.centeredContent}>
            <Text style={styles.emptyText}>
              No habits added yet. Tap the button below to create one!
            </Text>
          </View>
        ) : (
          <FlatList
            data={habits}
            renderItem={({ item }) => (
              <HabitListItem
                habit={item}
                onEdit={handleEditHabit}
                onDeleteRequest={requestDeleteHabit}
                onViewDetails={handleViewHabitDetails}
                onLogCompletion={logHabitCompletionMutation.mutate}
                isLoggingCompletion={
                  logHabitCompletionMutation.isPending &&
                  logHabitCompletionMutation.variables === item.id
                }
              />
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContentContainer}
          />
        )}
      </View>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={handleNavigateToCreate}
        label="New Habit"
      />
      <Portal>
        <Dialog visible={showDeleteDialog} onDismiss={cancelDeleteHabit}>
          <Dialog.Title>Delete Habit</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">
              Are you sure you want to delete "
              {habitToDelete?.name || 'this habit'}"? This action cannot be
              undone.
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={cancelDeleteHabit}
              disabled={deleteHabitMutation.isPending}>
              Cancel
            </Button>
            <Button
              onPress={confirmDeleteHabit}
              textColor="red"
              disabled={deleteHabitMutation.isPending}
              loading={deleteHabitMutation.isPending}>
              {deleteHabitMutation.isPending ? 'Deleting...' : 'Delete'}
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={Snackbar.DURATION_MEDIUM}>
        {snackbarMessage}
      </Snackbar>
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
  listContentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
  errorText: {
    textAlign: 'center',
    marginBottom: 16,
    fontSize: 16,
    color: 'red',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
  },
  button: {
    marginTop: 16,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})
