import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import {
  View, StyleSheet, Text, TextInput, ScrollView, Button, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, ToastAndroid, Alert, FlatList
} from 'react-native';

import Menu1 from './components/screens/Menu1';
import Menu2 from './components/screens/Menu2';

const Stack = createStackNavigator()

function App(): React.JSX.Element {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Menu1" component={Menu1} />
      <Stack.Screen name="Menu2" component={Menu2} />
    </Stack.Navigator>
  </NavigationContainer>
}

export default App;