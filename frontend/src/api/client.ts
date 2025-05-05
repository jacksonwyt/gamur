import axios from 'axios';
import Constants from 'expo-constants';

// Determine the base URL based on the environment
// Note: This assumes your backend is running locally on port 3000 during development
// Adjust the 'localhost' or port if your backend runs elsewhere.
// For production, you'd replace this with your actual deployed backend URL.
const baseURL = Constants?.expoConfig?.extra?.apiUrl || 'http://localhost:3000/api'; // Default fallback

const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add interceptors for handling auth tokens or errors globally
// apiClient.interceptors.request.use(async (config) => {
//   // Retrieve token from secure storage
//   const token = await SecureStore.getItemAsync('authToken');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// apiClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Handle global errors (e.g., network errors, unauthorized access)
//     console.error('API Error:', error.response?.data || error.message);
//     // Potentially redirect to login or show a generic error message
//     return Promise.reject(error);
//   }
// );

export default apiClient; 