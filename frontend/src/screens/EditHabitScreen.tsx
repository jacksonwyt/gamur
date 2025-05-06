import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  Appbar,
  Button,
  HelperText,
  TextInput,
  Title,
  Snackbar,
  ActivityIndicator,
  Text,
} from 'react-native-paper'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query'

import type { MainStackParamList } from '../navigation/MainNavigator'
import { habitService } from '../api/habitService'
import type { UpdateHabitPayload, Habit } from '../types/habit'

type EditHabitScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'EditHabit' // Corrected to EditHabit
>

interface FormState {
  name: string
  description: string
  frequency: string
  target: string
}

interface FormErrors {
  name?: string
  frequency?: string
  target?: string
}

export function EditHabitScreen({ route, navigation }: EditHabitScreenProps) {
  const { habitId } = route.params
  const queryClient = useQueryClient()

  const [formState, setFormState] = useState<FormState>({
    name: '',
    description: '',
    frequency: '',
    target: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [snackbarVisible, setSnackbarVisible] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')

  const {
    data: existingHabit,
    isLoading: isLoadingHabit,
    isError: isErrorLoadingHabit,
    error: loadingError,
  } = useQuery<Habit, Error>({
    queryKey: ['habit', habitId],
    queryFn: () => habitService.getHabitById(habitId),
    enabled: !!habitId, // Only run query if habitId is available
  })

  useEffect(() => {
    if (existingHabit) {
      setFormState({
        name: existingHabit.name,
        description: existingHabit.description || '',
        frequency: existingHabit.frequency,
        target: existingHabit.target?.toString() || '',
      })
    }
  }, [existingHabit])

  const updateHabitMutation = useMutation<Habit, Error, UpdateHabitPayload>({
    mutationFn: (payload: UpdateHabitPayload) =>
      habitService.updateHabit(habitId, payload),
    onSuccess: (data: Habit) => {
      queryClient.invalidateQueries({ queryKey: ['habits'] })
      queryClient.invalidateQueries({ queryKey: ['habit', habitId] })
      // Optionally, update the cache directly if `data` is the updated habit
      // queryClient.setQueryData(['habit', habitId], data);
      navigation.goBack()
    },
    onError: (error: Error) => {
      setSnackbarMessage(`Error updating habit: ${error.message}`)
      setSnackbarVisible(true)
    },
  })

  function handleChange(name: keyof FormState, value: string) {
    setFormState(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  function validateForm(): boolean {
    const newErrors: FormErrors = {}
    if (!formState.name.trim()) newErrors.name = 'Habit name cannot be empty.'
    if (!formState.frequency.trim())
      newErrors.frequency = 'Frequency cannot be empty.'
    if (formState.target.trim() && isNaN(Number(formState.target)))
      newErrors.target = 'Target must be a number.'
    if (formState.target.trim() && Number(formState.target) <= 0)
      newErrors.target = 'Target must be > 0.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSave() {
    if (!validateForm()) return
    const payload: UpdateHabitPayload = {
      name: formState.name.trim(),
      description: formState.description.trim() || undefined,
      frequency: formState.frequency.trim(),
      target: formState.target.trim() ? Number(formState.target) : undefined,
    }
    updateHabitMutation.mutate(payload)
  }

  if (isLoadingHabit) {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Edit Habit" />
        </Appbar.Header>
        <View style={styles.centeredMessage}>
          <ActivityIndicator animating={true} size="large" />
          <Text style={styles.messageText}>Loading habit...</Text>
        </View>
      </SafeAreaView>
    )
  }

  if (isErrorLoadingHabit) {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Edit Habit" />
        </Appbar.Header>
        <View style={styles.centeredMessage}>
          <Text style={styles.errorText}>
            Error: {loadingError?.message || 'Could not load habit details.'}
          </Text>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Edit Habit" />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        <View style={styles.content}>
          <Title>Update Your Habit</Title>

          <TextInput
            label="Habit Name *"
            value={formState.name}
            onChangeText={text => handleChange('name', text)}
            mode="outlined"
            style={styles.input}
            error={!!errors.name}
            disabled={updateHabitMutation.isPending}
          />
          <HelperText type="error" visible={!!errors.name}>
            {errors.name}
          </HelperText>

          <TextInput
            label="Description (Optional)"
            value={formState.description}
            onChangeText={text => handleChange('description', text)}
            mode="outlined"
            style={styles.input}
            multiline
            numberOfLines={3}
            disabled={updateHabitMutation.isPending}
          />

          <TextInput
            label="Frequency * (e.g., daily, weekly)"
            value={formState.frequency}
            onChangeText={text => handleChange('frequency', text)}
            mode="outlined"
            style={styles.input}
            error={!!errors.frequency}
            disabled={updateHabitMutation.isPending}
          />
          <HelperText type="error" visible={!!errors.frequency}>
            {errors.frequency}
          </HelperText>

          <TextInput
            label="Target (Optional, e.g., 1, 5)"
            value={formState.target}
            onChangeText={text => handleChange('target', text)}
            mode="outlined"
            style={styles.input}
            keyboardType="numeric"
            error={!!errors.target}
            disabled={updateHabitMutation.isPending}
          />
          <HelperText type="error" visible={!!errors.target}>
            {errors.target}
          </HelperText>

          <Button
            mode="contained"
            onPress={handleSave}
            style={styles.button}
            disabled={updateHabitMutation.isPending || isLoadingHabit}
            loading={updateHabitMutation.isPending}>
            {updateHabitMutation.isPending ? 'Saving...' : 'Save Changes'}
          </Button>

          {updateHabitMutation.isPending && (
            <ActivityIndicator
              animating={true}
              style={styles.activityIndicator}
            />
          )}
        </View>
      </ScrollView>
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
  container: { flex: 1 },
  scrollContentContainer: { flexGrow: 1 },
  content: { flex: 1, padding: 16, justifyContent: 'center' },
  input: { marginBottom: 8 },
  button: { marginTop: 24, paddingVertical: 8 },
  activityIndicator: { marginTop: 16 },
  centeredMessage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  messageText: { marginTop: 10, fontSize: 16 },
  errorText: { color: 'red', textAlign: 'center' },
})
