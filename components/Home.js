import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import Navbar from './Navbar'
import OldHome from './OldHome';

import * as Location from 'expo-location';
import { style } from '../assets/style'

export default function Accueil({navigation}) {

  return (
    <>
        <Navbar navigation={navigation} currentScreen={'Accueil'}/>
        <View style={styleHome.background}>
            <Text style={styleHome.msg}>Bienvenue sur l'app météo couteau suisse</Text>
        </View>
    </>
  );
}

const styleHome = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#000A18",
        justifyContent: 'center',
        alignItems: 'center'
    },
    msg: {
        color: '#fff',
        fontSize: 15
    },
})