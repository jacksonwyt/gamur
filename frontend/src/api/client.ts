import axios from 'axios'
import Constants from 'expo-constants'
import * as SecureStore from 'expo-secure-store'

// Determine the base URL based on the environment
// Note: This assumes your backend is running locally on port 3000 during development
// Adjust the 'localhost' or port if your backend runs elsewhere.
// For production, you'd replace this with your actual deployed backend URL.

// --- Use Local Network IP for Development ---
// On iOS Simulator/Android Emulator: localhost usually works.
// On Physical Device: Replace 'localhost' with your computer's network IP address.
// Find your IP: macOS (ifconfig | grep 'inet ' | grep -v '127.0.0.1'), Windows (ipconfig)
// const DEV_BACKEND_URL = 'http://192.168.0.197:3000/api'; // <- !!! REPLACE with your actual IP:PORT/api if needed !!!
const DEV_BACKEND_URL = 'http://192.168.0.197:3000/api' // <- !!! REMOVED /api - REPLACE with your actual IP:PORT if needed !!!

// Prefer the environment variable if set, otherwise use the dev URL
const baseURL = Constants?.expoConfig?.extra?.apiUrl || DEV_BACKEND_URL

console.log(`API Base URL: ${baseURL}`) // Log the URL for debugging

const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  // Optional: Add timeout
  // timeout: 10000, // 10 seconds
})

// --- Request Interceptor for Auth Token ---
// This runs BEFORE each request is sent
apiClient.interceptors.request.use(
  async config => {
    try {
      // Retrieve token from secure storage (adjust key if different)
      const token = await SecureStore.getItemAsync('authToken')
      console.log('[Interceptor] Token from SecureStore:', token);
      if (token) {
        // If token exists, add it to the Authorization header
        config.headers.Authorization = `Bearer ${token}`
        console.log('[Interceptor] Authorization header set:', config.headers.Authorization);
      } else {
        console.log('[Interceptor] No token found in SecureStore.');
      }
    } catch (e) {
      // Handle potential errors fetching the token
      console.error('Error fetching auth token from SecureStore:', e)
    }
    // Return the modified config object
    return config
  },
  error => {
    // Handle request configuration errors
    console.error('Axios request interceptor error:', error)
    return Promise.reject(error)
  },
)

// --- Optional: Response Interceptor for Global Error Handling ---
// apiClient.interceptors.response.use(
//   (response) => response, // Simply return successful responses
//   (error) => {
//     // Handle global errors (e.g., network errors, unauthorized access)
//     console.error(
//       'API Response Error:',
//       error.response?.status, // Status code
//       error.response?.data || error.message, // Error data or message
//       error.config.url, // URL that failed
//     );

//     // Example: Handle 401 Unauthorized globally (e.g., trigger logout)
//     if (error.response?.status === 401) {
//       console.warn('Unauthorized access - 401. Implement global logout/redirect.');
//       // Here you might clear the stored token and navigate to the Login screen
//       // await SecureStore.deleteItemAsync('authToken');
//       // Trigger logout function from AuthContext if possible
//       // rootNavigation.navigate('Login'); // Example navigation
//     }

//     // Return a rejected promise to propagate the error
//     return Promise.reject(error);
//   }
// );

export default apiClient
