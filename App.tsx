import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import HomeScreen from './components/screens/HomeScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';


import {
  View, StyleSheet, Text, TextInput, ScrollView, Button, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, ToastAndroid, Alert, FlatList
} from 'react-native';

import WelcomeScreen from './components/screens/WelcomeScreen';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

function PreAuthStack({ }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

function MainTab({ }) {
  return <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home'
        } else if (route.name === 'Profile') {
          iconName = 'person';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'gray',
    })}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
}

function App(): React.JSX.Element {
  return <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PreAuthStack" component={PreAuthStack} />
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  </NavigationContainer>
}

export default App;