import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../theme/theme';
import { StyleSheet, View, Platform } from 'react-native';

// Screens
import HomeScreen from '../screens/HomeScreen';
import EmotionsScreen from '../screens/EmotionsScreen';
import PersonalityScreen from '../screens/PersonalityScreen';
import TimelineScreen from '../screens/TimelineScreen';
import MemoryScreen from '../screens/MemoryScreen';
import ArcadeScreen from '../screens/ArcadeScreen';
import ReportScreen from '../screens/ReportScreen';

export type RootStackParamList = {
  MainTabs: undefined;
  Arcade: undefined;
  Report: undefined;
};

export type TabParamList = {
  Home: undefined;
  Emotions: undefined;
  Personality: undefined;
  Timeline: undefined;
  Memory: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function TabNavigator() {
  return (
    <Tab.Navigator
      id="MainTabs"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: 'rgba(10, 15, 30, 0.85)',
          borderTopWidth: 1,
          borderTopColor: 'rgba(0, 242, 255, 0.1)',
          height: Platform.OS === 'ios' ? 90 : 70,
          paddingBottom: Platform.OS === 'ios' ? 28 : 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: theme.colors.primaryContainer,
        tabBarInactiveTintColor: theme.colors.outline,
        tabBarLabelStyle: {
          fontFamily: 'JetBrainsMono_700Bold',
          fontSize: 9,
          letterSpacing: 0.5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="robot-outline" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Emotions"
        component={EmotionsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart-pulse" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Personality"
        component={PersonalityScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="hexagon-outline" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Timeline"
        component={TimelineScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="timeline-clock-outline" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Memory"
        component={MemoryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="database-outline" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <NavigationContainer theme={{
      ...DarkTheme,
      colors: {
        ...DarkTheme.colors,
        background: theme.colors.background,
      }
    }}>
      <Stack.Navigator
        id="RootStack"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          contentStyle: { backgroundColor: theme.colors.background },
        }}
      >
        <Stack.Screen name="MainTabs" component={TabNavigator} />
        <Stack.Screen name="Arcade" component={ArcadeScreen} />
        <Stack.Screen name="Report" component={ReportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
