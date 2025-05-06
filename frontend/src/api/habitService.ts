import apiClient from './client'
import type {
  Habit,
  CreateHabitPayload,
  UpdateHabitPayload,
  HabitLog,
} from '../types/habit'

const HABIT_ENDPOINT = '/habits' // Backend routes are /habits, /habits/:id etc.

async function getHabits(): Promise<Habit[]> {
  try {
    const response = await apiClient.get<Habit[]>(HABIT_ENDPOINT)
    return response.data
  } catch (error) {
    console.error('Error fetching habits:', error)
    // Consider how to propagate error for UI handling
    // For now, re-throw or return an empty array/specific error object
    throw error
  }
}

async function createHabit(payload: CreateHabitPayload): Promise<Habit> {
  try {
    const response = await apiClient.post<Habit>(HABIT_ENDPOINT, payload)
    return response.data
  } catch (error) {
    console.error('Error creating habit:', error)
    throw error
  }
}

async function getHabitById(id: string): Promise<Habit> {
  try {
    const response = await apiClient.get<Habit>(`${HABIT_ENDPOINT}/${id}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching habit with id ${id}:`, error)
    throw error
  }
}

async function updateHabit(
  id: string,
  payload: UpdateHabitPayload,
): Promise<Habit> {
  try {
    const response = await apiClient.patch<Habit>(
      `${HABIT_ENDPOINT}/${id}`,
      payload,
    )
    return response.data
  } catch (error) {
    console.error(`Error updating habit with id ${id}:`, error)
    throw error
  }
}

async function deleteHabit(id: string): Promise<void> {
  // Typically DELETE might not return content or return the deleted item
  try {
    await apiClient.delete(`${HABIT_ENDPOINT}/${id}`)
    // If backend returns the deleted habit, change Promise<void> to Promise<Habit>
    // and return response.data
  } catch (error) {
    console.error(`Error deleting habit with id ${id}:`, error)
    throw error
  }
}

async function logHabitCompletion(habitId: string): Promise<void> {
  // Assuming backend returns HabitLog or just 201
  try {
    // The backend endpoint is POST /habits/:id/log
    // It expects the habit ID in the URL and no body for a simple log.
    // The backend service uses ParseIntPipe for habitDefinitionId, so ensure string is converted if needed by apiClient
    // However, apiClient.post typically handles URL parameters like this correctly.
    await apiClient.post(`${HABIT_ENDPOINT}/${habitId}/log`, {})
    // If the backend returns the HabitLog or updated HabitDefinition, you can type and return it:
    // const response = await apiClient.post<HabitLog>(`${HABIT_ENDPOINT}/${habitId}/log`, {});
    // return response.data;
  } catch (error) {
    console.error(`Error logging completion for habit ${habitId}:`, error)
    throw error
  }
}

async function getHabitLogs(habitId: string): Promise<HabitLog[]> {
  try {
    const response = await apiClient.get<HabitLog[]>(
      `${HABIT_ENDPOINT}/${habitId}/logs`,
    )
    return response.data
  } catch (error) {
    console.error(`Error fetching logs for habit ${habitId}:`, error)
    throw error
  }
}

export const habitService = {
  getHabits,
  createHabit,
  getHabitById,
  updateHabit,
  deleteHabit,
  logHabitCompletion,
  getHabitLogs,
}
