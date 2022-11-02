import React from "react";
import { StatusBar } from "expo-status-bar";
import {StyleSheet,Image,Text,View,ScrollView,TextInput,Button,Pressable} from "react-native";
import { useState, useEffect } from "react";
import { style } from "../assets/style";
import Navbar from "./Navbar";
import NextDays from "./NextDays";
import WeatherDetails from "./WeatherDetails";
import SelectedWeather from "./SelectedWeather";

import * as Location from 'expo-location';

import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const dayjs = require("dayjs");
require("dayjs/locale/fr");

export default function Météo({ navigation }) {
    const [isPreview, setIsPreview] = useState(false);
    const [weatherData, setWeatherData] = useState();
    const [formatedWeatherData, setFormatedWeatherData] = useState();
    const [cityName, setCityName] = useState()
    const [mainWeather, setMainWeather] = useState({
        dt: null,
        temp: null,
        temp_min: null,
        temp_max: null,
        humidity: null,
        description: null,
        icon: null,
        wind: null,
        rain: null,
    });
    const [tommorowWeather, setTommorowWeather] = useState({
        dt: null,
        temp: null,
        temp_min: null,
        temp_max: null,
        humidity: null,
        description: null,
        icon: null,
        wind: null,
        rain: null,
    });

    const [location, setLocation] = useState();
    const [errorMsg, setErrorMsg] = useState();

    const canardWeatherKey = "e0ea92189583962f90bed534c425b775";

    // const lat = coordinates.latitude ? coordinates.latitude : 50.735643250210515;
    // const lon = coordinates.longitute ? coordinates.longitute : 1.604070777045237;

    // const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${canardWeatherKey}&lang=fr`;

    useEffect(() => { (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
    })()
}, []
);

    let text = 'Waiting..';
    if (errorMsg) {
    text = errorMsg;
    } else if (location) {
    text = JSON.stringify(location);
    }

    useEffect(() => {

        const fetchAndSetData = async () => {
            if (!location) return

            const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&units=metric&appid=${canardWeatherKey}&lang=fr`;
            // Vrai fetch sur l'api
            const apiData =  await fetch(urlForecast)
            const res = await apiData.json()

            // console.log(res)

            // Fake data de clodo
//             const res = {
//     "cod": "200",
//     "message": 0,
//     "cnt": 40,
//     "list": [
//         {
//             "dt": 1667325600,
//             "main": {
//                 "temp": 11.6,
//                 "feels_like": 10.93,
//                 "temp_min": 11.6,
//                 "temp_max": 14.3,
//                 "pressure": 1012,
//                 "sea_level": 1012,
//                 "grnd_level": 1005,
//                 "humidity": 81,
//                 "temp_kf": -2.7
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "légère pluie",
//                     "icon": "10n"
//                 }
//             ],
//             "clouds": {
//                 "all": 74
//             },
//             "wind": {
//                 "speed": 12.97,
//                 "deg": 225,
//                 "gust": 18.16
//             },
//             "visibility": 10000,
//             "pop": 1,
//             "rain": {
//                 "3h": 1.84
//             },
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2022-11-01 18:00:00"
//         },
//         {
//             "dt": 1667336400,
//             "main": {
//                 "temp": 12.1,
//                 "feels_like": 11.43,
//                 "temp_min": 12.1,
//                 "temp_max": 13.11,
//                 "pressure": 1012,
//                 "sea_level": 1012,
//                 "grnd_level": 1006,
//                 "humidity": 79,
//                 "temp_kf": -1.01
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "légère pluie",
//                     "icon": "10n"
//                 }
//             ],
//             "clouds": {
//                 "all": 60
//             },
//             "wind": {
//                 "speed": 14.79,
//                 "deg": 234,
//                 "gust": 19.95
//             },
//             "visibility": 10000,
//             "pop": 1,
//             "rain": {
//                 "3h": 2.15
//             },
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2022-11-01 21:00:00"
//         },
//         {
//             "dt": 1667347200,
//             "main": {
//                 "temp": 12.43,
//                 "feels_like": 11.74,
//                 "temp_min": 12.43,
//                 "temp_max": 12.85,
//                 "pressure": 1013,
//                 "sea_level": 1013,
//                 "grnd_level": 1007,
//                 "humidity": 77,
//                 "temp_kf": -0.42
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "légère pluie",
//                     "icon": "10n"
//                 }
//             ],
//             "clouds": {
//                 "all": 41
//             },
//             "wind": {
//                 "speed": 15.16,
//                 "deg": 239,
//                 "gust": 19.83
//             },
//             "visibility": 10000,
//             "pop": 0.93,
//             "rain": {
//                 "3h": 1.04
//             },
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2022-11-02 00:00:00"
//         },
//         {
//             "dt": 1667358000,
//             "main": {
//                 "temp": 13.12,
//                 "feels_like": 12.21,
//                 "temp_min": 13.12,
//                 "temp_max": 13.12,
//                 "pressure": 1016,
//                 "sea_level": 1016,
//                 "grnd_level": 1008,
//                 "humidity": 66,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "légère pluie",
//                     "icon": "10n"
//                 }
//             ],
//             "clouds": {
//                 "all": 99
//             },
//             "wind": {
//                 "speed": 12.87,
//                 "deg": 267,
//                 "gust": 16.13
//             },
//             "visibility": 10000,
//             "pop": 0.7,
//             "rain": {
//                 "3h": 1.02
//             },
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2022-11-02 03:00:00"
//         },
//         {
//             "dt": 1667368800,
//             "main": {
//                 "temp": 12.67,
//                 "feels_like": 11.72,
//                 "temp_min": 12.67,
//                 "temp_max": 12.67,
//                 "pressure": 1018,
//                 "sea_level": 1018,
//                 "grnd_level": 1011,
//                 "humidity": 66,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "légère pluie",
//                     "icon": "10n"
//                 }
//             ],
//             "clouds": {
//                 "all": 54
//             },
//             "wind": {
//                 "speed": 9.18,
//                 "deg": 266,
//                 "gust": 12.78
//             },
//             "visibility": 10000,
//             "pop": 0.53,
//             "rain": {
//                 "3h": 0.26
//             },
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2022-11-02 06:00:00"
//         },
//         {
//             "dt": 1667379600,
//             "main": {
//                 "temp": 13.72,
//                 "feels_like": 12.87,
//                 "temp_min": 13.72,
//                 "temp_max": 13.72,
//                 "pressure": 1020,
//                 "sea_level": 1020,
//                 "grnd_level": 1012,
//                 "humidity": 66,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "légère pluie",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": {
//                 "all": 7
//             },
//             "wind": {
//                 "speed": 8.18,
//                 "deg": 240,
//                 "gust": 10.55
//             },
//             "visibility": 10000,
//             "pop": 0.37,
//             "rain": {
//                 "3h": 0.34
//             },
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2022-11-02 09:00:00"
//         },
//         {
//             "dt": 1667390400,
//             "main": {
//                 "temp": 13.34,
//                 "feels_like": 12.77,
//                 "temp_min": 13.34,
//                 "temp_max": 13.34,
//                 "pressure": 1019,
//                 "sea_level": 1019,
//                 "grnd_level": 1011,
//                 "humidity": 78,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "légère pluie",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": {
//                 "all": 38
//             },
//             "wind": {
//                 "speed": 10.51,
//                 "deg": 205,
//                 "gust": 11.94
//             },
//             "visibility": 10000,
//             "pop": 0.22,
//             "rain": {
//                 "3h": 0.28
//             },
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2022-11-02 12:00:00"
//         },
//         {
//             "dt": 1667401200,
//             "main": {
//                 "temp": 13.47,
//                 "feels_like": 12.65,
//                 "temp_min": 13.47,
//                 "temp_max": 13.47,
//                 "pressure": 1017,
//                 "sea_level": 1017,
//                 "grnd_level": 1009,
//                 "humidity": 68,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 804,
//                     "main": "Clouds",
//                     "description": "couvert",
//                     "icon": "04d"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 10.7,
//                 "deg": 206,
//                 "gust": 14.07
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2022-11-02 15:00:00"
//         },
//         {
//             "dt": 1667412000,
//             "main": {
//                 "temp": 13.58,
//                 "feels_like": 12.85,
//                 "temp_min": 13.58,
//                 "temp_max": 13.58,
//                 "pressure": 1015,
//                 "sea_level": 1015,
//                 "grnd_level": 1007,
//                 "humidity": 71,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 804,
//                     "main": "Clouds",
//                     "description": "couvert",
//                     "icon": "04n"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 11.38,
//                 "deg": 192,
//                 "gust": 16.85
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2022-11-02 18:00:00"
//         },
//         {
//             "dt": 1667422800,
//             "main": {
//                 "temp": 14.25,
//                 "feels_like": 13.69,
//                 "temp_min": 14.25,
//                 "temp_max": 14.25,
//                 "pressure": 1012,
//                 "sea_level": 1012,
//                 "grnd_level": 1004,
//                 "humidity": 75,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "légère pluie",
//                     "icon": "10n"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 13.23,
//                 "deg": 202,
//                 "gust": 18.06
//             },
//             "visibility": 10000,
//             "pop": 0.24,
//             "rain": {
//                 "3h": 0.1
//             },
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2022-11-02 21:00:00"
//         },
//         {
//             "dt": 1667433600,
//             "main": {
//                 "temp": 14.03,
//                 "feels_like": 13.6,
//                 "temp_min": 14.03,
//                 "temp_max": 14.03,
//                 "pressure": 1011,
//                 "sea_level": 1011,
//                 "grnd_level": 1003,
//                 "humidity": 81,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "légère pluie",
//                     "icon": "10n"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 13.49,
//                 "deg": 214,
//                 "gust": 18.91
//             },
//             "visibility": 10000,
//             "pop": 0.4,
//             "rain": {
//                 "3h": 0.26
//             },
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2022-11-03 00:00:00"
//         },
//         {
//             "dt": 1667444400,
//             "main": {
//                 "temp": 13.98,
//                 "feels_like": 13.63,
//                 "temp_min": 13.98,
//                 "temp_max": 13.98,
//                 "pressure": 1009,
//                 "sea_level": 1009,
//                 "grnd_level": 1002,
//                 "humidity": 84,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "légère pluie",
//                     "icon": "10n"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 12.51,
//                 "deg": 215,
//                 "gust": 16.85
//             },
//             "visibility": 10000,
//             "pop": 0.8,
//             "rain": {
//                 "3h": 1.95
//             },
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2022-11-03 03:00:00"
//         },
//         {
//             "dt": 1667455200,
//             "main": {
//                 "temp": 12.78,
//                 "feels_like": 12.33,
//                 "temp_min": 12.78,
//                 "temp_max": 12.78,
//                 "pressure": 1009,
//                 "sea_level": 1009,
//                 "grnd_level": 1001,
//                 "humidity": 85,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 501,
//                     "main": "Rain",
//                     "description": "pluie modérée",
//                     "icon": "10n"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 7.66,
//                 "deg": 213,
//                 "gust": 10.48
//             },
//             "visibility": 10000,
//             "pop": 1,
//             "rain": {
//                 "3h": 6.63
//             },
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2022-11-03 06:00:00"
//         },
//         {
//             "dt": 1667466000,
//             "main": {
//                 "temp": 12.36,
//                 "feels_like": 11.87,
//                 "temp_min": 12.36,
//                 "temp_max": 12.36,
//                 "pressure": 1008,
//                 "sea_level": 1008,
//                 "grnd_level": 1000,
//                 "humidity": 85,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 501,
//                     "main": "Rain",
//                     "description": "pluie modérée",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 7.92,
//                 "deg": 229,
//                 "gust": 9.55
//             },
//             "visibility": 6070,
//             "pop": 0.9,
//             "rain": {
//                 "3h": 3.12
//             },
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2022-11-03 09:00:00"
//         },
//         {
//             "dt": 1667476800,
//             "main": {
//                 "temp": 10.93,
//                 "feels_like": 10.48,
//                 "temp_min": 10.93,
//                 "temp_max": 10.93,
//                 "pressure": 1005,
//                 "sea_level": 1005,
//                 "grnd_level": 997,
//                 "humidity": 92,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 501,
//                     "main": "Rain",
//                     "description": "pluie modérée",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 0.78,
//                 "deg": 172,
//                 "gust": 1.13
//             },
//             "visibility": 5903,
//             "pop": 1,
//             "rain": {
//                 "3h": 6.65
//             },
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2022-11-03 12:00:00"
//         },
//         {
//             "dt": 1667487600,
//             "main": {
//                 "temp": 11.13,
//                 "feels_like": 10.62,
//                 "temp_min": 11.13,
//                 "temp_max": 11.13,
//                 "pressure": 1002,
//                 "sea_level": 1002,
//                 "grnd_level": 994,
//                 "humidity": 89,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 501,
//                     "main": "Rain",
//                     "description": "pluie modérée",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 5.4,
//                 "deg": 297,
//                 "gust": 6.56
//             },
//             "visibility": 10000,
//             "pop": 1,
//             "rain": {
//                 "3h": 7.66
//             },
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2022-11-03 15:00:00"
//         },
//         {
//             "dt": 1667498400,
//             "main": {
//                 "temp": 10.51,
//                 "feels_like": 9.73,
//                 "temp_min": 10.51,
//                 "temp_max": 10.51,
//                 "pressure": 1003,
//                 "sea_level": 1003,
//                 "grnd_level": 995,
//                 "humidity": 81,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "légère pluie",
//                     "icon": "10n"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 3.34,
//                 "deg": 319,
//                 "gust": 4.7
//             },
//             "visibility": 10000,
//             "pop": 1,
//             "rain": {
//                 "3h": 1.87
//             },
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2022-11-03 18:00:00"
//         },
//         {
//             "dt": 1667509200,
//             "main": {
//                 "temp": 10.36,
//                 "feels_like": 9.49,
//                 "temp_min": 10.36,
//                 "temp_max": 10.36,
//                 "pressure": 1003,
//                 "sea_level": 1003,
//                 "grnd_level": 995,
//                 "humidity": 78,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "légère pluie",
//                     "icon": "10n"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 2.13,
//                 "deg": 219,
//                 "gust": 2.72
//             },
//             "visibility": 10000,
//             "pop": 0.47,
//             "rain": {
//                 "3h": 0.22
//             },
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2022-11-03 21:00:00"
//         },
//         {
//             "dt": 1667520000,
//             "main": {
//                 "temp": 11.12,
//                 "feels_like": 10.3,
//                 "temp_min": 11.12,
//                 "temp_max": 11.12,
//                 "pressure": 1002,
//                 "sea_level": 1002,
//                 "grnd_level": 994,
//                 "humidity": 77,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "légère pluie",
//                     "icon": "10n"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 5.88,
//                 "deg": 245,
//                 "gust": 7.47
//             },
//             "visibility": 8579,
//             "pop": 0.83,
//             "rain": {
//                 "3h": 2.6
//             },
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2022-11-04 00:00:00"
//         },
//         {
//             "dt": 1667530800,
//             "main": {
//                 "temp": 10.71,
//                 "feels_like": 9.87,
//                 "temp_min": 10.71,
//                 "temp_max": 10.71,
//                 "pressure": 1000,
//                 "sea_level": 1000,
//                 "grnd_level": 993,
//                 "humidity": 78,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "légère pluie",
//                     "icon": "10n"
//                 }
//             ],
//             "clouds": {
//                 "all": 51
//             },
//             "wind": {
//                 "speed": 4.04,
//                 "deg": 226,
//                 "gust": 6.03
//             },
//             "visibility": 8577,
//             "pop": 0.94,
//             "rain": {
//                 "3h": 2.31
//             },
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2022-11-04 03:00:00"
//         },
//         {
//             "dt": 1667541600,
//             "main": {
//                 "temp": 10.07,
//                 "feels_like": 9.33,
//                 "temp_min": 10.07,
//                 "temp_max": 10.07,
//                 "pressure": 1001,
//                 "sea_level": 1001,
//                 "grnd_level": 994,
//                 "humidity": 84,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 501,
//                     "main": "Rain",
//                     "description": "pluie modérée",
//                     "icon": "10n"
//                 }
//             ],
//             "clouds": {
//                 "all": 67
//             },
//             "wind": {
//                 "speed": 4.99,
//                 "deg": 325,
//                 "gust": 5.62
//             },
//             "visibility": 7815,
//             "pop": 0.94,
//             "rain": {
//                 "3h": 4.21
//             },
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2022-11-04 06:00:00"
//         },
//         {
//             "dt": 1667552400,
//             "main": {
//                 "temp": 11.47,
//                 "feels_like": 10.68,
//                 "temp_min": 11.47,
//                 "temp_max": 11.47,
//                 "pressure": 1004,
//                 "sea_level": 1004,
//                 "grnd_level": 997,
//                 "humidity": 77,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "légère pluie",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 7.47,
//                 "deg": 346,
//                 "gust": 9.11
//             },
//             "visibility": 10000,
//             "pop": 0.86,
//             "rain": {
//                 "3h": 2.03
//             },
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2022-11-04 09:00:00"
//         },
//         {
//             "dt": 1667563200,
//             "main": {
//                 "temp": 12.05,
//                 "feels_like": 11.27,
//                 "temp_min": 12.05,
//                 "temp_max": 12.05,
//                 "pressure": 1008,
//                 "sea_level": 1008,
//                 "grnd_level": 1000,
//                 "humidity": 75,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "légère pluie",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": {
//                 "all": 76
//             },
//             "wind": {
//                 "speed": 8.47,
//                 "deg": 343,
//                 "gust": 9.21
//             },
//             "visibility": 10000,
//             "pop": 0.85,
//             "rain": {
//                 "3h": 0.68
//             },
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2022-11-04 12:00:00"
//         },
//         {
//             "dt": 1667574000,
//             "main": {
//                 "temp": 11.89,
//                 "feels_like": 11.01,
//                 "temp_min": 11.89,
//                 "temp_max": 11.89,
//                 "pressure": 1011,
//                 "sea_level": 1011,
//                 "grnd_level": 1004,
//                 "humidity": 72,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "légère pluie",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": {
//                 "all": 45
//             },
//             "wind": {
//                 "speed": 6.86,
//                 "deg": 347,
//                 "gust": 8.27
//             },
//             "visibility": 10000,
//             "pop": 0.21,
//             "rain": {
//                 "3h": 0.11
//             },
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2022-11-04 15:00:00"
//         },
//         {
//             "dt": 1667584800,
//             "main": {
//                 "temp": 11.36,
//                 "feels_like": 10.46,
//                 "temp_min": 11.36,
//                 "temp_max": 11.36,
//                 "pressure": 1014,
//                 "sea_level": 1014,
//                 "grnd_level": 1006,
//                 "humidity": 73,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 803,
//                     "main": "Clouds",
//                     "description": "nuageux",
//                     "icon": "04n"
//                 }
//             ],
//             "clouds": {
//                 "all": 56
//             },
//             "wind": {
//                 "speed": 4.87,
//                 "deg": 325,
//                 "gust": 6.15
//             },
//             "visibility": 10000,
//             "pop": 0.07,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2022-11-04 18:00:00"
//         },
//         {
//             "dt": 1667595600,
//             "main": {
//                 "temp": 10.11,
//                 "feels_like": 9.11,
//                 "temp_min": 10.11,
//                 "temp_max": 10.11,
//                 "pressure": 1016,
//                 "sea_level": 1016,
//                 "grnd_level": 1008,
//                 "humidity": 74,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 801,
//                     "main": "Clouds",
//                     "description": "peu nuageux",
//                     "icon": "02n"
//                 }
//             ],
//             "clouds": {
//                 "all": 18
//             },
//             "wind": {
//                 "speed": 3.88,
//                 "deg": 306,
//                 "gust": 4.41
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2022-11-04 21:00:00"
//         },
//         {
//             "dt": 1667606400,
//             "main": {
//                 "temp": 9.63,
//                 "feels_like": 8.38,
//                 "temp_min": 9.63,
//                 "temp_max": 9.63,
//                 "pressure": 1016,
//                 "sea_level": 1016,
//                 "grnd_level": 1009,
//                 "humidity": 75,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 802,
//                     "main": "Clouds",
//                     "description": "partiellement nuageux",
//                     "icon": "03n"
//                 }
//             ],
//             "clouds": {
//                 "all": 47
//             },
//             "wind": {
//                 "speed": 2.5,
//                 "deg": 276,
//                 "gust": 2.76
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2022-11-05 00:00:00"
//         },
//         {
//             "dt": 1667617200,
//             "main": {
//                 "temp": 9.85,
//                 "feels_like": 8.14,
//                 "temp_min": 9.85,
//                 "temp_max": 9.85,
//                 "pressure": 1017,
//                 "sea_level": 1017,
//                 "grnd_level": 1009,
//                 "humidity": 75,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 802,
//                     "main": "Clouds",
//                     "description": "partiellement nuageux",
//                     "icon": "03n"
//                 }
//             ],
//             "clouds": {
//                 "all": 30
//             },
//             "wind": {
//                 "speed": 3.35,
//                 "deg": 226,
//                 "gust": 4.03
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2022-11-05 03:00:00"
//         },
//         {
//             "dt": 1667628000,
//             "main": {
//                 "temp": 10.39,
//                 "feels_like": 9.47,
//                 "temp_min": 10.39,
//                 "temp_max": 10.39,
//                 "pressure": 1017,
//                 "sea_level": 1017,
//                 "grnd_level": 1009,
//                 "humidity": 76,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 802,
//                     "main": "Clouds",
//                     "description": "partiellement nuageux",
//                     "icon": "03n"
//                 }
//             ],
//             "clouds": {
//                 "all": 47
//             },
//             "wind": {
//                 "speed": 4.9,
//                 "deg": 205,
//                 "gust": 6.01
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2022-11-05 06:00:00"
//         },
//         {
//             "dt": 1667638800,
//             "main": {
//                 "temp": 11.85,
//                 "feels_like": 11.23,
//                 "temp_min": 11.85,
//                 "temp_max": 11.85,
//                 "pressure": 1017,
//                 "sea_level": 1017,
//                 "grnd_level": 1009,
//                 "humidity": 82,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "légère pluie",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 8.61,
//                 "deg": 204,
//                 "gust": 10.73
//             },
//             "visibility": 10000,
//             "pop": 0.34,
//             "rain": {
//                 "3h": 0.26
//             },
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2022-11-05 09:00:00"
//         },
//         {
//             "dt": 1667649600,
//             "main": {
//                 "temp": 11.66,
//                 "feels_like": 10.97,
//                 "temp_min": 11.66,
//                 "temp_max": 11.66,
//                 "pressure": 1016,
//                 "sea_level": 1016,
//                 "grnd_level": 1008,
//                 "humidity": 80,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 804,
//                     "main": "Clouds",
//                     "description": "couvert",
//                     "icon": "04d"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 9.17,
//                 "deg": 199,
//                 "gust": 11.82
//             },
//             "visibility": 10000,
//             "pop": 0.11,
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2022-11-05 12:00:00"
//         },
//         {
//             "dt": 1667660400,
//             "main": {
//                 "temp": 11.41,
//                 "feels_like": 10.7,
//                 "temp_min": 11.41,
//                 "temp_max": 11.41,
//                 "pressure": 1015,
//                 "sea_level": 1015,
//                 "grnd_level": 1007,
//                 "humidity": 80,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "légère pluie",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 9.9,
//                 "deg": 191,
//                 "gust": 13.55
//             },
//             "visibility": 10000,
//             "pop": 0.56,
//             "rain": {
//                 "3h": 0.33
//             },
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2022-11-05 15:00:00"
//         },
//         {
//             "dt": 1667671200,
//             "main": {
//                 "temp": 11.23,
//                 "feels_like": 10.78,
//                 "temp_min": 11.23,
//                 "temp_max": 11.23,
//                 "pressure": 1015,
//                 "sea_level": 1015,
//                 "grnd_level": 1007,
//                 "humidity": 91,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "légère pluie",
//                     "icon": "10n"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 9.84,
//                 "deg": 195,
//                 "gust": 13.24
//             },
//             "visibility": 10000,
//             "pop": 0.93,
//             "rain": {
//                 "3h": 1.42
//             },
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2022-11-05 18:00:00"
//         },
//         {
//             "dt": 1667682000,
//             "main": {
//                 "temp": 12.11,
//                 "feels_like": 11.83,
//                 "temp_min": 12.11,
//                 "temp_max": 12.11,
//                 "pressure": 1014,
//                 "sea_level": 1014,
//                 "grnd_level": 1006,
//                 "humidity": 94,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "légère pluie",
//                     "icon": "10n"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 9.11,
//                 "deg": 200,
//                 "gust": 12.74
//             },
//             "visibility": 10000,
//             "pop": 0.83,
//             "rain": {
//                 "3h": 0.61
//             },
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2022-11-05 21:00:00"
//         },
//         {
//             "dt": 1667692800,
//             "main": {
//                 "temp": 12.34,
//                 "feels_like": 12.11,
//                 "temp_min": 12.34,
//                 "temp_max": 12.34,
//                 "pressure": 1012,
//                 "sea_level": 1012,
//                 "grnd_level": 1004,
//                 "humidity": 95,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "légère pluie",
//                     "icon": "10n"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 9.29,
//                 "deg": 191,
//                 "gust": 12.8
//             },
//             "visibility": 10000,
//             "pop": 0.81,
//             "rain": {
//                 "3h": 0.71
//             },
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2022-11-06 00:00:00"
//         },
//         {
//             "dt": 1667703600,
//             "main": {
//                 "temp": 12.32,
//                 "feels_like": 12.09,
//                 "temp_min": 12.32,
//                 "temp_max": 12.32,
//                 "pressure": 1010,
//                 "sea_level": 1010,
//                 "grnd_level": 1002,
//                 "humidity": 95,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 501,
//                     "main": "Rain",
//                     "description": "pluie modérée",
//                     "icon": "10n"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 10.84,
//                 "deg": 185,
//                 "gust": 16.01
//             },
//             "visibility": 6598,
//             "pop": 1,
//             "rain": {
//                 "3h": 4.59
//             },
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2022-11-06 03:00:00"
//         },
//         {
//             "dt": 1667714400,
//             "main": {
//                 "temp": 13.26,
//                 "feels_like": 13.07,
//                 "temp_min": 13.26,
//                 "temp_max": 13.26,
//                 "pressure": 1008,
//                 "sea_level": 1008,
//                 "grnd_level": 1000,
//                 "humidity": 93,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 501,
//                     "main": "Rain",
//                     "description": "pluie modérée",
//                     "icon": "10n"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 12.72,
//                 "deg": 204,
//                 "gust": 18.09
//             },
//             "visibility": 10000,
//             "pop": 1,
//             "rain": {
//                 "3h": 7.4
//             },
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2022-11-06 06:00:00"
//         },
//         {
//             "dt": 1667725200,
//             "main": {
//                 "temp": 14.59,
//                 "feels_like": 14.48,
//                 "temp_min": 14.59,
//                 "temp_max": 14.59,
//                 "pressure": 1008,
//                 "sea_level": 1008,
//                 "grnd_level": 1001,
//                 "humidity": 91,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "légère pluie",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 13.05,
//                 "deg": 221,
//                 "gust": 18.7
//             },
//             "visibility": 10000,
//             "pop": 0.6,
//             "rain": {
//                 "3h": 0.62
//             },
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2022-11-06 09:00:00"
//         },
//         {
//             "dt": 1667736000,
//             "main": {
//                 "temp": 15.07,
//                 "feels_like": 14.75,
//                 "temp_min": 15.07,
//                 "temp_max": 15.07,
//                 "pressure": 1010,
//                 "sea_level": 1010,
//                 "grnd_level": 1002,
//                 "humidity": 81,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "légère pluie",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": {
//                 "all": 66
//             },
//             "wind": {
//                 "speed": 11.46,
//                 "deg": 237,
//                 "gust": 15.64
//             },
//             "visibility": 10000,
//             "pop": 0.88,
//             "rain": {
//                 "3h": 0.7
//             },
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2022-11-06 12:00:00"
//         },
//         {
//             "dt": 1667746800,
//             "main": {
//                 "temp": 14.49,
//                 "feels_like": 14.03,
//                 "temp_min": 14.49,
//                 "temp_max": 14.49,
//                 "pressure": 1011,
//                 "sea_level": 1011,
//                 "grnd_level": 1003,
//                 "humidity": 78,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "légère pluie",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": {
//                 "all": 2
//             },
//             "wind": {
//                 "speed": 9.79,
//                 "deg": 240,
//                 "gust": 13.85
//             },
//             "visibility": 10000,
//             "pop": 0.2,
//             "rain": {
//                 "3h": 0.17
//             },
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2022-11-06 15:00:00"
//         }
//     ],
//     "city": {
//         "id": 2978439,
//         "name": "Saint-Martin-Boulogne",
//         "coord": {
//             "lat": 50.7356,
//             "lon": 1.6041
//         },
//         "country": "FR",
//         "population": 12414,
//         "timezone": 3600,
//         "sunrise": 1667285081,
//         "sunset": 1667320171
//     }
// }

            setMainWeather({
                dt: res.list[0].dt,
                temp: res.list[0].main.temp,
                temp_min: res.list[0].main.temp_min,
                temp_max: res.list[0].main.temp_max,
                humidity: res.list[0].main.humidity,
                description: res.list[0].weather[0].description,
                icon: res.list[0].weather[0].icon,
                wind: res.list[0].wind.speed,
                // rain: res.list[0].rain ? res.list[0].rain['3h'] * 100 + " %" : "0 %",
                rain: res.list[0].pop * 100 + " %",
            });
            setWeatherData(res);
            setCityName(res.city.name)

            const formatedWithDaysWeatherData = res.list.map((element) => {
                return {
                    ...element,
                    day: dayjs.unix(element.dt).locale("fr").format("dddd"),
                };
            });
            let newForecastData = formatedWithDaysWeatherData
                .map((forecast) => {
                    return forecast.day;
                })
                .filter((day, index, self) => {
                    return self.indexOf(day) === index;
                })
                .map((day) => {
                    return {
                        day,
                        data: formatedWithDaysWeatherData.filter(
                            (forecast) => forecast.day === day
                        ),
                    };
                });
            setFormatedWeatherData(newForecastData);
            setTommorowWeather({
                dt: newForecastData[1].data[4].dt,
                temp: newForecastData[1].data[4].main.temp,
                temp_min: newForecastData[1].data[4].main.temp_min,
                temp_max: newForecastData[1].data[4].main.temp_max,
                humidity: newForecastData[1].data[4].main.humidity,
                description: newForecastData[1].data[4].weather[0].description,
                icon: newForecastData[1].data[4].weather[0].icon,
                wind: newForecastData[1].data[4].wind.speed,
                rain: newForecastData[1].data[4].pop * 100 + " %",
            });
        };
        fetchAndSetData();
    }, [location]);

    // useEffect(() => {
    //     console.log("raw:", weatherData);
    //     console.log("formated:", formatedWeatherData);
    // }, [formatedWeatherData]);

    const mainWeatherChange = (e) => {
        setMainWeather({
            dt: e.dt,
            temp: e.main.temp,
            temp_min: e.main.temp_min,
            temp_max: e.main.temp_max,
            humidity: e.main.humidity,
            description: e.weather[0].description,
            icon: e.weather[0].icon,
            wind: e.wind.speed,
            rain: e.pop * 100 + " %",
        });
    }

    if(!location) return <Text>{text}</Text>

    return (
        <ScrollView style={styleWeather.back}>
            <View style={styleWeather.main}>
                <SelectedWeather isPreview={isPreview} setIsPreview={setIsPreview} mainWeather={mainWeather} tommorowWeather={tommorowWeather} city={cityName}/>

                {!isPreview ? 
                    <WeatherDetails weatherData={mainWeather} />
                :
                    <WeatherDetails weatherData={tommorowWeather} />
                }

            </View>

            {/* {!isPreview ? (
                <View style={styleWeather.container}>
                    <View style={styleWeather.footerHeader}>
                        <Text style={styleWeather.footerHeaderToday}>
                            Aujourd'hui
                        </Text>
                        <Text
                            style={styleWeather.footerHeaderMore}
                            onPress={() => setIsPreview(true)}
                        >
                            Plus{" "}
                            <FontAwesome
                                style={styleWeather.footerHeaderIcon}
                                name="chevron-right"
                            />
                        </Text>
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styleWeather.footer}
                    >
                        {weatherData?.list.map((element, i) => {
                            return (
                                <View
                                    key={i}
                                    style={styleWeather.footerElement}
                                >
                                    <Text
                                        style={styleWeather.footerElementTemp}
                                    >
                                        {`${Math.round(element.main.temp)}°`}
                                    </Text>
                                    <Image
                                        style={styleWeather.footerElementImage}
                                        source={{
                                            uri: `http://openweathermap.org/img/wn/${element.weather[0].icon}@4x.png`,
                                        }}
                                    />
                                    <Text
                                        style={styleWeather.footerElementHour}
                                    >
                                        {dayjs
                                            .unix(element.dt)
                                            .locale("fr")
                                            .format("HH:mm")}
                                    </Text>
                                </View>
                            );
                        })}
                    </ScrollView>
                </View>
            ) : (
                <>
                    <View style={styleWeather.container}>
                        {formatedWeatherData?.map((day, i) => {
                            <Text>{day.day}</Text>;
                        })}
                        <NextDays formatedData={formatedWeatherData} />
                    </View>
                </>
            )} */}

            {/* TRUC QUI BUG PLUS */}
            {!isPreview ? (
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styleWeather.footer}
                >
                    {formatedWeatherData ? (
                        formatedWeatherData.map((day, i) => {
                            return (
                                <View key={i} style={styleWeather.container}>
                                    <View style={styleWeather.footerHeader}>
                                        <Text
                                            style={
                                                styleWeather.footerHeaderDay
                                            }
                                        >
                                            {day.day}
                                        </Text>
                                        <Text
                                            style={
                                                styleWeather.footerHeaderMore
                                            }
                                            onPress={() => setIsPreview(true)}
                                        >
                                            Plus{" "}
                                            <FontAwesome
                                                style={
                                                    styleWeather.footerHeaderIcon
                                                }
                                                name="chevron-right"
                                            />
                                        </Text>
                                    </View>
                                    <View style={styleWeather.footer}>
                                        {day.data?.map((element, i) => {
                                            return (
                                                <Pressable key={i} onPress={()=>mainWeatherChange(element)}>
                                                <View
                                                    
                                                    style={
                                                        styleWeather.footerElement
                                                    }
                                                >
                                                    <Text
                                                        style={
                                                            styleWeather.footerElementTemp
                                                        }
                                                    >
                                                        {`${Math.round(
                                                            element.main.temp
                                                        )}°`}
                                                    </Text>
                                                    <Image
                                                        style={
                                                            styleWeather.footerElementImage
                                                        }
                                                        source={{
                                                            uri: `http://openweathermap.org/img/wn/${element.weather[0].icon}@4x.png`,
                                                        }}
                                                    />
                                                    <Text
                                                        style={
                                                            styleWeather.footerElementHour
                                                        }
                                                    >
                                                        {dayjs
                                                            .unix(element.dt)
                                                            .locale("fr")
                                                            .format("HH:mm")}
                                                    </Text>
                                                </View>
                                                </Pressable>
                                            );
                                        })}
                                    </View>
                                </View>
                            );
                        })
                    ) : (
                        <></>
                    )}
                </ScrollView>
            ) : (
                <>
                                    <View style={styleWeather.container}>
                        {formatedWeatherData?.map((day, i) => {
                            <Text>{day.day}</Text>;
                        })}
                        <NextDays formatedData={formatedWeatherData} />
                    </View>
                </>
            )}
        </ScrollView>
    );
}

const styleWeather = StyleSheet.create({
    back: {
        // flex: 1,
        backgroundColor: "#000A18",
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    main: {
        backgroundColor: "#34c3eb",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        padding: 15,
        margin: 10,
    },
    footerHeader: {
        paddingHorizontal: 40,
        marginTop: 5,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
    },
    footerHeaderDay: {
        color: "#fff",
        fontSize: 14,
        textTransform: "capitalize",
        marginBottom: 15
    },
    footerHeaderMore: {
        color: "#b3dbe6",
        fontSize: 11,
        paddingBottom: 15
    },
    footerHeaderIcon: {
        color: "#b3dbe6",
        fontWeight: "100",
    },
    footer: {
        flexDirection: "row",
        // marginTop: 25,
    },
    footerElement: {
        width: 60,
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "rgba(249, 249, 249, 0.2)",
        borderRadius: 20,
    },
    footerElementTemp: {
        color: "#fff",
    },
    footerElementHour: {
        color: "#fff",
    },
    footerElementImage: {
        height: 50,
        width: 50,
    },
    oldhome: {
        flex: 1,
        backgroundColor: "#ff0000",
        alignItems: "center",
        justifyContent: "center",
    },
});
