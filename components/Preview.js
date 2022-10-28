import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react'
import { style } from '../assets/style'
import Navbar from './Navbar'

export default function Preview({navigation}) {

  return (
    <>
        <Navbar navigation={navigation} currentScreen={'Preview'} />

        <View style={style.container}>
            <Text>Preview:</Text>
        </View>
    </>
  )
}
