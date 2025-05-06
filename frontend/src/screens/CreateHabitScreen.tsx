import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  Appbar,
  Button,
  HelperText,
  TextInput,
  Title,
} from 'react-native-paper'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '../navigation/MainNavigator' // Adjust path as necessary

type CreateHabitScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CreateHabit'
>

export function CreateHabitScreen({ navigation }: CreateHabitScreenProps) {
  const [habitName, setHabitName] = useState('')
  const [description, setDescription] = useState('')
  const [nameError, setNameError] = useState<string | null>(null)

  // TODO: Add form validation (e.g., with Zod)
  function validateForm(): boolean {
    if (!habitName.trim()) {
      setNameError('Habit name cannot be empty.')
      return false
    }
    setNameError(null) // Clear error if valid
    return true
  }

  function handleSave() {
    if (validateForm()) {
      console.log('Saving Habit:', { name: habitName, description })
      // TODO: Implement actual save logic (API call)
      // TODO: Navigate back or to habit detail screen after save
      navigation.goBack() // Navigate back for now
    }
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Create New Habit" />
      </Appbar.Header>
      <View style={styles.content}>
        <Title>Define Your Habit</Title>

        <TextInput
          label="Habit Name"
          value={habitName}
          onChangeText={text => {
            setHabitName(text)
            if (nameError) setNameError(null) // Clear error on type
          }}
          mode="outlined"
          style={styles.input}
          error={!!nameError} // Show error state
        />
        <HelperText type="error" visible={!!nameError}>
          {nameError}
        </HelperText>

        <TextInput
          label="Description (Optional)"
          value={description}
          onChangeText={setDescription}
          mode="outlined"
          style={styles.input}
          multiline
        />

        {/* TODO: Add fields for frequency, icon selection, etc. */}

        <Button mode="contained" onPress={handleSave} style={styles.button}>
          Save Habit
        </Button>
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
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
})
