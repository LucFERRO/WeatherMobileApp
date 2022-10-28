import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react'
import { style } from '../assets/style'
import Navbar from './Navbar'

export default function RomanConverter({navigation}) {
    const [convertResult, setConverResult] = useState("En attente d'un chiffre romain")

    let romanNumbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    const handleRomanNumberChange = (e) => {
        let res = 0
        let count = 0
        if (!e.length) return setConverResult("En attente d'un chiffre romain.")
        if (e.length == 1) {
            if (!Object.keys(romanNumbers).includes(e)) return setConverResult('Caractère invalide.')
            return setConverResult(romanNumbers[e])
        }

        for (var i = 0; i < e.length; i++) {

            if (!Object.keys(romanNumbers).includes(e.charAt(i))) return setConverResult('Caractère invalide.')

            if (e.charAt(i-1) == e.charAt(i)) count += 1

            if ( (e.charAt(i-1) == e.charAt(i)) && ( (count >= 4 && e.charAt(i)=='I') || count >= 3 && e.charAt(i)!='I' ) ) return setConverResult('Chiffre invalide.') 

            if ( (e.charAt(i-1) == e.charAt(i)) && (e.charAt(i) == 'V' || e.charAt(i) == 'L' || e.charAt(i) == 'D') ) return setConverResult('Chiffre invalide.')

            if (romanNumbers[e.charAt(i-1)] < romanNumbers[e.charAt(i)]) {
                res += romanNumbers[e.charAt(i)] - 2*romanNumbers[e.charAt(i-1)]
            } else {
                res += romanNumbers[e.charAt(i)]
            }
        }
        setConverResult(res)
    }

  return (
    <>
        <Navbar navigation={navigation} currentScreen={'RomanConverter'}/>
        {/* <View>
            <Button title="Home" onPress={() => navigation.navigate('Home')}/>
            <Button title="Roman Converter" onPress={() => navigation.navigate('RomanConverter')}/>
            <Button title="Preview" onPress={() => navigation.navigate('Preview')}/>
        </View> */}
        <View style={style.container}>
            <Text>Conversion chiffres romains:</Text>
            <TextInput style={style.input} autoCapitalize= {"characters"} onChangeText={handleRomanNumberChange}/>
            <Text>Résultat:</Text>
            <Text>{convertResult}</Text>
        </View>
    </>
  )
}
