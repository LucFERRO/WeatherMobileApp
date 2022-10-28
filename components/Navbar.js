import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react'
import { style } from '../assets/style'

export default function Navbar({navigation, currentScreen}) {

    const screenList = ['Home', 'Weather', 'Preview', 'OldHome' ,'RomanConverter', 'Syracuse']

    return (
        <View>
            {screenList.map((screen,i) => currentScreen != screen ? <Button key={i} title={screen} onPress={() => navigation.navigate(screen)}/> : <></> )}
        </View>
    )
}
