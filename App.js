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

import Accueil from './components/Home'
import Preview from './components/Preview'
import ChiffresRomains from './components/RomanConverter';
import Navbar from './components/Navbar'
import Syracuse from './components/Syracuse'
import OldHome from './components/OldHome'
import Météo from './components/Weather'

export default function App() {

    const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Accueil'>
            <Stack.Screen name='Accueil' component={Accueil} />
            <Stack.Screen name='Météo' component={Météo} />
            <Stack.Screen name='ChiffresRomains' component={ChiffresRomains} />
            <Stack.Screen name='Syracuse' component={Syracuse} />
            {/* <Stack.Screen name='Preview' component={Preview} />
            <Stack.Screen name='OldHome' component={OldHome} /> */}
        </Stack.Navigator>
    </NavigationContainer>
    );
}