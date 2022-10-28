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
    return (
        <View>
            {formatedData.map((day, i) => {
                if (i == 0) return;
                return (
                    <View key={i} style={styleInCompo1.dayContainer}>
                        <Text style={styleInCompo1.day}>{day.day}</Text>
                        <View>
                            <Image
                                source={{
                                    uri: `http://openweathermap.org/img/wn/${day.data[4].weather[0].icon}@4x.png`,
                                }}
                                style={styleInCompo1.icon}
                            />
                            <Text>{day.data[4].weather.description}</Text>
                        </View>
                        <Text></Text>
                    </View>
                );
            })}
        </View>
    );
}

const styleInCompo1 = StyleSheet.create({
    dayContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    day: {
        color: "#b3dbe6",
        fontSize: 20,
        textTransform: "capitalize",
    },
    icon: {
        width: 200,
        backgroundColor: "#ff0000",
    },
});
