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

import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function WeatherDetails({ weatherData }) {
    return <View style={styleDetails.details}>
            <View style={styleDetails.detailsChild}>
                <Feather style={styleDetails.detailsIcon} name="wind" />
                <Text style={styleDetails.detailsData}>
                    {`${Math.round(weatherData.wind * 3.6)} km/h`}
                </Text>
                <Text style={styleDetails.detailsText}>Vent</Text>
            </View>
            <View style={styleDetails.detailsChild}>
                <Ionicons style={styleDetails.detailsIcon} name="water" />
                <Text style={styleDetails.detailsData}>
                    {`${weatherData.humidity} %`}
                </Text>
                <Text style={styleDetails.detailsText}>Humidité</Text>
            </View>
            <View style={styleDetails.detailsChild}>
                <Fontisto style={styleDetails.detailsIcon} name="rains" />
                <Text style={styleDetails.detailsData}>{weatherData.rain}</Text>
                <Text style={styleDetails.detailsText}>Pluie</Text>
            </View>
        </View>
}

const styleDetails = StyleSheet.create({
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: "rgba(249, 249, 249, 0.2)",
    },
    detailsChild: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30,
    },
    detailsIcon: {
        fontSize: 20,
        color: "#fff",
    },
    detailsData: {
        fontSize: 15,
        color: "#fff",
    },
    detailsText: {
        fontSize: 12,
        color: "rgba(249, 249, 249, 0.7)",
    },
});
