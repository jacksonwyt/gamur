import React, { useState } from 'react'
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
} from 'react-native-paper'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { RootStackParamList } from '../navigation/MainNavigator' // Adjust path as necessary
import { habitService } from '../api/habitService'
import type { CreateHabitPayload } from '../types/habit'

type CreateHabitScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CreateHabit'
>

interface FormState {
  name: string
  description: string
  frequency: string
  target: string // Store as string for TextInput, convert to number on submit
}

interface FormErrors {
  name?: string
  frequency?: string
  target?: string
}

export function CreateHabitScreen({ navigation }: CreateHabitScreenProps) {
  const queryClient = useQueryClient()
  const [formState, setFormState] = useState<FormState>({
    name: '',
    description: '',
    frequency: '', // e.g., 'daily', 'weekly'
    target: '', // e.g., '1', '5'
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [snackbarVisible, setSnackbarVisible] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')

  const createHabitMutation = useMutation<unknown, Error, CreateHabitPayload>({
    // Explicitly type mutation
    mutationFn: habitService.createHabit,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['habits'] })
      navigation.goBack()
    },
    onError: error => {
      setSnackbarMessage(`Error creating habit: ${error.message}`)
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
    if (!formState.name.trim()) {
      newErrors.name = 'Habit name cannot be empty.'
    }
    if (!formState.frequency.trim()) {
      newErrors.frequency = 'Frequency cannot be empty.'
    }
    if (formState.target.trim() && isNaN(Number(formState.target))) {
      newErrors.target = 'Target must be a number.'
    }
    if (formState.target.trim() && Number(formState.target) <= 0) {
      newErrors.target = 'Target must be greater than 0.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSave() {
    if (!validateForm()) return

    const payload: CreateHabitPayload = {
      name: formState.name.trim(),
      description: formState.description.trim() || undefined,
      frequency: formState.frequency.trim(),
      target: formState.target.trim() ? Number(formState.target) : undefined,
    }
    createHabitMutation.mutate(payload)
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Create New Habit" />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        <View style={styles.content}>
          <Title>Define Your Habit</Title>

          <TextInput
            label="Habit Name *"
            value={formState.name}
            onChangeText={text => handleChange('name', text)}
            mode="outlined"
            style={styles.input}
            error={!!errors.name}
            disabled={createHabitMutation.isPending}
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
            disabled={createHabitMutation.isPending}
          />

          <TextInput
            label="Frequency * (e.g., daily, weekly)"
            value={formState.frequency}
            onChangeText={text => handleChange('frequency', text)}
            mode="outlined"
            style={styles.input}
            error={!!errors.frequency}
            disabled={createHabitMutation.isPending}
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
            disabled={createHabitMutation.isPending}
          />
          <HelperText type="error" visible={!!errors.target}>
            {errors.target}
          </HelperText>

          <Button
            mode="contained"
            onPress={handleSave}
            style={styles.button}
            disabled={createHabitMutation.isPending}
            loading={createHabitMutation.isPending}>
            {createHabitMutation.isPending ? 'Saving...' : 'Save Habit'}
          </Button>

          {createHabitMutation.isPending && (
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
  container: {
    flex: 1,
  },
  scrollContentContainer: {
    flexGrow: 1, // Ensures content can scroll if it overflows
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: 'center', // Center content if not enough to scroll
  },
  input: {
    marginBottom: 8, // Reduced margin a bit
  },
  button: {
    marginTop: 24,
    paddingVertical: 8,
  },
  activityIndicator: {
    marginTop: 16,
  },
})
