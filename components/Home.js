import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import Navbar from './Navbar'
import OldHome from './OldHome';

import * as Location from 'expo-location';
import { style } from '../assets/style'

export default function Home({navigation}) {
    const [currentTemp, setCurrentTemp] = useState()

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const [coordinates, setCoordinates] = useState({
        latitude: '',
        longitute: ''
    })
  
    useEffect(() => { (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
            }
    
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            setCoordinates({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            })
        })()
    }, []
    );

    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }

    const key = '66efa7e216812b5d483fe73827d03ee9'
    const canardWeatherKey = 'e0ea92189583962f90bed534c425b775'

    // StMartinBoulogne loc
    // const lat = 50.735643250210515
    // const lon = 1.604070777045237

    const cityName = 'Saint-Martin-Boulogne'

    // const urlCurrent1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${canardWeatherKey}&units=metric`
    
    const urlCurrent2 = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${canardWeatherKey}&units=metric`

    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${canardWeatherKey}`

    const response1 = {
        "coord": {
            "lon": 1.6186,
            "lat": 50.7269
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 16.62,
            "feels_like": 16.37,
            "temp_min": 16.62,
            "temp_max": 17,
            "pressure": 1015,
            "humidity": 78,
            "sea_level": 1015,
            "grnd_level": 1007
        },
        "visibility": 10000,
        "wind": {
            "speed": 6.87,
            "deg": 206,
            "gust": 8.26
        },
        "clouds": {
            "all": 94
        },
        "dt": 1666700178,
        "sys": {
            "type": 1,
            "id": 6449,
            "country": "FR",
            "sunrise": 1666679556,
            "sunset": 1666716141
        },
        "timezone": 7200,
        "id": 2978439,
        "name": "Saint-Martin-Boulogne",
        "cod": 200
    }

    const response = {
        "cod": "200",
        "message": 0,
        "cnt": 40,
        "list": [
            {
                "dt": 1666710000,
                "main": {
                    "temp": 17.11,
                    "feels_like": 16.86,
                    "temp_min": 16.1,
                    "temp_max": 17.11,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 1006,
                    "humidity": 76,
                    "temp_kf": 1.01
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 82
                },
                "wind": {
                    "speed": 3.59,
                    "deg": 177,
                    "gust": 7.04
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-10-25 15:00:00"
            },
            {
                "dt": 1666720800,
                "main": {
                    "temp": 15.6,
                    "feels_like": 15.28,
                    "temp_min": 14.59,
                    "temp_max": 15.6,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 1004,
                    "humidity": 79,
                    "temp_kf": 1.01
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 86
                },
                "wind": {
                    "speed": 5.19,
                    "deg": 135,
                    "gust": 10.88
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2022-10-25 18:00:00"
            },
            {
                "dt": 1666731600,
                "main": {
                    "temp": 15.74,
                    "feels_like": 15.33,
                    "temp_min": 15.74,
                    "temp_max": 15.74,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1004,
                    "humidity": 75,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 7.26,
                    "deg": 150,
                    "gust": 13.28
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2022-10-25 21:00:00"
            },
            {
                "dt": 1666742400,
                "main": {
                    "temp": 16.01,
                    "feels_like": 15.55,
                    "temp_min": 16.01,
                    "temp_max": 16.01,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 1002,
                    "humidity": 72,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 7.83,
                    "deg": 151,
                    "gust": 15.23
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2022-10-26 00:00:00"
            },
            {
                "dt": 1666753200,
                "main": {
                    "temp": 16,
                    "feels_like": 15.59,
                    "temp_min": 16,
                    "temp_max": 16,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 1002,
                    "humidity": 74,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 6.48,
                    "deg": 173,
                    "gust": 12.09
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2022-10-26 03:00:00"
            },
            {
                "dt": 1666764000,
                "main": {
                    "temp": 15.73,
                    "feels_like": 15.63,
                    "temp_min": 15.73,
                    "temp_max": 15.73,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 1003,
                    "humidity": 87,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 7.92,
                    "deg": 217,
                    "gust": 13.2
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2022-10-26 06:00:00"
            },
            {
                "dt": 1666774800,
                "main": {
                    "temp": 16.09,
                    "feels_like": 16.08,
                    "temp_min": 16.09,
                    "temp_max": 16.09,
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
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 8.77,
                    "deg": 213,
                    "gust": 12.55
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-10-26 09:00:00"
            },
            {
                "dt": 1666785600,
                "main": {
                    "temp": 17.43,
                    "feels_like": 17.27,
                    "temp_min": 17.43,
                    "temp_max": 17.43,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 1008,
                    "humidity": 78,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 98
                },
                "wind": {
                    "speed": 8.67,
                    "deg": 211,
                    "gust": 13.32
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-10-26 12:00:00"
            },
            {
                "dt": 1666796400,
                "main": {
                    "temp": 17.73,
                    "feels_like": 17.6,
                    "temp_min": 17.73,
                    "temp_max": 17.73,
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
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 96
                },
                "wind": {
                    "speed": 7.19,
                    "deg": 212,
                    "gust": 12.75
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-10-26 15:00:00"
            },
            {
                "dt": 1666807200,
                "main": {
                    "temp": 16.82,
                    "feels_like": 16.65,
                    "temp_min": 16.82,
                    "temp_max": 16.82,
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
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 98
                },
                "wind": {
                    "speed": 5.78,
                    "deg": 199,
                    "gust": 10.97
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2022-10-26 18:00:00"
            },
            {
                "dt": 1666818000,
                "main": {
                    "temp": 15.18,
                    "feels_like": 15.03,
                    "temp_min": 15.18,
                    "temp_max": 15.18,
                    "pressure": 1019,
                    "sea_level": 1019,
                    "grnd_level": 1011,
                    "humidity": 87,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 4.34,
                    "deg": 158,
                    "gust": 8.76
                },
                "visibility": 10000,
                "pop": 0.2,
                "rain": {
                    "3h": 0.53
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2022-10-26 21:00:00"
            },
            {
                "dt": 1666828800,
                "main": {
                    "temp": 15.6,
                    "feels_like": 15.25,
                    "temp_min": 15.6,
                    "temp_max": 15.6,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 1011,
                    "humidity": 78,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 94
                },
                "wind": {
                    "speed": 5.91,
                    "deg": 154,
                    "gust": 13.25
                },
                "visibility": 10000,
                "pop": 0.29,
                "rain": {
                    "3h": 0.11
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2022-10-27 00:00:00"
            },
            {
                "dt": 1666839600,
                "main": {
                    "temp": 14.62,
                    "feels_like": 14.25,
                    "temp_min": 14.62,
                    "temp_max": 14.62,
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
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 4.99,
                    "deg": 156,
                    "gust": 10.57
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2022-10-27 03:00:00"
            },
            {
                "dt": 1666850400,
                "main": {
                    "temp": 14.27,
                    "feels_like": 13.95,
                    "temp_min": 14.27,
                    "temp_max": 14.27,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 1010,
                    "humidity": 84,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 97
                },
                "wind": {
                    "speed": 4.42,
                    "deg": 143,
                    "gust": 8.85
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2022-10-27 06:00:00"
            },
            {
                "dt": 1666861200,
                "main": {
                    "temp": 16.18,
                    "feels_like": 15.89,
                    "temp_min": 16.18,
                    "temp_max": 16.18,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 1009,
                    "humidity": 78,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 5.95,
                    "deg": 154,
                    "gust": 12.53
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-10-27 09:00:00"
            },
            {
                "dt": 1666872000,
                "main": {
                    "temp": 18.92,
                    "feels_like": 18.7,
                    "temp_min": 18.92,
                    "temp_max": 18.92,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 1009,
                    "humidity": 70,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 8.49,
                    "deg": 194,
                    "gust": 14.32
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-10-27 12:00:00"
            },
            {
                "dt": 1666882800,
                "main": {
                    "temp": 18.44,
                    "feels_like": 18.27,
                    "temp_min": 18.44,
                    "temp_max": 18.44,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 1009,
                    "humidity": 74,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 6.55,
                    "deg": 185,
                    "gust": 12.53
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-10-27 15:00:00"
            },
            {
                "dt": 1666893600,
                "main": {
                    "temp": 16.97,
                    "feels_like": 16.79,
                    "temp_min": 16.97,
                    "temp_max": 16.97,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 1010,
                    "humidity": 79,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 71
                },
                "wind": {
                    "speed": 3.71,
                    "deg": 152,
                    "gust": 4.98
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
                    "temp": 16.56,
                    "feels_like": 16.31,
                    "temp_min": 16.56,
                    "temp_max": 16.56,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 1010,
                    "humidity": 78,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 45
                },
                "wind": {
                    "speed": 3.74,
                    "deg": 151,
                    "gust": 5.74
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
                    "temp": 16.66,
                    "feels_like": 16.37,
                    "temp_min": 16.66,
                    "temp_max": 16.66,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 1009,
                    "humidity": 76,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 72
                },
                "wind": {
                    "speed": 4.55,
                    "deg": 157,
                    "gust": 9.65
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
                    "temp": 16.32,
                    "feels_like": 16.04,
                    "temp_min": 16.32,
                    "temp_max": 16.32,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 1008,
                    "humidity": 78,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 4.83,
                    "deg": 159,
                    "gust": 10.02
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
                    "temp": 16.51,
                    "feels_like": 16.2,
                    "temp_min": 16.51,
                    "temp_max": 16.51,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 1008,
                    "humidity": 76,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 5.86,
                    "deg": 160,
                    "gust": 13.06
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
                    "temp": 18.19,
                    "feels_like": 17.92,
                    "temp_min": 18.19,
                    "temp_max": 18.19,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 1009,
                    "humidity": 71,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 8.61,
                    "deg": 199,
                    "gust": 16.79
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
                    "temp": 18.58,
                    "feels_like": 18.45,
                    "temp_min": 18.58,
                    "temp_max": 18.58,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 1011,
                    "humidity": 75,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 7.95,
                    "deg": 224,
                    "gust": 12.49
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
                    "temp": 17.15,
                    "feels_like": 17.17,
                    "temp_min": 17.15,
                    "temp_max": 17.15,
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
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 5.37,
                    "deg": 247,
                    "gust": 9.82
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
                    "temp": 15.33,
                    "feels_like": 15.24,
                    "temp_min": 15.33,
                    "temp_max": 15.33,
                    "pressure": 1021,
                    "sea_level": 1021,
                    "grnd_level": 1013,
                    "humidity": 89,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.57,
                    "deg": 220,
                    "gust": 1.79
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
                    "temp": 15.35,
                    "feels_like": 15.21,
                    "temp_min": 15.35,
                    "temp_max": 15.35,
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
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.61,
                    "deg": 141,
                    "gust": 1.69
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
                    "temp": 15.75,
                    "feels_like": 15.6,
                    "temp_min": 15.75,
                    "temp_max": 15.75,
                    "pressure": 1019,
                    "sea_level": 1019,
                    "grnd_level": 1012,
                    "humidity": 85,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.21,
                    "deg": 135,
                    "gust": 2.75
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
                    "temp": 15.94,
                    "feels_like": 15.6,
                    "temp_min": 15.94,
                    "temp_max": 15.94,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 1010,
                    "humidity": 77,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 3.26,
                    "deg": 166,
                    "gust": 3.89
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
                    "temp": 16.16,
                    "feels_like": 15.92,
                    "temp_min": 16.16,
                    "temp_max": 16.16,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 1011,
                    "humidity": 80,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 4.68,
                    "deg": 193,
                    "gust": 8.06
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
                    "temp": 16.44,
                    "feels_like": 16.41,
                    "temp_min": 16.44,
                    "temp_max": 16.44,
                    "pressure": 1020,
                    "sea_level": 1020,
                    "grnd_level": 1012,
                    "humidity": 87,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 5.13,
                    "deg": 207,
                    "gust": 8.62
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
                    "temp": 17.6,
                    "feels_like": 17.53,
                    "temp_min": 17.6,
                    "temp_max": 17.6,
                    "pressure": 1020,
                    "sea_level": 1020,
                    "grnd_level": 1012,
                    "humidity": 81,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 3.5,
                    "deg": 221,
                    "gust": 4.43
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
                    "temp": 18.09,
                    "feels_like": 18.02,
                    "temp_min": 18.09,
                    "temp_max": 18.09,
                    "pressure": 1019,
                    "sea_level": 1019,
                    "grnd_level": 1011,
                    "humidity": 79,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 1.26,
                    "deg": 167,
                    "gust": 2.04
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
                    "temp": 16.65,
                    "feels_like": 16.43,
                    "temp_min": 16.65,
                    "temp_max": 16.65,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 1010,
                    "humidity": 79,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 4.29,
                    "deg": 106,
                    "gust": 8.84
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
                    "temp": 16.61,
                    "feels_like": 16.28,
                    "temp_min": 16.61,
                    "temp_max": 16.61,
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
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 4.59,
                    "deg": 131,
                    "gust": 9.6
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
                    "temp": 16.31,
                    "feels_like": 15.93,
                    "temp_min": 16.31,
                    "temp_max": 16.31,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 1007,
                    "humidity": 74,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 93
                },
                "wind": {
                    "speed": 5.38,
                    "deg": 147,
                    "gust": 11.05
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
                    "temp": 15.94,
                    "feels_like": 15.52,
                    "temp_min": 15.94,
                    "temp_max": 15.94,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 1006,
                    "humidity": 74,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 69
                },
                "wind": {
                    "speed": 5.17,
                    "deg": 162,
                    "gust": 10.45
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
                    "temp": 15.12,
                    "feels_like": 14.7,
                    "temp_min": 15.12,
                    "temp_max": 15.12,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 1007,
                    "humidity": 77,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 75
                },
                "wind": {
                    "speed": 4.73,
                    "deg": 187,
                    "gust": 7.32
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
                    "temp": 16.19,
                    "feels_like": 15.88,
                    "temp_min": 16.19,
                    "temp_max": 16.19,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 1008,
                    "humidity": 77,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 3.79,
                    "deg": 185,
                    "gust": 5.91
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
                    "temp": 17.64,
                    "feels_like": 17.34,
                    "temp_min": 17.64,
                    "temp_max": 17.64,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 1008,
                    "humidity": 72,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 3.59,
                    "deg": 207,
                    "gust": 4.98
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-10-30 12:00:00"
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
            "sunrise": 1666679556,
            "sunset": 1666716141
        }
    }

    // const fetchData = async () => {
    //     const data =  await fetch(urlForecast)
    //     const res = await data.json()
    //     console.log(res)
    // }

    // useEffect(() => {
    //     fetchData()
    // },[])



  return (
    <>
        <Navbar navigation={navigation} currentScreen={'Home'}/>
        {/* <View>
            <Button title="Roman Converter" onPress={() => navigation.navigate('RomanConverter')}/>
            <Button title="Preview" onPress={() => navigation.navigate('Preview')}/>
        </View> */}
    </>
  );
}