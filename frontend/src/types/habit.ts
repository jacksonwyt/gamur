export interface Habit {
  id: string
  name: string
  description?: string
  frequency: string
  target?: number
  userId: string // Or number, assuming string due to JSON serialization from backend
  createdAt: string // Dates will be stringified in JSON
  updatedAt: string // Dates will be stringified in JSON
  currentStreak?: number // Added to display habit streak
}

// We can also define a type for creating habits if it differs significantly
// or needs to omit fields like id, userId, createdAt, updatedAt.
export interface CreateHabitPayload {
  name: string
  description?: string
  frequency: string
  target?: number
}

export interface UpdateHabitPayload extends Partial<CreateHabitPayload> {}

export interface HabitLog {
  id: string // Corresponds to LogID
  habitId: string // Corresponds to HabitID
  userId: string // Corresponds to UserID
  completionDate: string // ISO date string
  notes?: string
  createdAt?: string // Assuming these might exist if Prisma adds them by default
  updatedAt?: string // Assuming these might exist if Prisma adds them by default
}
