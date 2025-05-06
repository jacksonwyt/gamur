import { MD3LightTheme as DefaultTheme } from 'react-native-paper'

const theme = {
  ...DefaultTheme,
  // Override default theme properties here
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee', // Example primary color
    accent: '#03dac4', // Example accent color
  },
  // Add custom fonts, roundness, etc. later
}

export default theme
