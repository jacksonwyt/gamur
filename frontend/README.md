# GAMUR Frontend

The GAMUR Frontend is a mobile application built with React Native and Expo, designed to help users track and manage their habits. It provides a user-friendly interface for interacting with the GAMUR backend API.

## Technology Stack

*   **React Native:** A JavaScript framework for writing real, natively rendering mobile applications for iOS and Android.
*   **Expo:** A platform for making universal React applications that run on Android, iOS, and the web.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **React Navigation:** Routing and navigation for Expo and React Native apps.
*   **React Native Paper:** A cross-platform UI component library based on Material Design.
*   **Axios:** Promise-based HTTP client for the browser and Node.js (for API communication).
*   **Jest & React Native Testing Library:** For unit and component testing.

## Project Structure

The frontend codebase is organized into the following key directories:

*   `src/api/`: Contains functions for interacting with the backend API.
*   `src/components/`: Reusable UI components used across various screens.
*   `src/contexts/`: React Context providers for global state management (e.g., authentication).
*   `src/hooks/`: Custom React Hooks for reusable logic.
*   `src/navigation/`: Navigation setup, including stack and tab navigators.
*   `src/screens/`: Application screens, typically corresponding to different routes.
*   `src/theme/`: Theme configuration, including colors, fonts, and styles (often for React Native Paper).
*   `src/types/`: TypeScript type definitions and interfaces.
*   `src/utils/`: Utility functions and helpers.
*   `assets/`: Static assets like images and fonts.

## Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js** (LTS version recommended)
*   **npm** (comes with Node.js) or **Yarn**
*   **Expo Go app** on your iOS or Android device/simulator.
*   **Watchman** (recommended for macOS users for better file watching performance).

## Setup and Installation

1.  Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

## Running the Application

1.  Start the Metro bundler:
    ```bash
    npm start
    ```
    or
    ```bash
    yarn expo start
    ```
2.  This will open a new tab in your web browser with the Expo Developer Tools.
3.  You can then:
    *   Scan the QR code with the Expo Go app on your physical device.
    *   Click "Run on Android device/emulator" or "Run on iOS simulator" if you have them set up.

## Running Tests

To run the unit and component tests:

```bash
npm test
```

## Linting and Formatting

This project uses Prettier for code formatting. To format the code:

```bash
npm run format
```
ESLint is also configured for linting. You can run the linter with:
```bash
npm run lint
```
(Note: You might need to add a `lint` script to `package.json` if it doesn't exist, e.g., `"lint": "eslint . --ext .js,.jsx,.ts,.tsx"`)

## API Connection

The mobile application connects to the GAMUR backend API. By default, it will attempt to connect to `http://localhost:3000/api`. Ensure the backend server is running and accessible at this address. The API base URL is typically configured in `src/api/axiosConfig.ts` or a similar configuration file. 