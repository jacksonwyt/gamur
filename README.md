# GAMUR: Gamified Achievements & Meaningful User Routines

GAMUR is a full-stack mobile application designed to help users build positive habits, track health metrics, and engage with their personal growth through a gamified experience. It features an AI companion to provide insights and suggestions, fostering a proactive approach to well-being.

## Core Idea & Purpose

The primary goal of GAMUR is to make self-improvement engaging and rewarding. By integrating game-like elements such as experience points (XP), levels, badges, and quests, GAMUR aims to motivate users to stay consistent with their health and wellness goals. The AI companion further enhances this by offering personalized micro-quests and insights based on user data.

## Key Features (MVP)

*   **User Authentication & Profile:** Secure user registration, login, and profile management with customizable avatars.
*   **Habit Tracking:** Define, track, and manage daily/weekly habits with streak calculations.
*   **Health Data Logging:** Manually input health metrics (mood, sleep) and sync with platform health services (e.g., steps).
*   **Interactive Dashboard:** A central hub displaying aggregated health data, habit progress, and AI insights.
*   **Gamification Engine:** Earn XP, level up, unlock badges, and complete quests (user-defined and AI-suggested).
*   **AI Companion (Rule-Based MVP):** Provides personalized insights and suggests micro-quests based on tracked data.

## Technology Stack

### Frontend (Mobile - React Native with Expo)
*   **Framework/Environment:** React Native, Expo
*   **Language:** TypeScript
*   **Navigation:** React Navigation
*   **UI Library:** React Native Paper
*   **State Management:** React Context API (Potentially Zustand for more complex global state)
*   **API Client:** Axios (or similar, via `client.ts`)

### Backend (API - NestJS)
*   **Framework:** NestJS (Node.js)
*   **Language:** TypeScript
*   **ORM:** Prisma
*   **Database:** PostgreSQL
*   **Containerization:** Docker
*   **API Documentation:** Swagger (OpenAPI) via `/api` endpoint

### General
*   **Version Control:** Git, GitHub
*   **Package Managers:** npm (or yarn)
*   **CI/CD (Planned):** GitHub Actions

## Project Structure

The GAMUR monorepo is organized into two main parts:

*   `frontend/`: Contains the React Native (Expo) mobile application.
*   `backend/api/`: Contains the NestJS backend API.

Each sub-project has its own `README.md` with more specific setup and development instructions.

## Prerequisites

Before you begin, ensure you have the following installed:

*   [Node.js](https://nodejs.org/) (LTS version recommended)
*   `npm` (comes with Node.js) or `yarn`
*   [Docker Desktop](https://www.docker.com/products/docker-desktop) (for running the backend database and application)
*   [Expo Go](https://expo.dev/go) app on your mobile device (for running the frontend during development)
*   [Git](https://git-scm.com/)

## Getting Started & Running the Application

To get the full GAMUR application running locally, you'll need to set up and run both the backend API and the frontend mobile app.

### 1. Backend API Setup & Launch

The backend API serves data to the frontend application and manages the database.

Detailed setup instructions (including database setup via Docker and environment variable configuration) can be found in the [backend/api/README.md](./backend/api/README.md).

**Quick Start (after initial setup as per backend README):**
```bash
cd backend/api
npm run start:dev
# The API should now be running, typically on http://localhost:3000
```

### 2. Frontend Mobile App Setup & Launch

The frontend is a React Native application managed with Expo.

Detailed setup instructions will be available in `frontend/README.md` (once created).

**Quick Start (example, actual commands may vary based on frontend setup):**
```bash
cd frontend
npm install
npm start
# This will typically start the Metro bundler. You can then open the app on your device using the Expo Go app.
```

## Running Tests

### Backend Tests
To run the backend unit and integration tests:
```bash
cd backend/api
npm test
```

### Frontend Tests
To run the frontend tests:
```bash
cd frontend
npm test
```

## Contributing

Details on contributing, coding standards, and branch strategy will be added here. For now, please ensure code is well-formatted (Prettier) and accompanied by relevant tests.

---

*This README is a work in progress and will be updated as the project evolves.*
