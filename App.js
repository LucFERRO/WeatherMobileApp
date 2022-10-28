import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

// import { NativeScreenNavigationContainer } from 'react-native-screens';
// import { createStackNavigator } from 'react-navigation-stack';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as Location from 'expo-location';
import { style } from './assets/style'

import Home from './components/Home'
import Preview from './components/Preview'
import RomanConverter from './components/RomanConverter';
import Navbar from './components/Navbar'
import Syracuse from './components/Syracuse'
import OldHome from './components/OldHome'
import Weather from './components/Weather'

export default function App() {

    const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Syracuse'>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Weather' component={Weather} />
            <Stack.Screen name='RomanConverter' component={RomanConverter} />
            <Stack.Screen name='Syracuse' component={Syracuse} />
            <Stack.Screen name='Preview' component={Preview} />
            <Stack.Screen name='OldHome' component={OldHome} />
        </Stack.Navigator>
    </NavigationContainer>
    );
}