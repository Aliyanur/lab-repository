import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

import { RootStackParamList, TabParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

// 🔹 HOME STACK
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} options={{ title: 'Home' }} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

// 🔹 SEARCH STACK
function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SearchMain" component={SearchScreen} />
    </Stack.Navigator>
  );
}

// 🔹 NOTIFICATIONS STACK
function NotificationsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NotificationsMain" component={NotificationsScreen} />
    </Stack.Navigator>
  );
}

// 🔹 PROFILE STACK
function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileMain" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

// 🔹 TAB ICON COMPONENT
function getIcon(routeName: string, color: string, size: number) {
  let iconName: keyof typeof Ionicons.glyphMap = 'home';

  if (routeName === 'Home') iconName = 'home';
  if (routeName === 'Search') iconName = 'search';
  if (routeName === 'Notifications') iconName = 'notifications';
  if (routeName === 'Profile') iconName = 'person';

  return <Ionicons name={iconName} size={size} color={color} />;
}

// 🔹 MAIN NAVIGATOR
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#0066cc',
          tabBarInactiveTintColor: '#999',
          tabBarStyle: {
            backgroundColor: '#fff',
            paddingBottom: 6,
            paddingTop: 6,
            height: 60,
          },
          tabBarIcon: ({ color, size }) =>
            getIcon(route.name, color, size),
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />

        <Tab.Screen name="Search" component={SearchStack} />

        <Tab.Screen
          name="Notifications"
          component={NotificationsStack}
          options={{
            tabBarBadge: 5,
          }}
        />

        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}