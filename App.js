import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native';
import WelcomeScreen from './src/Screens/welcomescreen'; 
import LoginScreen from './src/Screens/loginscreen';
import RegistrationScreen from './src/Screens/registrationscreen';
import Dashboard from './src/Screens/Dashboard';
import VehiclesScreen from './src/Screens/VehiclesScreen';
import UserProfile from './src/Screens/UserProfile';
import ResetPasswordScreen from './src/Screens/ResetPasswordScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-native-paper'
import { theme } from './src/core/theme'

const Stack = createStackNavigator();

export default function App() {
  return (

    <Provider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
        <Stack.Screen name="VehiclesScreen" component={VehiclesScreen} />
        <Stack.Screen name="UserProfile" component={UserProfile} />

      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  
    );
}


