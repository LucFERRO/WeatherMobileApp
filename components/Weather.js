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

const dayjs = require('dayjs')
require('dayjs/locale/fr')

export default function Weather({navigation}) {

    const [isPreview, setIsPreview] = useState(false)

    useEffect( () => console.log(isPreview), [isPreview])

    const response = {
        "cod": "200",
        "message": 0,
        "cnt": 40,
        "list": [
        {
        "dt": 1666947600,
        "main": {
        "temp": 17.62,
        "feels_like": 17.4,
        "temp_min": 17.62,
        "temp_max": 17.7,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1008,
        "humidity": 75,
        "temp_kf": -0.08
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
        "speed": 7.86,
        "deg": 210,
        "gust": 13.13
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
        "temp": 17.7,
        "feels_like": 17.54,
        "temp_min": 17.7,
        "temp_max": 17.85,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1010,
        "humidity": 77,
        "temp_kf": -0.15
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
        "speed": 8.34,
        "deg": 227,
        "gust": 12.16
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
        "temp": 16.7,
        "feels_like": 16.51,
        "temp_min": 16.24,
        "temp_max": 16.7,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 1012,
        "humidity": 80,
        "temp_kf": 0.46
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
        "speed": 6.51,
        "deg": 250,
        "gust": 10.06
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
        "temp": 15.29,
        "feels_like": 15.12,
        "temp_min": 15.29,
        "temp_max": 15.29,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1013,
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
        "speed": 3.98,
        "deg": 240,
        "gust": 6.84
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
        "temp": 14.53,
        "feels_like": 14.34,
        "temp_min": 14.53,
        "temp_max": 14.53,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1014,
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
        "speed": 2.03,
        "deg": 158,
        "gust": 2.28
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
        "temp": 14.48,
        "feels_like": 14.23,
        "temp_min": 14.48,
        "temp_max": 14.48,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1012,
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
        "speed": 2.73,
        "deg": 123,
        "gust": 3.61
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
        "temp": 15.49,
        "feels_like": 15.37,
        "temp_min": 15.49,
        "temp_max": 15.49,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 1010,
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
        "speed": 4.41,
        "deg": 123,
        "gust": 9.09
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
        "temp": 16.88,
        "feels_like": 16.69,
        "temp_min": 16.88,
        "temp_max": 16.88,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 1008,
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
        "speed": 5.96,
        "deg": 141,
        "gust": 12.2
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
        "temp": 18.35,
        "feels_like": 18.04,
        "temp_min": 18.35,
        "temp_max": 18.35,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 1008,
        "humidity": 69,
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
        "speed": 6.26,
        "deg": 169,
        "gust": 12.51
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
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 1007,
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
        "speed": 5.26,
        "deg": 156,
        "gust": 8.57
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
        "temp": 20.71,
        "feels_like": 20.46,
        "temp_min": 20.71,
        "temp_max": 20.71,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 1006,
        "humidity": 62,
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
        "all": 97
        },
        "wind": {
        "speed": 4.91,
        "deg": 168,
        "gust": 9.12
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
        "temp": 18.16,
        "feels_like": 17.78,
        "temp_min": 18.16,
        "temp_max": 18.16,
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
        "icon": "04n"
        }
        ],
        "clouds": {
        "all": 88
        },
        "wind": {
        "speed": 5.15,
        "deg": 176,
        "gust": 10.32
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
        "temp": 16.57,
        "feels_like": 16.27,
        "temp_min": 16.57,
        "temp_max": 16.57,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 1008,
        "humidity": 76,
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
        "all": 61
        },
        "wind": {
        "speed": 4.64,
        "deg": 199,
        "gust": 7.57
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
        "temp": 16.07,
        "feels_like": 16.08,
        "temp_min": 16.07,
        "temp_max": 16.07,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1009,
        "humidity": 90,
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
        "all": 80
        },
        "wind": {
        "speed": 4.12,
        "deg": 208,
        "gust": 7.96
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
        "temp": 15.51,
        "feels_like": 15.52,
        "temp_min": 15.51,
        "temp_max": 15.51,
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
        "all": 99
        },
        "wind": {
        "speed": 3.8,
        "deg": 198,
        "gust": 6.61
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
        "temp": 14.89,
        "feels_like": 14.76,
        "temp_min": 14.89,
        "temp_max": 14.89,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1009,
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
        "all": 99
        },
        "wind": {
        "speed": 3.82,
        "deg": 199,
        "gust": 6.31
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
        "temp": 15.99,
        "feels_like": 15.76,
        "temp_min": 15.99,
        "temp_max": 15.99,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1009,
        "humidity": 81,
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
        "speed": 3.83,
        "deg": 195,
        "gust": 5.84
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "d"
        },
        "dt_txt": "2022-10-30 09:00:00"
        },
        {
        "dt": 1667131200,
        "main": {
        "temp": 16.66,
        "feels_like": 16.34,
        "temp_min": 16.66,
        "temp_max": 16.66,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1008,
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
        "speed": 4.64,
        "deg": 248,
        "gust": 5.01
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "d"
        },
        "dt_txt": "2022-10-30 12:00:00"
        },
        {
        "dt": 1667142000,
        "main": {
        "temp": 14.09,
        "feels_like": 13.9,
        "temp_min": 14.09,
        "temp_max": 14.09,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1009,
        "humidity": 90,
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
        "speed": 6.1,
        "deg": 251,
        "gust": 8.59
        },
        "visibility": 10000,
        "pop": 0.62,
        "rain": {
        "3h": 0.99
        },
        "sys": {
        "pod": "d"
        },
        "dt_txt": "2022-10-30 15:00:00"
        },
        {
        "dt": 1667152800,
        "main": {
        "temp": 14.17,
        "feels_like": 13.81,
        "temp_min": 14.17,
        "temp_max": 14.17,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 1010,
        "humidity": 83,
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
        "speed": 6.48,
        "deg": 240,
        "gust": 9.3
        },
        "visibility": 10000,
        "pop": 0.63,
        "rain": {
        "3h": 0.43
        },
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-10-30 18:00:00"
        },
        {
        "dt": 1667163600,
        "main": {
        "temp": 13.6,
        "feels_like": 13.21,
        "temp_min": 13.6,
        "temp_max": 13.6,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1012,
        "humidity": 84,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 802,
        "main": "Clouds",
        "description": "partiellement nuageux",
        "icon": "03n"
        }
        ],
        "clouds": {
        "all": 50
        },
        "wind": {
        "speed": 5.83,
        "deg": 219,
        "gust": 8.75
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-10-30 21:00:00"
        },
        {
        "dt": 1667174400,
        "main": {
        "temp": 12.81,
        "feels_like": 12.44,
        "temp_min": 12.81,
        "temp_max": 12.81,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1012,
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
        "all": 63
        },
        "wind": {
        "speed": 5.01,
        "deg": 201,
        "gust": 7.67
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-10-31 00:00:00"
        },
        {
        "dt": 1667185200,
        "main": {
        "temp": 11.93,
        "feels_like": 11.55,
        "temp_min": 11.93,
        "temp_max": 11.93,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1011,
        "humidity": 91,
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
        "speed": 4.51,
        "deg": 184,
        "gust": 6.48
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
        "temp": 11.36,
        "feels_like": 10.9,
        "temp_min": 11.36,
        "temp_max": 11.36,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1011,
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
        "speed": 4.62,
        "deg": 176,
        "gust": 6.99
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
        "temp": 12.53,
        "feels_like": 11.95,
        "temp_min": 12.53,
        "temp_max": 12.53,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 1011,
        "humidity": 81,
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
        "speed": 5.03,
        "deg": 166,
        "gust": 7.93
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
        "temp": 15.69,
        "feels_like": 15.01,
        "temp_min": 15.69,
        "temp_max": 15.69,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1009,
        "humidity": 65,
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
        "speed": 4.42,
        "deg": 154,
        "gust": 5.82
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
        "temp": 16.24,
        "feels_like": 15.77,
        "temp_min": 16.24,
        "temp_max": 16.24,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 1006,
        "humidity": 71,
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
        "all": 96
        },
        "wind": {
        "speed": 3.89,
        "deg": 132,
        "gust": 6.78
        },
        "visibility": 10000,
        "pop": 0.01,
        "sys": {
        "pod": "d"
        },
        "dt_txt": "2022-10-31 15:00:00"
        },
        {
        "dt": 1667239200,
        "main": {
        "temp": 14.43,
        "feels_like": 14.04,
        "temp_min": 14.43,
        "temp_max": 14.43,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 1004,
        "humidity": 81,
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
        "speed": 5.37,
        "deg": 113,
        "gust": 12.27
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-10-31 18:00:00"
        },
        {
        "dt": 1667250000,
        "main": {
        "temp": 14.7,
        "feels_like": 14.42,
        "temp_min": 14.7,
        "temp_max": 14.7,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 1001,
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
        "all": 99
        },
        "wind": {
        "speed": 6.4,
        "deg": 137,
        "gust": 13.88
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-10-31 21:00:00"
        },
        {
        "dt": 1667260800,
        "main": {
        "temp": 14.57,
        "feels_like": 14.48,
        "temp_min": 14.57,
        "temp_max": 14.57,
        "pressure": 1007,
        "sea_level": 1007,
        "grnd_level": 1000,
        "humidity": 92,
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
        "speed": 8.21,
        "deg": 189,
        "gust": 13.73
        },
        "visibility": 5900,
        "pop": 0.68,
        "rain": {
        "3h": 1.82
        },
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-11-01 00:00:00"
        },
        {
        "dt": 1667271600,
        "main": {
        "temp": 15.01,
        "feels_like": 14.89,
        "temp_min": 15.01,
        "temp_max": 15.01,
        "pressure": 1005,
        "sea_level": 1005,
        "grnd_level": 998,
        "humidity": 89,
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
        "speed": 10.66,
        "deg": 181,
        "gust": 15.62
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
        "3h": 3.21
        },
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-11-01 03:00:00"
        },
        {
        "dt": 1667282400,
        "main": {
        "temp": 13.42,
        "feels_like": 12.93,
        "temp_min": 13.42,
        "temp_max": 13.42,
        "pressure": 1005,
        "sea_level": 1005,
        "grnd_level": 997,
        "humidity": 81,
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
        "all": 64
        },
        "wind": {
        "speed": 14.56,
        "deg": 190,
        "gust": 19.79
        },
        "visibility": 10000,
        "pop": 0.99,
        "rain": {
        "3h": 0.5
        },
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-11-01 06:00:00"
        },
        {
        "dt": 1667293200,
        "main": {
        "temp": 14.24,
        "feels_like": 13.89,
        "temp_min": 14.24,
        "temp_max": 14.24,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 1001,
        "humidity": 83,
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
        "all": 64
        },
        "wind": {
        "speed": 12.77,
        "deg": 244,
        "gust": 16.22
        },
        "visibility": 10000,
        "pop": 0.76,
        "rain": {
        "3h": 0.91
        },
        "sys": {
        "pod": "d"
        },
        "dt_txt": "2022-11-01 09:00:00"
        },
        {
        "dt": 1667304000,
        "main": {
        "temp": 14.66,
        "feels_like": 14.04,
        "temp_min": 14.66,
        "temp_max": 14.66,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 1004,
        "humidity": 71,
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
        "all": 36
        },
        "wind": {
        "speed": 11.36,
        "deg": 225,
        "gust": 13.89
        },
        "visibility": 10000,
        "pop": 0.51,
        "rain": {
        "3h": 0.22
        },
        "sys": {
        "pod": "d"
        },
        "dt_txt": "2022-11-01 12:00:00"
        },
        {
        "dt": 1667314800,
        "main": {
        "temp": 14.96,
        "feels_like": 14.31,
        "temp_min": 14.96,
        "temp_max": 14.96,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 1004,
        "humidity": 69,
        "temp_kf": 0
        },
        "weather": [
        {
        "id": 802,
        "main": "Clouds",
        "description": "partiellement nuageux",
        "icon": "03d"
        }
        ],
        "clouds": {
        "all": 29
        },
        "wind": {
        "speed": 9.83,
        "deg": 199,
        "gust": 15.1
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "d"
        },
        "dt_txt": "2022-11-01 15:00:00"
        },
        {
        "dt": 1667325600,
        "main": {
        "temp": 14.36,
        "feels_like": 13.6,
        "temp_min": 14.36,
        "temp_max": 14.36,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 1003,
        "humidity": 67,
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
        "all": 42
        },
        "wind": {
        "speed": 10.99,
        "deg": 190,
        "gust": 16.28
        },
        "visibility": 10000,
        "pop": 0.31,
        "rain": {
        "3h": 0.25
        },
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-11-01 18:00:00"
        },
        {
        "dt": 1667336400,
        "main": {
        "temp": 13.97,
        "feels_like": 13.28,
        "temp_min": 13.97,
        "temp_max": 13.97,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 1002,
        "humidity": 71,
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
        "speed": 12.86,
        "deg": 199,
        "gust": 17.57
        },
        "visibility": 10000,
        "pop": 0.53,
        "rain": {
        "3h": 0.34
        },
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-11-01 21:00:00"
        },
        {
        "dt": 1667347200,
        "main": {
        "temp": 12.6,
        "feels_like": 12.06,
        "temp_min": 12.6,
        "temp_max": 12.6,
        "pressure": 1008,
        "sea_level": 1008,
        "grnd_level": 1001,
        "humidity": 82,
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
        "speed": 11.65,
        "deg": 214,
        "gust": 14.64
        },
        "visibility": 9010,
        "pop": 0.96,
        "rain": {
        "3h": 2.03
        },
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-11-02 00:00:00"
        },
        {
        "dt": 1667358000,
        "main": {
        "temp": 11.67,
        "feels_like": 11.03,
        "temp_min": 11.67,
        "temp_max": 11.67,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 1001,
        "humidity": 82,
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
        "speed": 9.85,
        "deg": 239,
        "gust": 12.28
        },
        "visibility": 10000,
        "pop": 0.94,
        "rain": {
        "3h": 2.64
        },
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-11-02 03:00:00"
        },
        {
        "dt": 1667368800,
        "main": {
        "temp": 12.05,
        "feels_like": 11.27,
        "temp_min": 12.05,
        "temp_max": 12.05,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 1005,
        "humidity": 75,
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
        "all": 99
        },
        "wind": {
        "speed": 10.23,
        "deg": 285,
        "gust": 12.81
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
        "3h": 1.72
        },
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-11-02 06:00:00"
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
        "sunrise": 1666939064,
        "sunset": 1666975002
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
    const options1 = { weekday: 'long', month: 'long', day: 'numeric' };
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
                        {dayjs.unix(response.list[0].dt).locale('fr').format('DD MMMM YYYY  HH:mm')}
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
                    <Text style={styleWeather.footerElementHour}> 
                        {dayjs.unix(response.list[0].dt).locale('fr').format('HH:mm')}
                    </Text>
                </View>
                <View style={styleWeather.footerElement}>
                    <Text style={styleWeather.footerElementTemp}>
                        {`${Math.round(response.list[1].main.temp)}°`}
                    </Text>
                    <Image style={styleWeather.footerElementImage} source={{ uri: `http://openweathermap.org/img/wn/${response.list[1].weather[0].icon}@4x.png` }}/>
                    <Text style={styleWeather.footerElementHour}> 
                        {dayjs.unix(response.list[1].dt).locale('fr').format('HH:mm')}
                    </Text>
                </View>
                <View style={styleWeather.footerElement}>
                    <Text style={styleWeather.footerElementTemp}>
                        {`${Math.round(response.list[2].main.temp)}°`}
                    </Text>
                    <Image style={styleWeather.footerElementImage} source={{ uri: `http://openweathermap.org/img/wn/${response.list[2].weather[0].icon}@4x.png` }}/>
                    <Text style={styleWeather.footerElementHour}> 
                        {dayjs.unix(response.list[2].dt).locale('fr').format('HH:mm')}
                    </Text>
                </View>
                <View style={styleWeather.footerElement}>
                    <Text style={styleWeather.footerElementTemp}>
                        {`${Math.round(response.list[3].main.temp)}°`}
                    </Text>
                    <Image style={styleWeather.footerElementImage} source={{ uri: `http://openweathermap.org/img/wn/${response.list[3].weather[0].icon}@4x.png` }}/>
                    <Text style={styleWeather.footerElementHour}> 
                        {dayjs.unix(response.list[3].dt).locale('fr').format('HH:mm')}
                    </Text>
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