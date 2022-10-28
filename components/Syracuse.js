import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react'
import { style } from '../assets/style'
import Navbar from './Navbar'

export default function Syracuse({navigation}) {

    const [stoppingTime, setStoppingTime] = useState('Choisir un nombre')

    const syracuseSequence = (e,count) => {
        if (e%2 == 0) return syracuseSequence(e/2, count+1)
        if (!e%2 == 0 && e != 1) return syracuseSequence(3*e+1, count+1)
        if (e == 1) return count
    }

    const calcSyracuse = (e) => {
        if (!e) return setStoppingTime('Choisir un nombre')
        setStoppingTime(syracuseSequence(e,0))
    }

  return (
    <>
        <Navbar navigation={navigation} currentScreen={'RomanConverter'}/>

        <View style={style.container}>
            <Text>Départ de la suite de Syracuse:</Text>
            <TextInput style={style.input} 
            onChangeText={calcSyracuse}
            />
            <Text>Résultat:</Text>
            <Text>{stoppingTime}</Text>
        </View>
    </>
  )
}
