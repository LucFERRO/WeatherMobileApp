import React from "react";
import { StatusBar } from "expo-status-bar";
import {StyleSheet,Image,Text,View,ScrollView,TextInput,Button} from "react-native";
import { useState, useEffect } from "react";
import { style } from "../assets/style";
import Navbar from "./Navbar";
import NextDays from "./NextDays";
import WeatherDetails from "./WeatherDetails";
import SelectedWeather from "./SelectedWeather";

import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const dayjs = require("dayjs");
require("dayjs/locale/fr");

export default function Weather({ navigation }) {
    const [isPreview, setIsPreview] = useState(false);
    const [weatherData, setWeatherData] = useState();
    const [formatedWeatherData, setFormatedWeatherData] = useState();
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

    const canardWeatherKey = "e0ea92189583962f90bed534c425b775";

    const lat = 50.735643250210515;
    const lon = 1.604070777045237;

    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${canardWeatherKey}&lang=fr`;

    useEffect(() => {
        const fetchAndSetData = async () => {

            // Vrai fetch sur l'api
            // const apiData =  await fetch(urlForecast)
            // const res = await apiData.json()

            // Fake data de clodo
            const res = {
                cod: "200",
                message: 0,
                cnt: 40,
                list: [
                    {
                        dt: 1666969200,
                        main: {
                            temp: 17.6,
                            feels_like: 17.61,
                            temp_min: 16.4,
                            temp_max: 17.6,
                            pressure: 1019,
                            sea_level: 1019,
                            grnd_level: 1011,
                            humidity: 84,
                            temp_kf: 1.2,
                        },
                        weather: [
                            {
                                id: 804,
                                main: "Clouds",
                                description: "couvert",
                                icon: "04d",
                            },
                        ],
                        clouds: {
                            all: 100,
                        },
                        wind: {
                            speed: 6.77,
                            deg: 245,
                            gust: 10.84,
                        },
                        visibility: 10000,
                        pop: 0,
                        sys: {
                            pod: "d",
                        },
                        dt_txt: "2022-10-28 15:00:00",
                    },
                    {
                        dt: 1666980000,
                        main: {
                            temp: 16.8,
                            feels_like: 16.75,
                            temp_min: 15.2,
                            temp_max: 16.8,
                            pressure: 1019,
                            sea_level: 1019,
                            grnd_level: 1012,
                            humidity: 85,
                            temp_kf: 1.6,
                        },
                        weather: [
                            {
                                id: 804,
                                main: "Clouds",
                                description: "couvert",
                                icon: "04n",
                            },
                        ],
                        clouds: {
                            all: 100,
                        },
                        wind: {
                            speed: 3.9,
                            deg: 241,
                            gust: 5.37,
                        },
                        visibility: 10000,
                        pop: 0,
                        sys: {
                            pod: "n",
                        },
                        dt_txt: "2022-10-28 18:00:00",
                    },
                    {
                        dt: 1666990800,
                        main: {
                            temp: 15.54,
                            feels_like: 15.34,
                            temp_min: 14.51,
                            temp_max: 15.54,
                            pressure: 1020,
                            sea_level: 1020,
                            grnd_level: 1013,
                            humidity: 84,
                            temp_kf: 1.03,
                        },
                        weather: [
                            {
                                id: 804,
                                main: "Clouds",
                                description: "couvert",
                                icon: "04n",
                            },
                        ],
                        clouds: {
                            all: 100,
                        },
                        wind: {
                            speed: 1.59,
                            deg: 167,
                            gust: 1.94,
                        },
                        visibility: 10000,
                        pop: 0,
                        sys: {
                            pod: "n",
                        },
                        dt_txt: "2022-10-28 21:00:00",
                    },
                    {
                        dt: 1667001600,
                        main: {
                            temp: 14.2,
                            feels_like: 13.95,
                            temp_min: 14.2,
                            temp_max: 14.2,
                            pressure: 1020,
                            sea_level: 1020,
                            grnd_level: 1012,
                            humidity: 87,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 804,
                                main: "Clouds",
                                description: "couvert",
                                icon: "04n",
                            },
                        ],
                        clouds: {
                            all: 100,
                        },
                        wind: {
                            speed: 2.46,
                            deg: 127,
                            gust: 2.79,
                        },
                        visibility: 10000,
                        pop: 0,
                        sys: {
                            pod: "n",
                        },
                        dt_txt: "2022-10-29 00:00:00",
                    },
                    {
                        dt: 1667012400,
                        main: {
                            temp: 14.89,
                            feels_like: 14.76,
                            temp_min: 14.89,
                            temp_max: 14.89,
                            pressure: 1017,
                            sea_level: 1017,
                            grnd_level: 1010,
                            humidity: 89,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 804,
                                main: "Clouds",
                                description: "couvert",
                                icon: "04n",
                            },
                        ],
                        clouds: {
                            all: 97,
                        },
                        wind: {
                            speed: 3.6,
                            deg: 132,
                            gust: 8.03,
                        },
                        visibility: 10000,
                        pop: 0.02,
                        sys: {
                            pod: "n",
                        },
                        dt_txt: "2022-10-29 03:00:00",
                    },
                    {
                        dt: 1667023200,
                        main: {
                            temp: 16.07,
                            feels_like: 15.93,
                            temp_min: 16.07,
                            temp_max: 16.07,
                            pressure: 1016,
                            sea_level: 1016,
                            grnd_level: 1008,
                            humidity: 84,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 804,
                                main: "Clouds",
                                description: "couvert",
                                icon: "04n",
                            },
                        ],
                        clouds: {
                            all: 98,
                        },
                        wind: {
                            speed: 5.11,
                            deg: 141,
                            gust: 11.16,
                        },
                        visibility: 10000,
                        pop: 0,
                        sys: {
                            pod: "n",
                        },
                        dt_txt: "2022-10-29 06:00:00",
                    },
                    {
                        dt: 1667034000,
                        main: {
                            temp: 18.17,
                            feels_like: 17.9,
                            temp_min: 18.17,
                            temp_max: 18.17,
                            pressure: 1015,
                            sea_level: 1015,
                            grnd_level: 1008,
                            humidity: 71,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 804,
                                main: "Clouds",
                                description: "couvert",
                                icon: "04d",
                            },
                        ],
                        clouds: {
                            all: 99,
                        },
                        wind: {
                            speed: 6,
                            deg: 164,
                            gust: 12.01,
                        },
                        visibility: 10000,
                        pop: 0,
                        sys: {
                            pod: "d",
                        },
                        dt_txt: "2022-10-29 09:00:00",
                    },
                    {
                        dt: 1667044800,
                        main: {
                            temp: 20.68,
                            feels_like: 20.4,
                            temp_min: 20.68,
                            temp_max: 20.68,
                            pressure: 1014,
                            sea_level: 1014,
                            grnd_level: 1006,
                            humidity: 61,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 804,
                                main: "Clouds",
                                description: "couvert",
                                icon: "04d",
                            },
                        ],
                        clouds: {
                            all: 99,
                        },
                        wind: {
                            speed: 6.97,
                            deg: 159,
                            gust: 12,
                        },
                        visibility: 10000,
                        pop: 0,
                        sys: {
                            pod: "d",
                        },
                        dt_txt: "2022-10-29 12:00:00",
                    },
                    {
                        dt: 1667055600,
                        main: {
                            temp: 20.12,
                            feels_like: 19.91,
                            temp_min: 20.12,
                            temp_max: 20.12,
                            pressure: 1013,
                            sea_level: 1013,
                            grnd_level: 1005,
                            humidity: 66,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 804,
                                main: "Clouds",
                                description: "couvert",
                                icon: "04d",
                            },
                        ],
                        clouds: {
                            all: 90,
                        },
                        wind: {
                            speed: 4.68,
                            deg: 173,
                            gust: 8.25,
                        },
                        visibility: 10000,
                        pop: 0,
                        sys: {
                            pod: "d",
                        },
                        dt_txt: "2022-10-29 15:00:00",
                    },
                    {
                        dt: 1667066400,
                        main: {
                            temp: 17.89,
                            feels_like: 17.54,
                            temp_min: 17.89,
                            temp_max: 17.89,
                            pressure: 1014,
                            sea_level: 1014,
                            grnd_level: 1006,
                            humidity: 69,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 803,
                                main: "Clouds",
                                description: "nuageux",
                                icon: "04n",
                            },
                        ],
                        clouds: {
                            all: 84,
                        },
                        wind: {
                            speed: 5.18,
                            deg: 172,
                            gust: 9.6,
                        },
                        visibility: 10000,
                        pop: 0,
                        sys: {
                            pod: "n",
                        },
                        dt_txt: "2022-10-29 18:00:00",
                    },
                    {
                        dt: 1667077200,
                        main: {
                            temp: 16.79,
                            feels_like: 16.48,
                            temp_min: 16.79,
                            temp_max: 16.79,
                            pressure: 1015,
                            sea_level: 1015,
                            grnd_level: 1007,
                            humidity: 75,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 803,
                                main: "Clouds",
                                description: "nuageux",
                                icon: "04n",
                            },
                        ],
                        clouds: {
                            all: 62,
                        },
                        wind: {
                            speed: 5.09,
                            deg: 196,
                            gust: 7.84,
                        },
                        visibility: 10000,
                        pop: 0,
                        sys: {
                            pod: "n",
                        },
                        dt_txt: "2022-10-29 21:00:00",
                    },
                    {
                        dt: 1667088000,
                        main: {
                            temp: 16.29,
                            feels_like: 16.3,
                            temp_min: 16.29,
                            temp_max: 16.29,
                            pressure: 1016,
                            sea_level: 1016,
                            grnd_level: 1008,
                            humidity: 89,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 803,
                                main: "Clouds",
                                description: "nuageux",
                                icon: "04n",
                            },
                        ],
                        clouds: {
                            all: 80,
                        },
                        wind: {
                            speed: 4.64,
                            deg: 208,
                            gust: 9.32,
                        },
                        visibility: 10000,
                        pop: 0,
                        sys: {
                            pod: "n",
                        },
                        dt_txt: "2022-10-30 00:00:00",
                    },
                    {
                        dt: 1667098800,
                        main: {
                            temp: 15.52,
                            feels_like: 15.48,
                            temp_min: 15.52,
                            temp_max: 15.52,
                            pressure: 1016,
                            sea_level: 1016,
                            grnd_level: 1008,
                            humidity: 90,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 804,
                                main: "Clouds",
                                description: "couvert",
                                icon: "04n",
                            },
                        ],
                        clouds: {
                            all: 97,
                        },
                        wind: {
                            speed: 4.19,
                            deg: 209,
                            gust: 7.79,
                        },
                        visibility: 10000,
                        pop: 0,
                        sys: {
                            pod: "n",
                        },
                        dt_txt: "2022-10-30 03:00:00",
                    },
                    {
                        dt: 1667109600,
                        main: {
                            temp: 15.09,
                            feels_like: 14.87,
                            temp_min: 15.09,
                            temp_max: 15.09,
                            pressure: 1016,
                            sea_level: 1016,
                            grnd_level: 1008,
                            humidity: 85,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 804,
                                main: "Clouds",
                                description: "couvert",
                                icon: "04n",
                            },
                        ],
                        clouds: {
                            all: 98,
                        },
                        wind: {
                            speed: 4.31,
                            deg: 214,
                            gust: 7.72,
                        },
                        visibility: 10000,
                        pop: 0,
                        sys: {
                            pod: "n",
                        },
                        dt_txt: "2022-10-30 06:00:00",
                    },
                    {
                        dt: 1667120400,
                        main: {
                            temp: 15.87,
                            feels_like: 15.55,
                            temp_min: 15.87,
                            temp_max: 15.87,
                            pressure: 1016,
                            sea_level: 1016,
                            grnd_level: 1008,
                            humidity: 78,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 804,
                                main: "Clouds",
                                description: "couvert",
                                icon: "04d",
                            },
                        ],
                        clouds: {
                            all: 100,
                        },
                        wind: {
                            speed: 4.36,
                            deg: 241,
                            gust: 5.79,
                        },
                        visibility: 10000,
                        pop: 0,
                        sys: {
                            pod: "d",
                        },
                        dt_txt: "2022-10-30 09:00:00",
                    },
                    {
                        dt: 1667131200,
                        main: {
                            temp: 15.66,
                            feels_like: 15.29,
                            temp_min: 15.66,
                            temp_max: 15.66,
                            pressure: 1016,
                            sea_level: 1016,
                            grnd_level: 1009,
                            humidity: 77,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 804,
                                main: "Clouds",
                                description: "couvert",
                                icon: "04d",
                            },
                        ],
                        clouds: {
                            all: 100,
                        },
                        wind: {
                            speed: 4.52,
                            deg: 248,
                            gust: 5.27,
                        },
                        visibility: 10000,
                        pop: 0,
                        sys: {
                            pod: "d",
                        },
                        dt_txt: "2022-10-30 12:00:00",
                    },
                    {
                        dt: 1667142000,
                        main: {
                            temp: 14.36,
                            feels_like: 14.12,
                            temp_min: 14.36,
                            temp_max: 14.36,
                            pressure: 1017,
                            sea_level: 1017,
                            grnd_level: 1009,
                            humidity: 87,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 500,
                                main: "Rain",
                                description: "légère pluie",
                                icon: "10d",
                            },
                        ],
                        clouds: {
                            all: 100,
                        },
                        wind: {
                            speed: 4.79,
                            deg: 230,
                            gust: 7.85,
                        },
                        visibility: 10000,
                        pop: 0.47,
                        rain: {
                            "3h": 0.37,
                        },
                        sys: {
                            pod: "d",
                        },
                        dt_txt: "2022-10-30 15:00:00",
                    },
                    {
                        dt: 1667152800,
                        main: {
                            temp: 14.31,
                            feels_like: 13.96,
                            temp_min: 14.31,
                            temp_max: 14.31,
                            pressure: 1018,
                            sea_level: 1018,
                            grnd_level: 1010,
                            humidity: 83,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 804,
                                main: "Clouds",
                                description: "couvert",
                                icon: "04n",
                            },
                        ],
                        clouds: {
                            all: 100,
                        },
                        wind: {
                            speed: 5.39,
                            deg: 223,
                            gust: 7.76,
                        },
                        visibility: 10000,
                        pop: 0.33,
                        sys: {
                            pod: "n",
                        },
                        dt_txt: "2022-10-30 18:00:00",
                    },
                    {
                        dt: 1667163600,
                        main: {
                            temp: 14.21,
                            feels_like: 13.78,
                            temp_min: 14.21,
                            temp_max: 14.21,
                            pressure: 1019,
                            sea_level: 1019,
                            grnd_level: 1011,
                            humidity: 80,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 804,
                                main: "Clouds",
                                description: "couvert",
                                icon: "04n",
                            },
                        ],
                        clouds: {
                            all: 100,
                        },
                        wind: {
                            speed: 5.61,
                            deg: 211,
                            gust: 8.3,
                        },
                        visibility: 10000,
                        pop: 0,
                        sys: {
                            pod: "n",
                        },
                        dt_txt: "2022-10-30 21:00:00",
                    },
                    {
                        dt: 1667174400,
                        main: {
                            temp: 13.47,
                            feels_like: 13.04,
                            temp_min: 13.47,
                            temp_max: 13.47,
                            pressure: 1019,
                            sea_level: 1019,
                            grnd_level: 1011,
                            humidity: 83,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 804,
                                main: "Clouds",
                                description: "couvert",
                                icon: "04n",
                            },
                        ],
                        clouds: {
                            all: 90,
                        },
                        wind: {
                            speed: 5.13,
                            deg: 196,
                            gust: 7.49,
                        },
                        visibility: 10000,
                        pop: 0,
                        sys: {
                            pod: "n",
                        },
                        dt_txt: "2022-10-31 00:00:00",
                    },
                    {
                        dt: 1667185200,
                        main: {
                            temp: 12.47,
                            feels_like: 12.02,
                            temp_min: 12.47,
                            temp_max: 12.47,
                            pressure: 1018,
                            sea_level: 1018,
                            grnd_level: 1011,
                            humidity: 86,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 802,
                                main: "Clouds",
                                description: "partiellement nuageux",
                                icon: "03n",
                            },
                        ],
                        clouds: {
                            all: 46,
                        },
                        wind: {
                            speed: 4.95,
                            deg: 181,
                            gust: 7.08,
                        },
                        visibility: 10000,
                        pop: 0,
                        sys: {
                            pod: "n",
                        },
                        dt_txt: "2022-10-31 03:00:00",
                    },
                    {
                        dt: 1667196000,
                        main: {
                            temp: 11.9,
                            feels_like: 11.39,
                            temp_min: 11.9,
                            temp_max: 11.9,
                            pressure: 1018,
                            sea_level: 1018,
                            grnd_level: 1010,
                            humidity: 86,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 803,
                                main: "Clouds",
                                description: "nuageux",
                                icon: "04n",
                            },
                        ],
                        clouds: {
                            all: 73,
                        },
                        wind: {
                            speed: 5.06,
                            deg: 176,
                            gust: 7.75,
                        },
                        visibility: 10000,
                        pop: 0,
                        sys: {
                            pod: "n",
                        },
                        dt_txt: "2022-10-31 06:00:00",
                    },
                    {
                        dt: 1667206800,
                        main: {
                            temp: 12.99,
                            feels_like: 12.41,
                            temp_min: 12.99,
                            temp_max: 12.99,
                            pressure: 1018,
                            sea_level: 1018,
                            grnd_level: 1010,
                            humidity: 79,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 804,
                                main: "Clouds",
                                description: "couvert",
                                icon: "04d",
                            },
                        ],
                        clouds: {
                            all: 98,
                        },
                        wind: {
                            speed: 5.13,
                            deg: 172,
                            gust: 7.91,
                        },
                        visibility: 10000,
                        pop: 0,
                        sys: {
                            pod: "d",
                        },
                        dt_txt: "2022-10-31 09:00:00",
                    },
                    {
                        dt: 1667217600,
                        main: {
                            temp: 15.27,
                            feels_like: 14.58,
                            temp_min: 15.27,
                            temp_max: 15.27,
                            pressure: 1016,
                            sea_level: 1016,
                            grnd_level: 1009,
                            humidity: 66,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 804,
                                main: "Clouds",
                                description: "couvert",
                                icon: "04d",
                            },
                        ],
                        clouds: {
                            all: 98,
                        },
                        wind: {
                            speed: 4.44,
                            deg: 174,
                            gust: 5.96,
                        },
                        visibility: 10000,
                        pop: 0,
                        sys: {
                            pod: "d",
                        },
                        dt_txt: "2022-10-31 12:00:00",
                    },
                    {
                        dt: 1667228400,
                        main: {
                            temp: 15.98,
                            feels_like: 15.51,
                            temp_min: 15.98,
                            temp_max: 15.98,
                            pressure: 1014,
                            sea_level: 1014,
                            grnd_level: 1006,
                            humidity: 72,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 804,
                                main: "Clouds",
                                description: "couvert",
                                icon: "04d",
                            },
                        ],
                        clouds: {
                            all: 100,
                        },
                        wind: {
                            speed: 2.7,
                            deg: 133,
                            gust: 4.54,
                        },
                        visibility: 10000,
                        pop: 0.02,
                        sys: {
                            pod: "d",
                        },
                        dt_txt: "2022-10-31 15:00:00",
                    },
                    {
                        dt: 1667239200,
                        main: {
                            temp: 14.29,
                            feels_like: 14.05,
                            temp_min: 14.29,
                            temp_max: 14.29,
                            pressure: 1012,
                            sea_level: 1012,
                            grnd_level: 1005,
                            humidity: 87,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 500,
                                main: "Rain",
                                description: "légère pluie",
                                icon: "10n",
                            },
                        ],
                        clouds: {
                            all: 100,
                        },
                        wind: {
                            speed: 4.33,
                            deg: 135,
                            gust: 8.98,
                        },
                        visibility: 9460,
                        pop: 0.25,
                        rain: {
                            "3h": 0.25,
                        },
                        sys: {
                            pod: "n",
                        },
                        dt_txt: "2022-10-31 18:00:00",
                    },
                    {
                        dt: 1667250000,
                        main: {
                            temp: 14.29,
                            feels_like: 14.07,
                            temp_min: 14.29,
                            temp_max: 14.29,
                            pressure: 1011,
                            sea_level: 1011,
                            grnd_level: 1003,
                            humidity: 88,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 500,
                                main: "Rain",
                                description: "légère pluie",
                                icon: "10n",
                            },
                        ],
                        clouds: {
                            all: 99,
                        },
                        wind: {
                            speed: 5.51,
                            deg: 154,
                            gust: 13.03,
                        },
                        visibility: 10000,
                        pop: 0.98,
                        rain: {
                            "3h": 1.72,
                        },
                        sys: {
                            pod: "n",
                        },
                        dt_txt: "2022-10-31 21:00:00",
                    },
                    {
                        dt: 1667260800,
                        main: {
                            temp: 14.64,
                            feels_like: 14.43,
                            temp_min: 14.64,
                            temp_max: 14.64,
                            pressure: 1010,
                            sea_level: 1010,
                            grnd_level: 1002,
                            humidity: 87,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 500,
                                main: "Rain",
                                description: "légère pluie",
                                icon: "10n",
                            },
                        ],
                        clouds: {
                            all: 96,
                        },
                        wind: {
                            speed: 7.45,
                            deg: 195,
                            gust: 12.24,
                        },
                        visibility: 10000,
                        pop: 0.92,
                        rain: {
                            "3h": 0.14,
                        },
                        sys: {
                            pod: "n",
                        },
                        dt_txt: "2022-11-01 00:00:00",
                    },
                    {
                        dt: 1667271600,
                        main: {
                            temp: 14.73,
                            feels_like: 14.53,
                            temp_min: 14.73,
                            temp_max: 14.73,
                            pressure: 1009,
                            sea_level: 1009,
                            grnd_level: 1002,
                            humidity: 87,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 500,
                                main: "Rain",
                                description: "légère pluie",
                                icon: "10n",
                            },
                        ],
                        clouds: {
                            all: 100,
                        },
                        wind: {
                            speed: 7.08,
                            deg: 205,
                            gust: 10.6,
                        },
                        visibility: 10000,
                        pop: 0.29,
                        rain: {
                            "3h": 0.32,
                        },
                        sys: {
                            pod: "n",
                        },
                        dt_txt: "2022-11-01 03:00:00",
                    },
                    {
                        dt: 1667282400,
                        main: {
                            temp: 13.68,
                            feels_like: 13.32,
                            temp_min: 13.68,
                            temp_max: 13.68,
                            pressure: 1010,
                            sea_level: 1010,
                            grnd_level: 1002,
                            humidity: 85,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 500,
                                main: "Rain",
                                description: "légère pluie",
                                icon: "10n",
                            },
                        ],
                        clouds: {
                            all: 100,
                        },
                        wind: {
                            speed: 6.51,
                            deg: 195,
                            gust: 9.73,
                        },
                        visibility: 10000,
                        pop: 0.23,
                        rain: {
                            "3h": 0.22,
                        },
                        sys: {
                            pod: "n",
                        },
                        dt_txt: "2022-11-01 06:00:00",
                    },
                    {
                        dt: 1667293200,
                        main: {
                            temp: 13.87,
                            feels_like: 13.53,
                            temp_min: 13.87,
                            temp_max: 13.87,
                            pressure: 1010,
                            sea_level: 1010,
                            grnd_level: 1003,
                            humidity: 85,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 500,
                                main: "Rain",
                                description: "légère pluie",
                                icon: "10d",
                            },
                        ],
                        clouds: {
                            all: 100,
                        },
                        wind: {
                            speed: 8.02,
                            deg: 214,
                            gust: 10.7,
                        },
                        visibility: 10000,
                        pop: 0.48,
                        rain: {
                            "3h": 0.61,
                        },
                        sys: {
                            pod: "d",
                        },
                        dt_txt: "2022-11-01 09:00:00",
                    },
                    {
                        dt: 1667304000,
                        main: {
                            temp: 14.26,
                            feels_like: 13.8,
                            temp_min: 14.26,
                            temp_max: 14.26,
                            pressure: 1010,
                            sea_level: 1010,
                            grnd_level: 1002,
                            humidity: 79,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 500,
                                main: "Rain",
                                description: "légère pluie",
                                icon: "10d",
                            },
                        ],
                        clouds: {
                            all: 100,
                        },
                        wind: {
                            speed: 7.12,
                            deg: 233,
                            gust: 8.85,
                        },
                        visibility: 10000,
                        pop: 0.58,
                        rain: {
                            "3h": 1.23,
                        },
                        sys: {
                            pod: "d",
                        },
                        dt_txt: "2022-11-01 12:00:00",
                    },
                    {
                        dt: 1667314800,
                        main: {
                            temp: 13.95,
                            feels_like: 13.1,
                            temp_min: 13.95,
                            temp_max: 13.95,
                            pressure: 1010,
                            sea_level: 1010,
                            grnd_level: 1002,
                            humidity: 65,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 500,
                                main: "Rain",
                                description: "légère pluie",
                                icon: "10d",
                            },
                        ],
                        clouds: {
                            all: 100,
                        },
                        wind: {
                            speed: 9.3,
                            deg: 229,
                            gust: 11.67,
                        },
                        visibility: 10000,
                        pop: 0.49,
                        rain: {
                            "3h": 0.45,
                        },
                        sys: {
                            pod: "d",
                        },
                        dt_txt: "2022-11-01 15:00:00",
                    },
                    {
                        dt: 1667325600,
                        main: {
                            temp: 12.87,
                            feels_like: 12.22,
                            temp_min: 12.87,
                            temp_max: 12.87,
                            pressure: 1011,
                            sea_level: 1011,
                            grnd_level: 1003,
                            humidity: 77,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 500,
                                main: "Rain",
                                description: "légère pluie",
                                icon: "10n",
                            },
                        ],
                        clouds: {
                            all: 66,
                        },
                        wind: {
                            speed: 11.11,
                            deg: 220,
                            gust: 14.78,
                        },
                        visibility: 10000,
                        pop: 0.33,
                        rain: {
                            "3h": 0.21,
                        },
                        sys: {
                            pod: "n",
                        },
                        dt_txt: "2022-11-01 18:00:00",
                    },
                    {
                        dt: 1667336400,
                        main: {
                            temp: 12.76,
                            feels_like: 12.18,
                            temp_min: 12.76,
                            temp_max: 12.76,
                            pressure: 1012,
                            sea_level: 1012,
                            grnd_level: 1004,
                            humidity: 80,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 501,
                                main: "Rain",
                                description: "pluie modérée",
                                icon: "10n",
                            },
                        ],
                        clouds: {
                            all: 100,
                        },
                        wind: {
                            speed: 8.72,
                            deg: 229,
                            gust: 11.09,
                        },
                        visibility: 8507,
                        pop: 0.92,
                        rain: {
                            "3h": 3.86,
                        },
                        sys: {
                            pod: "n",
                        },
                        dt_txt: "2022-11-01 21:00:00",
                    },
                    {
                        dt: 1667347200,
                        main: {
                            temp: 12.12,
                            feels_like: 11.48,
                            temp_min: 12.12,
                            temp_max: 12.12,
                            pressure: 1012,
                            sea_level: 1012,
                            grnd_level: 1004,
                            humidity: 80,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 500,
                                main: "Rain",
                                description: "légère pluie",
                                icon: "10n",
                            },
                        ],
                        clouds: {
                            all: 75,
                        },
                        wind: {
                            speed: 7.88,
                            deg: 212,
                            gust: 10.5,
                        },
                        visibility: 10000,
                        pop: 0.86,
                        rain: {
                            "3h": 1.23,
                        },
                        sys: {
                            pod: "n",
                        },
                        dt_txt: "2022-11-02 00:00:00",
                    },
                    {
                        dt: 1667358000,
                        main: {
                            temp: 10.16,
                            feels_like: 9.5,
                            temp_min: 10.16,
                            temp_max: 10.16,
                            pressure: 1011,
                            sea_level: 1011,
                            grnd_level: 1003,
                            humidity: 87,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 500,
                                main: "Rain",
                                description: "légère pluie",
                                icon: "10n",
                            },
                        ],
                        clouds: {
                            all: 99,
                        },
                        wind: {
                            speed: 7.76,
                            deg: 200,
                            gust: 10.11,
                        },
                        visibility: 8570,
                        pop: 0.98,
                        rain: {
                            "3h": 2.19,
                        },
                        sys: {
                            pod: "n",
                        },
                        dt_txt: "2022-11-02 03:00:00",
                    },
                    {
                        dt: 1667368800,
                        main: {
                            temp: 11.42,
                            feels_like: 10.63,
                            temp_min: 11.42,
                            temp_max: 11.42,
                            pressure: 1012,
                            sea_level: 1012,
                            grnd_level: 1004,
                            humidity: 77,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 501,
                                main: "Rain",
                                description: "pluie modérée",
                                icon: "10n",
                            },
                        ],
                        clouds: {
                            all: 100,
                        },
                        wind: {
                            speed: 11.28,
                            deg: 261,
                            gust: 14.67,
                        },
                        visibility: 10000,
                        pop: 1,
                        rain: {
                            "3h": 5.47,
                        },
                        sys: {
                            pod: "n",
                        },
                        dt_txt: "2022-11-02 06:00:00",
                    },
                    {
                        dt: 1667379600,
                        main: {
                            temp: 10.64,
                            feels_like: 9.82,
                            temp_min: 10.64,
                            temp_max: 10.64,
                            pressure: 1017,
                            sea_level: 1017,
                            grnd_level: 1010,
                            humidity: 79,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 500,
                                main: "Rain",
                                description: "légère pluie",
                                icon: "10d",
                            },
                        ],
                        clouds: {
                            all: 96,
                        },
                        wind: {
                            speed: 9.97,
                            deg: 299,
                            gust: 13.98,
                        },
                        visibility: 10000,
                        pop: 0.89,
                        rain: {
                            "3h": 0.69,
                        },
                        sys: {
                            pod: "d",
                        },
                        dt_txt: "2022-11-02 09:00:00",
                    },
                    {
                        dt: 1667390400,
                        main: {
                            temp: 13.05,
                            feels_like: 12.08,
                            temp_min: 13.05,
                            temp_max: 13.05,
                            pressure: 1020,
                            sea_level: 1020,
                            grnd_level: 1012,
                            humidity: 64,
                            temp_kf: 0,
                        },
                        weather: [
                            {
                                id: 803,
                                main: "Clouds",
                                description: "nuageux",
                                icon: "04d",
                            },
                        ],
                        clouds: {
                            all: 66,
                        },
                        wind: {
                            speed: 9.11,
                            deg: 270,
                            gust: 12.1,
                        },
                        visibility: 10000,
                        pop: 0.69,
                        sys: {
                            pod: "d",
                        },
                        dt_txt: "2022-11-02 12:00:00",
                    },
                ],
                city: {
                    id: 2978439,
                    name: "Saint-Martin-Boulogne",
                    coord: {
                        lat: 50.7356,
                        lon: 1.6043,
                    },
                    country: "FR",
                    population: 12414,
                    timezone: 7200,
                    sunrise: 1666939068,
                    sunset: 1666975004,
                },
            };

            setMainWeather({
                name: res.city.name,
                dt: res.list[0].dt,
                temp: res.list[0].main.temp,
                temp_min: res.list[0].main.temp_min,
                temp_max: res.list[0].main.temp_max,
                humidity: res.list[0].main.humidity,
                description: res.list[0].weather[0].description,
                icon: res.list[0].weather[0].icon,
                wind: res.list[0].wind.speed,
                rain: res.list[0].rain ? res.list[0].rain * 100 + " %" : "0 %",
            });
            setWeatherData(res);

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
                name: res.city.name,
                dt: newForecastData[1].data[4].dt,
                temp: newForecastData[1].data[4].main.temp,
                temp_min: newForecastData[1].data[4].main.temp_min,
                temp_max: newForecastData[1].data[4].main.temp_max,
                humidity: newForecastData[1].data[4].main.humidity,
                description: newForecastData[1].data[4].weather[0].description,
                icon: newForecastData[1].data[4].weather[0].icon,
                wind: newForecastData[1].data[4].wind.speed,
                rain: newForecastData[1].data[4].rain ? newForecastData[1].data[4].rain * 100 + " %" : "0 %",
            });
        };
        fetchAndSetData();
    }, []);

    useEffect(() => {
        console.log("raw:", weatherData);
        console.log("formated:", formatedWeatherData);
    }, [formatedWeatherData]);

    return (
        <ScrollView style={styleWeather.back}>
            <View style={styleWeather.main}>
                <SelectedWeather isPreview={isPreview} setIsPreview={setIsPreview} mainWeather={mainWeather} tommorowWeather={tommorowWeather}/>

                {!isPreview ? 
                    <WeatherDetails weatherData={mainWeather} />
                :
                    <WeatherDetails weatherData={tommorowWeather} />
                }

            </View>

            {!isPreview ? (
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
            )}

            {/* TRUC QUI BUG PLUS */}
            {/* {!isPreview ? (
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
                                                styleWeather.footerHeaderToday
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
                                                <View
                                                    key={i}
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
                                            );
                                        })}
                                    </View>
                                </View>
                            );
                        })
                    ) : (
                        <View>
                            <Text>ALLO ???</Text>
                        </View>
                    )}
                </ScrollView>
            ) : (
                <></>
            )} */}
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
        marginTop: 15,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
    },
    footerHeaderToday: {
        color: "#fff",
        fontSize: 14,
    },
    footerHeaderMore: {
        color: "#b3dbe6",
        fontSize: 11,
    },
    footerHeaderIcon: {
        color: "#b3dbe6",
        fontWeight: "100",
    },
    footer: {
        flexDirection: "row",
        marginTop: 25,
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
