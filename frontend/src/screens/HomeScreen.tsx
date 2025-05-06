import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  Appbar,
  Avatar,
  Button,
  Card,
  List,
  Text,
  Title,
} from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainStackParamList } from '../navigation/MainNavigator'
import type { StyleProp, ViewStyle } from 'react-native'

type HomeScreenProps = NativeStackScreenProps<MainStackParamList, 'Home'>

interface ListItemIconProps {
  color: string
  style?: StyleProp<ViewStyle>
}

export function HomeScreen({ navigation }: HomeScreenProps) {
  function handleNavigateToHabits() {
    navigation.navigate('HabitList')
  }

  function handleNavigateToProfile() {
    navigation.navigate('Profile')
  }

  function handleNavigateToSettings() {
    navigation.navigate('Settings')
  }

  const renderWelcomeAvatar = React.useCallback(
    (props: { size: number }) => (
      <Avatar.Icon {...props} icon="account-circle" />
    ),
    [],
  )

  const renderDrinkWaterLeftIcon = React.useCallback(
    (props: ListItemIconProps) => <List.Icon {...props} icon="cup-water" />,
    [],
  )

  const renderDrinkWaterRightIcon = React.useCallback(
    (props: ListItemIconProps) => (
      <List.Icon {...props} icon="check-circle-outline" />
    ),
    [],
  )

  const renderMorningWalkLeftIcon = React.useCallback(
    (props: ListItemIconProps) => <List.Icon {...props} icon="walk" />,
    [],
  )

  const renderMorningWalkRightIcon = React.useCallback(
    (props: ListItemIconProps) => (
      <List.Icon {...props} icon="checkbox-blank-circle-outline" />
    ),
    [],
  )

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <Appbar.Header>
        <Appbar.Content title="Dashboard" />
        <Appbar.Action
          icon="account-circle"
          onPress={handleNavigateToProfile}
        />
        <Appbar.Action icon="cog" onPress={handleNavigateToSettings} />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Card style={styles.card}>
          <Card.Title
            title="Welcome Back!"
            subtitle="Here's your dashboard overview."
            left={renderWelcomeAvatar}
          />
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title>Mood</Title>
            <Text>Placeholder for mood display/tracker.</Text>
            {/* TODO: Add mood chart or interactive element */}
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title>Today&apos;s Habits</Title>
            <List.Item
              title="Drink Water"
              description="8 glasses"
              left={renderDrinkWaterLeftIcon}
              right={renderDrinkWaterRightIcon}
            />
            <List.Item
              title="Morning Walk"
              description="30 minutes"
              left={renderMorningWalkLeftIcon}
              right={renderMorningWalkRightIcon}
            />
            {/* TODO: Fetch and display actual habits */}
            <Button
              mode="contained"
              onPress={handleNavigateToHabits}
              style={styles.button}
              icon="view-list">
              Manage Habits
            </Button>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title>Activity</Title>
            <Text>Steps: Placeholder</Text>
            <Text>Sleep: Placeholder</Text>
            {/* TODO: Integrate health data display */}
          </Card.Content>
        </Card>

        <View style={styles.header}>
          <Title style={styles.headerTitle}>Today&apos;s Focus</Title>
          <Text style={styles.dateText}>{new Date().toDateString()}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    flex: 1,
  },
  dateText: {
    fontSize: 12,
    color: 'gray',
  },
})
