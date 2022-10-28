import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, ScrollView , TextInput, Button } from 'react-native';
import { useState, useEffect } from 'react'
import { style } from '../assets/style'
import Navbar from './Navbar'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Weather({navigation}) {

    const [isPreview, setIsPreview] = useState(false)

    useEffect( () => console.log(isPreview), [isPreview])

    const response = {
        "cod": "200",
        "message": 0,
        "cnt": 40,
        "list": [
        {
        "dt": 1666882800,
        "main": {
        "temp": 19.93,
        "feels_like": 19.86,
        "temp_min": 18.55,
        "temp_max": 19.93,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1009,
        "humidity": 72,
        "temp_kf": 1.38
        },
        "weather": [
        {
        "id": 804,
        "main": "Clouds",
        "description": "couvert",
        "icon": "04d"
        }
        ],
        "clouds": {
        "all": 85
        },
        "wind": {
        "speed": 5.17,
        "deg": 193,
        "gust": 9.38
        },
        "visibility": 10000,
        "pop": 0.06,
        "sys": {
        "pod": "d"
        },
        "dt_txt": "2022-10-27 15:00:00"
        },
        {
        "dt": 1666893600,
        "main": {
        "temp": 18.41,
        "feels_like": 18.32,
        "temp_min": 17.3,
        "temp_max": 18.41,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 1009,
        "humidity": 77,
        "temp_kf": 1.11
        },
        "weather": [
        {
        "id": 804,
        "main": "Clouds",
        "description": "couvert",
        "icon": "04n"
        }
        ],
        "clouds": {
        "all": 85
        },
        "wind": {
        "speed": 4.17,
        "deg": 165,
        "gust": 7.27
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-10-27 18:00:00"
        },
        {
        "dt": 1666904400,
        "main": {
        "temp": 16.8,
        "feels_like": 16.6,
        "temp_min": 16.8,
        "temp_max": 16.8,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 1009,
        "humidity": 79,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 804,
        "main": "Clouds",
        "description": "couvert",
        "icon": "04n"
        }
        ],
        "clouds": {
        "all": 100
        },
        "wind": {
        "speed": 3.54,
        "deg": 151,
        "gust": 4.37
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-10-27 21:00:00"
        },
        {
        "dt": 1666915200,
        "main": {
        "temp": 16.46,
        "feels_like": 16.17,
        "temp_min": 16.46,
        "temp_max": 16.46,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1009,
        "humidity": 77,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 804,
        "main": "Clouds",
        "description": "couvert",
        "icon": "04n"
        }
        ],
        "clouds": {
        "all": 85
        },
        "wind": {
        "speed": 3.51,
        "deg": 157,
        "gust": 4.02
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-10-28 00:00:00"
        },
        {
        "dt": 1666926000,
        "main": {
        "temp": 15.89,
        "feels_like": 15.6,
        "temp_min": 15.89,
        "temp_max": 15.89,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 1007,
        "humidity": 79,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 804,
        "main": "Clouds",
        "description": "couvert",
        "icon": "04n"
        }
        ],
        "clouds": {
        "all": 96
        },
        "wind": {
        "speed": 4,
        "deg": 158,
        "gust": 5.88
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-10-28 03:00:00"
        },
        {
        "dt": 1666936800,
        "main": {
        "temp": 16.06,
        "feels_like": 15.71,
        "temp_min": 16.06,
        "temp_max": 16.06,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 1007,
        "humidity": 76,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 804,
        "main": "Clouds",
        "description": "couvert",
        "icon": "04n"
        }
        ],
        "clouds": {
        "all": 98
        },
        "wind": {
        "speed": 5.28,
        "deg": 157,
        "gust": 10.86
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-10-28 06:00:00"
        },
        {
        "dt": 1666947600,
        "main": {
        "temp": 17.7,
        "feels_like": 17.46,
        "temp_min": 17.7,
        "temp_max": 17.7,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 1008,
        "humidity": 74,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 804,
        "main": "Clouds",
        "description": "couvert",
        "icon": "04d"
        }
        ],
        "clouds": {
        "all": 99
        },
        "wind": {
        "speed": 6.93,
        "deg": 188,
        "gust": 13.52
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "d"
        },
        "dt_txt": "2022-10-28 09:00:00"
        },
        {
        "dt": 1666958400,
        "main": {
        "temp": 18.29,
        "feels_like": 18.19,
        "temp_min": 18.29,
        "temp_max": 18.29,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 1010,
        "humidity": 77,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 804,
        "main": "Clouds",
        "description": "couvert",
        "icon": "04d"
        }
        ],
        "clouds": {
        "all": 100
        },
        "wind": {
        "speed": 8.02,
        "deg": 226,
        "gust": 12.93
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "d"
        },
        "dt_txt": "2022-10-28 12:00:00"
        },
        {
        "dt": 1666969200,
        "main": {
        "temp": 16.88,
        "feels_like": 16.92,
        "temp_min": 16.88,
        "temp_max": 16.88,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 1011,
        "humidity": 88,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 804,
        "main": "Clouds",
        "description": "couvert",
        "icon": "04d"
        }
        ],
        "clouds": {
        "all": 100
        },
        "wind": {
        "speed": 6.99,
        "deg": 244,
        "gust": 11.41
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "d"
        },
        "dt_txt": "2022-10-28 15:00:00"
        },
        {
        "dt": 1666980000,
        "main": {
        "temp": 14.95,
        "feels_like": 14.77,
        "temp_min": 14.95,
        "temp_max": 14.95,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1013,
        "humidity": 87,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 804,
        "main": "Clouds",
        "description": "couvert",
        "icon": "04n"
        }
        ],
        "clouds": {
        "all": 100
        },
        "wind": {
        "speed": 4.12,
        "deg": 240,
        "gust": 7.21
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-10-28 18:00:00"
        },
        {
        "dt": 1666990800,
        "main": {
        "temp": 14.47,
        "feels_like": 14.22,
        "temp_min": 14.47,
        "temp_max": 14.47,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1014,
        "humidity": 86,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 804,
        "main": "Clouds",
        "description": "couvert",
        "icon": "04n"
        }
        ],
        "clouds": {
        "all": 100
        },
        "wind": {
        "speed": 1.12,
        "deg": 211,
        "gust": 1.63
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-10-28 21:00:00"
        },
        {
        "dt": 1667001600,
        "main": {
        "temp": 14.27,
        "feels_like": 14.05,
        "temp_min": 14.27,
        "temp_max": 14.27,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1013,
        "humidity": 88,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 804,
        "main": "Clouds",
        "description": "couvert",
        "icon": "04n"
        }
        ],
        "clouds": {
        "all": 100
        },
        "wind": {
        "speed": 2.57,
        "deg": 143,
        "gust": 2.84
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-10-29 00:00:00"
        },
        {
        "dt": 1667012400,
        "main": {
        "temp": 14.37,
        "feels_like": 14.13,
        "temp_min": 14.37,
        "temp_max": 14.37,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1011,
        "humidity": 87,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 804,
        "main": "Clouds",
        "description": "couvert",
        "icon": "04n"
        }
        ],
        "clouds": {
        "all": 100
        },
        "wind": {
        "speed": 3.42,
        "deg": 116,
        "gust": 5.45
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-10-29 03:00:00"
        },
        {
        "dt": 1667023200,
        "main": {
        "temp": 15.19,
        "feels_like": 15.09,
        "temp_min": 15.19,
        "temp_max": 15.19,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 1010,
        "humidity": 89,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 804,
        "main": "Clouds",
        "description": "couvert",
        "icon": "04n"
        }
        ],
        "clouds": {
        "all": 100
        },
        "wind": {
        "speed": 3.72,
        "deg": 114,
        "gust": 6.96
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-10-29 06:00:00"
        },
        {
        "dt": 1667034000,
        "main": {
        "temp": 17.6,
        "feels_like": 17.37,
        "temp_min": 17.6,
        "temp_max": 17.6,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1009,
        "humidity": 75,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 804,
        "main": "Clouds",
        "description": "couvert",
        "icon": "04d"
        }
        ],
        "clouds": {
        "all": 100
        },
        "wind": {
        "speed": 5.04,
        "deg": 143,
        "gust": 10.37
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "d"
        },
        "dt_txt": "2022-10-29 09:00:00"
        },
        {
        "dt": 1667044800,
        "main": {
        "temp": 20.72,
        "feels_like": 20.49,
        "temp_min": 20.72,
        "temp_max": 20.72,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 1008,
        "humidity": 63,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 804,
        "main": "Clouds",
        "description": "couvert",
        "icon": "04d"
        }
        ],
        "clouds": {
        "all": 100
        },
        "wind": {
        "speed": 6.81,
        "deg": 168,
        "gust": 11.46
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "d"
        },
        "dt_txt": "2022-10-29 12:00:00"
        },
        {
        "dt": 1667055600,
        "main": {
        "temp": 19.91,
        "feels_like": 19.71,
        "temp_min": 19.91,
        "temp_max": 19.91,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 1007,
        "humidity": 67,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 804,
        "main": "Clouds",
        "description": "couvert",
        "icon": "04d"
        }
        ],
        "clouds": {
        "all": 100
        },
        "wind": {
        "speed": 3.92,
        "deg": 175,
        "gust": 7.28
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "d"
        },
        "dt_txt": "2022-10-29 15:00:00"
        },
        {
        "dt": 1667066400,
        "main": {
        "temp": 17.45,
        "feels_like": 17.18,
        "temp_min": 17.45,
        "temp_max": 17.45,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 1008,
        "humidity": 74,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 804,
        "main": "Clouds",
        "description": "couvert",
        "icon": "04n"
        }
        ],
        "clouds": {
        "all": 93
        },
        "wind": {
        "speed": 4.04,
        "deg": 180,
        "gust": 5.71
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-10-29 18:00:00"
        },
        {
        "dt": 1667077200,
        "main": {
        "temp": 16.37,
        "feels_like": 16.1,
        "temp_min": 16.37,
        "temp_max": 16.37,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1009,
        "humidity": 78,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 804,
        "main": "Clouds",
        "description": "couvert",
        "icon": "04n"
        }
        ],
        "clouds": {
        "all": 95
        },
        "wind": {
        "speed": 3.78,
        "deg": 189,
        "gust": 4.83
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-10-29 21:00:00"
        },
        {
        "dt": 1667088000,
        "main": {
        "temp": 15.83,
        "feels_like": 15.71,
        "temp_min": 15.83,
        "temp_max": 15.83,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1009,
        "humidity": 86,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 804,
        "main": "Clouds",
        "description": "couvert",
        "icon": "04n"
        }
        ],
        "clouds": {
        "all": 94
        },
        "wind": {
        "speed": 3.12,
        "deg": 201,
        "gust": 3.8
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-10-30 00:00:00"
        },
        {
        "dt": 1667098800,
        "main": {
        "temp": 15.83,
        "feels_like": 15.82,
        "temp_min": 15.83,
        "temp_max": 15.83,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1008,
        "humidity": 90,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 804,
        "main": "Clouds",
        "description": "couvert",
        "icon": "04n"
        }
        ],
        "clouds": {
        "all": 91
        },
        "wind": {
        "speed": 3.56,
        "deg": 223,
        "gust": 5.17
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-10-30 03:00:00"
        },
        {
        "dt": 1667109600,
        "main": {
        "temp": 15.4,
        "feels_like": 15.4,
        "temp_min": 15.4,
        "temp_max": 15.4,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1009,
        "humidity": 92,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 804,
        "main": "Clouds",
        "description": "couvert",
        "icon": "04n"
        }
        ],
        "clouds": {
        "all": 96
        },
        "wind": {
        "speed": 3.54,
        "deg": 214,
        "gust": 5.9
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-10-30 06:00:00"
        },
        {
        "dt": 1667120400,
        "main": {
        "temp": 15.93,
        "feels_like": 15.88,
        "temp_min": 15.93,
        "temp_max": 15.93,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 1010,
        "humidity": 88,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 804,
        "main": "Clouds",
        "description": "couvert",
        "icon": "04d"
        }
        ],
        "clouds": {
        "all": 100
        },
        "wind": {
        "speed": 6.21,
        "deg": 247,
        "gust": 8.33
        },
        "visibility": 10000,
        "pop": 0.09,
        "sys": {
        "pod": "d"
        },
        "dt_txt": "2022-10-30 09:00:00"
        },
        {
        "dt": 1667131200,
        "main": {
        "temp": 15.1,
        "feels_like": 14.89,
        "temp_min": 15.1,
        "temp_max": 15.1,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 1010,
        "humidity": 85,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 500,
        "main": "Rain",
        "description": "légère pluie",
        "icon": "10d"
        }
        ],
        "clouds": {
        "all": 100
        },
        "wind": {
        "speed": 5.47,
        "deg": 206,
        "gust": 8.65
        },
        "visibility": 10000,
        "pop": 0.32,
        "rain": {
        "3h": 0.34
        },
        "sys": {
        "pod": "d"
        },
        "dt_txt": "2022-10-30 12:00:00"
        },
        {
        "dt": 1667142000,
        "main": {
        "temp": 15.41,
        "feels_like": 15.1,
        "temp_min": 15.41,
        "temp_max": 15.41,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 1010,
        "humidity": 80,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 804,
        "main": "Clouds",
        "description": "couvert",
        "icon": "04d"
        }
        ],
        "clouds": {
        "all": 99
        },
        "wind": {
        "speed": 4.57,
        "deg": 215,
        "gust": 7.04
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "d"
        },
        "dt_txt": "2022-10-30 15:00:00"
        },
        {
        "dt": 1667152800,
        "main": {
        "temp": 14.35,
        "feels_like": 14.03,
        "temp_min": 14.35,
        "temp_max": 14.35,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 1011,
        "humidity": 84,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 804,
        "main": "Clouds",
        "description": "couvert",
        "icon": "04n"
        }
        ],
        "clouds": {
        "all": 100
        },
        "wind": {
        "speed": 4.2,
        "deg": 198,
        "gust": 7.31
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-10-30 18:00:00"
        },
        {
        "dt": 1667163600,
        "main": {
        "temp": 13.46,
        "feels_like": 13.08,
        "temp_min": 13.46,
        "temp_max": 13.46,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 1011,
        "humidity": 85,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 803,
        "main": "Clouds",
        "description": "nuageux",
        "icon": "04n"
        }
        ],
        "clouds": {
        "all": 66
        },
        "wind": {
        "speed": 3.77,
        "deg": 170,
        "gust": 4.68
        },
        "visibility": 10000,
        "pop": 0.01,
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-10-30 21:00:00"
        },
        {
        "dt": 1667174400,
        "main": {
        "temp": 12.96,
        "feels_like": 12.53,
        "temp_min": 12.96,
        "temp_max": 12.96,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 1010,
        "humidity": 85,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 803,
        "main": "Clouds",
        "description": "nuageux",
        "icon": "04n"
        }
        ],
        "clouds": {
        "all": 53
        },
        "wind": {
        "speed": 3.95,
        "deg": 170,
        "gust": 5.19
        },
        "visibility": 10000,
        "pop": 0.01,
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-10-31 00:00:00"
        },
        {
        "dt": 1667185200,
        "main": {
        "temp": 12.43,
        "feels_like": 12.03,
        "temp_min": 12.43,
        "temp_max": 12.43,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1009,
        "humidity": 88,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 803,
        "main": "Clouds",
        "description": "nuageux",
        "icon": "04n"
        }
        ],
        "clouds": {
        "all": 51
        },
        "wind": {
        "speed": 4.02,
        "deg": 168,
        "gust": 5.32
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-10-31 03:00:00"
        },
        {
        "dt": 1667196000,
        "main": {
        "temp": 12.23,
        "feels_like": 11.88,
        "temp_min": 12.23,
        "temp_max": 12.23,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 1007,
        "humidity": 91,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 803,
        "main": "Clouds",
        "description": "nuageux",
        "icon": "04n"
        }
        ],
        "clouds": {
        "all": 75
        },
        "wind": {
        "speed": 3.89,
        "deg": 160,
        "gust": 5.85
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-10-31 06:00:00"
        },
        {
        "dt": 1667206800,
        "main": {
        "temp": 13.96,
        "feels_like": 13.74,
        "temp_min": 13.96,
        "temp_max": 13.96,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 1006,
        "humidity": 89,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 804,
        "main": "Clouds",
        "description": "couvert",
        "icon": "04d"
        }
        ],
        "clouds": {
        "all": 100
        },
        "wind": {
        "speed": 4.59,
        "deg": 155,
        "gust": 8.87
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "d"
        },
        "dt_txt": "2022-10-31 09:00:00"
        },
        {
        "dt": 1667217600,
        "main": {
        "temp": 17.02,
        "feels_like": 16.79,
        "temp_min": 17.02,
        "temp_max": 17.02,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 1003,
        "humidity": 77,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 804,
        "main": "Clouds",
        "description": "couvert",
        "icon": "04d"
        }
        ],
        "clouds": {
        "all": 100
        },
        "wind": {
        "speed": 6.74,
        "deg": 165,
        "gust": 11.74
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "d"
        },
        "dt_txt": "2022-10-31 12:00:00"
        },
        {
        "dt": 1667228400,
        "main": {
        "temp": 16.12,
        "feels_like": 15.75,
        "temp_min": 16.12,
        "temp_max": 16.12,
        "pressure": 1008,
        "sea_level": 1008,
        "grnd_level": 1001,
        "humidity": 75,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 500,
        "main": "Rain",
        "description": "légère pluie",
        "icon": "10d"
        }
        ],
        "clouds": {
        "all": 100
        },
        "wind": {
        "speed": 7.85,
        "deg": 162,
        "gust": 14.64
        },
        "visibility": 10000,
        "pop": 0.59,
        "rain": {
        "3h": 0.35
        },
        "sys": {
        "pod": "d"
        },
        "dt_txt": "2022-10-31 15:00:00"
        },
        {
        "dt": 1667239200,
        "main": {
        "temp": 14.16,
        "feels_like": 13.98,
        "temp_min": 14.16,
        "temp_max": 14.16,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 1002,
        "humidity": 90,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 500,
        "main": "Rain",
        "description": "légère pluie",
        "icon": "10n"
        }
        ],
        "clouds": {
        "all": 100
        },
        "wind": {
        "speed": 8.79,
        "deg": 227,
        "gust": 12.74
        },
        "visibility": 7268,
        "pop": 1,
        "rain": {
        "3h": 2.69
        },
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-10-31 18:00:00"
        },
        {
        "dt": 1667250000,
        "main": {
        "temp": 13.78,
        "feels_like": 13.49,
        "temp_min": 13.78,
        "temp_max": 13.78,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 1003,
        "humidity": 87,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 501,
        "main": "Rain",
        "description": "pluie modérée",
        "icon": "10n"
        }
        ],
        "clouds": {
        "all": 100
        },
        "wind": {
        "speed": 9.42,
        "deg": 259,
        "gust": 12.92
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
        "3h": 4.44
        },
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-10-31 21:00:00"
        },
        {
        "dt": 1667260800,
        "main": {
        "temp": 13.44,
        "feels_like": 12.72,
        "temp_min": 13.44,
        "temp_max": 13.44,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 1007,
        "humidity": 72,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 500,
        "main": "Rain",
        "description": "légère pluie",
        "icon": "10n"
        }
        ],
        "clouds": {
        "all": 83
        },
        "wind": {
        "speed": 9.38,
        "deg": 269,
        "gust": 13.17
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
        "3h": 0.19
        },
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-11-01 00:00:00"
        },
        {
        "dt": 1667271600,
        "main": {
        "temp": 13.52,
        "feels_like": 12.81,
        "temp_min": 13.52,
        "temp_max": 13.52,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 1009,
        "humidity": 72,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 800,
        "main": "Clear",
        "description": "ciel dégagé",
        "icon": "01n"
        }
        ],
        "clouds": {
        "all": 2
        },
        "wind": {
        "speed": 7.72,
        "deg": 254,
        "gust": 11.2
        },
        "visibility": 10000,
        "pop": 0.04,
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-11-01 03:00:00"
        },
        {
        "dt": 1667282400,
        "main": {
        "temp": 13.03,
        "feels_like": 12.37,
        "temp_min": 13.03,
        "temp_max": 13.03,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 1011,
        "humidity": 76,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 800,
        "main": "Clear",
        "description": "ciel dégagé",
        "icon": "01n"
        }
        ],
        "clouds": {
        "all": 2
        },
        "wind": {
        "speed": 6.73,
        "deg": 226,
        "gust": 9.38
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-11-01 06:00:00"
        },
        {
        "dt": 1667293200,
        "main": {
        "temp": 12.32,
        "feels_like": 11.83,
        "temp_min": 12.32,
        "temp_max": 12.32,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1013,
        "humidity": 85,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 500,
        "main": "Rain",
        "description": "légère pluie",
        "icon": "10d"
        }
        ],
        "clouds": {
        "all": 59
        },
        "wind": {
        "speed": 8,
        "deg": 196,
        "gust": 10.55
        },
        "visibility": 10000,
        "pop": 0.2,
        "rain": {
        "3h": 0.13
        },
        "sys": {
        "pod": "d"
        },
        "dt_txt": "2022-11-01 09:00:00"
        },
        {
        "dt": 1667304000,
        "main": {
        "temp": 13.78,
        "feels_like": 13.12,
        "temp_min": 13.78,
        "temp_max": 13.78,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1012,
        "humidity": 73,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 803,
        "main": "Clouds",
        "description": "nuageux",
        "icon": "04d"
        }
        ],
        "clouds": {
        "all": 78
        },
        "wind": {
        "speed": 8.62,
        "deg": 199,
        "gust": 11.39
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "d"
        },
        "dt_txt": "2022-11-01 12:00:00"
        }
        ],
        "city": {
        "id": 2978439,
        "name": "Saint-Martin-Boulogne",
        "coord": {
        "lat": 50.7269,
        "lon": 1.6186
        },
        "country": "FR",
        "population": 12414,
        "timezone": 7200,
        "sunrise": 1666852561,
        "sunset": 1666888714
        }
        }

    const test = {
        "dt": 1666882800,
        "main": {
        "temp": 19.93,
        "feels_like": 19.86,
        "temp_min": 18.55,
        "temp_max": 19.93,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1009,
        "humidity": 72,
        "temp_kf": 1.38
        },
        "weather": [
        {
        "id": 804,
        "main": "Clouds",
        "description": "couvert",
        "icon": "04d"
        }
        ],
        "clouds": {
        "all": 85
        },
        "wind": {
        "speed": 5.17,
        "deg": 193,
        "gust": 9.38
        },
        "visibility": 10000,
        "pop": 0.06,
        "sys": {
        "pod": "d"
        },
        "dt_txt": "2022-10-27 15:00:00"
        }

    // const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const options1 = { weekday: 'long', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const options2 = { hour: '2-digit', minute: '2-digit' }

  return (
    <ScrollView style={styleWeather.back}>
        <View style={styleWeather.main}>
            { !isPreview ? 
            <>
                <View style={styleWeather.header}>
                    <View style={styleWeather.headerLeftButton}>
                        <MaterialCommunityIcons name='dots-square' style={styleWeather.headerIconLeft} />
                    </View>
                    <Text style={styleWeather.cityName}>
                        {`${response.city.name}`}
                    </Text> 
                    <Entypo name='dots-three-vertical' style={styleWeather.headerIconRight} />
                </View>
                <Image source={{ uri: `http://openweathermap.org/img/wn/${response.list[0].weather[0].icon}@4x.png` }} style={styleWeather.image} />
                <View>
                    <View style={styleWeather.mainTempContainer}>
                        <Text style={styleWeather.mainTemp}>
                            {`${Math.round(response.list[0].main.temp)}`}
                        </Text>
                        <Text style={styleWeather.mainTempDeg}>°</Text>
                    </View>
                    <Text style={styleWeather.mainWeather}>
                        {`${response.list[0].weather[0].description}`}
                    </Text>
                </View>
                <View>
                    <Text style={styleWeather.mainDt}>
                        {new Date(response.list[0].dt_txt).toLocaleTimeString("fr-FR", options1)}
                    </Text>
                </View>
            </>
            : <></>}
            { isPreview ?
            <>
                <View style={styleWeather.header}>
                    <View style={styleWeather.headerLeftButton} ><FontAwesome name='chevron-left' style={styleWeather.headerIconLeft} onPress={() => setIsPreview(false)} /></View>
                    <Text style={styleWeather.cityName}>
                        {`${response.city.name}`}
                    </Text> 
                    <Entypo name='dots-three-vertical' style={styleWeather.headerIconRight} />
                </View>
            </> : <></>}
            <View style={styleWeather.details}>
                <View style={styleWeather.detailsChild}>
                    <Feather style={styleWeather.detailsIcon} name="wind"/>
                    <Text style={styleWeather.detailsData}>
                    {`${Math.round((response.list[0].wind.speed*3.6))} km/h`}
                    </Text>
                    <Text style={styleWeather.detailsText}>
                        Vent
                    </Text>
                </View>
                <View style={styleWeather.detailsChild}>
                    <Ionicons style={styleWeather.detailsIcon} name="water"/>
                    <Text style={styleWeather.detailsData}>
                    {`${response.list[0].main.humidity} %`}
                    </Text>
                    <Text style={styleWeather.detailsText}>
                        Humidité
                    </Text>
                </View>
                <View style={styleWeather.detailsChild}>
                    <Fontisto style={styleWeather.detailsIcon} name="rains" />
                    <Text style={styleWeather.detailsData}>
                    {response.list[0].rain ? response.list[0].rain * 100 + ' %' : '0 %'}
                    </Text>
                    <Text style={styleWeather.detailsText}>
                        Pluie
                    </Text>
                </View>
            </View>
        </View>

        <View style={styleWeather.container}>
            <View style={styleWeather.footerHeader}>
                <Text style={styleWeather.footerHeaderToday}>Aujourd'hui</Text>
                <Text style={styleWeather.footerHeaderMore} onPress={() => setIsPreview(true)}>Plus <FontAwesome style={styleWeather.footerHeaderIcon} name='chevron-right'/></Text>
            </View>
            <View style={styleWeather.footer}>
                <View style={styleWeather.footerElement}>
                    <Text style={styleWeather.footerElementTemp}>{`${Math.round(response.list[0].main.temp)}°`}</Text>
                    <Image style={styleWeather.footerElementImage} source={{ uri: `http://openweathermap.org/img/wn/${response.list[0].weather[0].icon}@4x.png` }}/>
                    <Text style={styleWeather.footerElementHour}> {new Date(response.list[0].dt_txt).toLocaleTimeString("fr-FR", options2)}</Text>
                </View>
                <View style={styleWeather.footerElement}>
                    <Text style={styleWeather.footerElementTemp}>
                        {`${Math.round(response.list[1].main.temp)}°`}
                    </Text>
                    <Image style={styleWeather.footerElementImage} source={{ uri: `http://openweathermap.org/img/wn/${response.list[1].weather[0].icon}@4x.png` }}/>
                    <Text style={styleWeather.footerElementHour}> {new Date(response.list[1].dt_txt).toLocaleTimeString("fr-FR", options2)}</Text>
                </View>
                <View style={styleWeather.footerElement}>
                    <Text style={styleWeather.footerElementTemp}>
                        {`${Math.round(response.list[2].main.temp)}°`}
                    </Text>
                    <Image style={styleWeather.footerElementImage} source={{ uri: `http://openweathermap.org/img/wn/${response.list[2].weather[0].icon}@4x.png` }}/>
                    <Text style={styleWeather.footerElementHour}> {new Date(response.list[2].dt_txt).toLocaleTimeString("fr-FR", options2)}</Text>
                </View>
                <View style={styleWeather.footerElement}>
                    <Text style={styleWeather.footerElementTemp}>
                        {`${Math.round(response.list[3].main.temp)}°`}
                    </Text>
                    <Image style={styleWeather.footerElementImage} source={{ uri: `http://openweathermap.org/img/wn/${response.list[3].weather[0].icon}@4x.png` }}/>
                    <Text style={styleWeather.footerElementHour}> {new Date(response.list[3].dt_txt).toLocaleTimeString("fr-FR", options2)}</Text>
                </View>
            </View>
        </View>
    </ScrollView>
  )
}

const styleWeather = StyleSheet.create({
    back: {
        // flex: 1,
        backgroundColor: '#000A18'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 15
    },
    headerLeftButton: {
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#b3dbe6',
        width: 30,
        aspectRatio: 1/1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerIconLeft: {
        color: '#fff',
        fontSize: 15,
        padding: 5,
    },
    headerIconRight: {
        color: '#fff',
        fontSize: 15
    },
    main: {
        backgroundColor: '#34c3eb',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        padding: 15,
        margin: 10,
    },
    mainTemp: {
        color: '#fff',
        fontSize: 75
    },
    mainTempContainer: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    mainTempDeg: {
        color: '#b3dbe6',
        fontSize: 35,
        paddingTop: 10
    },
    mainWeather: {
        color: '#fff',
        fontSize: 30,
        textAlign: 'center',
        textTransform: 'capitalize'
    },
    mainDt: {
        color: '#fff',
        textTransform: 'capitalize'
    },  
    cityName: {
        color: '#fff',
        fontSize: 20,
    },
    image: {
        height: 200,
        width: 200
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: 'rgba(249, 249, 249, 0.2)',
    },
    detailsChild: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
    },
    detailsIcon: {
        fontSize: 20,
        color: '#fff'
    },
    detailsData: {
        fontSize: 15,
        color: '#fff'
    },
    detailsText: {
        fontSize: 12,
        color: 'rgba(249, 249, 249, 0.7)'
    },
    footerHeader: {
        paddingHorizontal: 40,
        marginTop: 15,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    footerHeaderToday: {
        color: '#fff',
        fontSize: 14
    },
    footerHeaderMore: {
        color: '#b3dbe6',
        fontSize: 11
    },
    footerHeaderIcon: {
        color: '#b3dbe6',
        fontWeight: '100'
    },
    footer: {
        flexDirection: 'row',
        marginTop: 25
    },
    footerElement: {
        width: 60,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(249, 249, 249, 0.2)',
        borderRadius: 20,
    },
    footerElementTemp: {
        color: '#fff',
    },
    footerElementHour: {
        color: '#fff'
    },
    footerElementImage: {
        height: 50,
        width: 50
    },
    oldhome: {
      flex: 1,
      backgroundColor: '#ff0000',
      alignItems: 'center',
      justifyContent: 'center',
    }
})