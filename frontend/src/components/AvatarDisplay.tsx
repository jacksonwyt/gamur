import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text } from 'react-native-paper';

// Props might include avatarConfig, size, onPress, etc.
interface AvatarDisplayProps {
  // Example prop: config?: { body?: string; color?: string };
  size?: number;
}

export function AvatarDisplay({ size = 80 }: AvatarDisplayProps) {
  // TODO: Implement logic to display avatar based on config
  // For now, show a placeholder
  return (
    <View style={styles.container}>
      <Avatar.Icon size={size} icon="account" style={styles.avatar} />
      {/* <Text>(Avatar Placeholder)</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20, // Example spacing
  },
  avatar: {
    // Add any specific styling needed
  },
}); 