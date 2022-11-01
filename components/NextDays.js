import React from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Image,
    Text,
    View,
    ScrollView,
    TextInput,
    Button,
} from "react-native";
import { useState, useEffect } from "react";
import { style } from "../assets/style";
import Navbar from "./Navbar";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const dayjs = require("dayjs");
require("dayjs/locale/fr");

export default function NextDays({ formatedData }) {
    if (!formatedData) return;
    const minTempOfGivenDay = (day) => {
        let min_temp = 1000
        day.forEach( timeRange => {
            if (timeRange.main.temp < min_temp) min_temp = timeRange.main.temp
        })
        return min_temp
    }

    return (
        <View>
            {formatedData.map((day, i) => {
                if (i == 0 || i == 1) return;
                if (!day.data[4]) return;
                // console.log(day)
                return (
                    <View key={i} style={styleNextDays.dayContainer}>
                        <Text style={styleNextDays.day}>{day.day.slice(0,3)}</Text>
                        <View style={styleNextDays.weather}>
                            <Image
                                source={{
                                    uri: `http://openweathermap.org/img/wn/${day.data[4].weather[0].icon}@4x.png`,
                                }}
                                style={styleNextDays.icon}
                            />
                            <Text style={styleNextDays.iconDescription}>{day.data[4].weather[0].description}</Text>
                        </View>
                        <View style={styleNextDays.tempContainer}>
                            <Text style={styleNextDays.temp}>{`${Math.round(day.data[4].main.temp)}°`}</Text>
                            <Text style={styleNextDays.minTemp}>{`${Math.round(minTempOfGivenDay(day.data))}°`}</Text>
                        </View>
                    </View>
                );
            })}
        </View>
    );
}

const styleNextDays = StyleSheet.create({
    dayContainer: {
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: "row"
    },
    day: {
        color: "#b3dbe6",
        fontSize: 20,
        textTransform: "capitalize",
    },
    weather: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    icon: {
        height: 50,
        width: 50,
    },
    iconDescription: {
        color: "#b3dbe6",
        fontSize: 20,
        textTransform: "capitalize",
    },
    tempContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width: 100
    },
    temp: {
        color: "#fff",
        fontSize: 20,
    },
    minTemp: {
        color: "#b3dbe6",
        fontSize: 15,
    }
});
