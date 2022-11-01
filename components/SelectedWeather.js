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

const dayjs = require("dayjs");
require("dayjs/locale/fr");

import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function SelectedWeather({isPreview,setIsPreview,mainWeather,tommorowWeather}) {
  return <>
    {!isPreview ? (
        <>
            <View style={styleWeather.header}>
                <View style={styleWeather.headerLeftButton}>
                    <MaterialCommunityIcons
                        name="dots-square"
                        style={styleWeather.headerIconLeft}
                    />
                </View>
                <Text style={styleWeather.cityName}>
                    {`${mainWeather.name}`}
                </Text>
                <Entypo
                    name="dots-three-vertical"
                    style={styleWeather.headerIconRight}
                />
            </View>
            {mainWeather.icon ? (
                <Image
                    source={{
                        uri: `http://openweathermap.org/img/wn/${mainWeather.icon}@4x.png`,
                    }}
                    style={styleWeather.image}
                />
            ) : (
                <></>
            )}

            <View>
                <View style={styleWeather.mainTempContainer}>
                    <Text style={styleWeather.mainTemp}>
                        {`${Math.round(mainWeather.temp)}`}
                    </Text>
                    <Text style={styleWeather.mainTempDeg}>°</Text>
                </View>
                <Text style={styleWeather.mainWeather}>
                    {`${mainWeather.description}`}
                </Text>
            </View>
            <View>
                <Text style={styleWeather.mainDt}>
                    {dayjs
                        .unix(mainWeather.dt)
                        .locale("fr")
                        .format("DD MMMM YYYY  HH:mm")}
                </Text>
            </View>
        </>
    ) : (
        <></>
    )}

    {isPreview ? (
        <>
            <View style={styleWeather.header}>
                <View style={styleWeather.headerLeftButton}>
                    <FontAwesome
                        name="chevron-left"
                        style={styleWeather.headerIconLeft}
                        onPress={() => setIsPreview(false)}
                    />
                </View>
                <Text style={styleWeather.cityName}>
                    {`${tommorowWeather.name}`}
                </Text>
                <Entypo
                    name="dots-three-vertical"
                    style={styleWeather.headerIconRight}
                />
            </View>
            <View style={styleWeather.headerMoreInfo}>
                {tommorowWeather.icon ? (
                    <Image
                        source={{
                            uri: `http://openweathermap.org/img/wn/${tommorowWeather.icon}@4x.png`,
                        }}
                        style={styleWeather.imageAlt}
                    />
                ) : (
                    <></>
                )}
                <View>
                    <Text style={styleWeather.mainWeatherAltDay}>
                        {`Demain`}
                    </Text>
                    <View style={styleWeather.mainTempContainerAlt}>
                        <Text style={styleWeather.mainTemp}>
                            {`${Math.round(tommorowWeather.temp)}`}
                        </Text>
                        <Text
                            style={styleWeather.mainTempAltMin}
                        >{`/${Math.round(
                            tommorowWeather.temp_min
                        )}°`}</Text>
                    </View>
                    <Text style={styleWeather.mainWeatherAlt}>
                        {`${tommorowWeather.description}`}
                    </Text>
                </View>
            </View>
        </>
    ) : (
        <></>
    )}
  </>
}

const styleWeather = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 15,
    },
    headerMoreInfo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingEnd: 15,
    },
    headerLeftButton: {
        borderWidth: 1,
        borderRadius: 50,
        borderColor: "#b3dbe6",
        width: 30,
        aspectRatio: 1 / 1,
        alignItems: "center",
        justifyContent: "center",
    },
    headerIconLeft: {
        color: "#fff",
        fontSize: 15,
        padding: 5,
    },
    headerIconRight: {
        color: "#fff",
        fontSize: 15,
    },
    mainTemp: {
        color: "#fff",
        fontSize: 75,
    },
    mainTempContainer: {
        justifyContent: "center",
        flexDirection: "row",
    },
    mainWeatherAltDay: {
        color: "#fff",
    },
    mainTempContainerAlt: {
        justifyContent: "center",
        alignItems: "baseline",
        flexDirection: "row",
    },
    mainTempAltMin: {
        fontSize: 30,
        color: "#b3dbe6",
    },
    mainTempDeg: {
        color: "#b3dbe6",
        fontSize: 35,
        paddingTop: 10,
    },
    mainWeather: {
        color: "#fff",
        fontSize: 30,
        textAlign: "center",
        textTransform: "capitalize",
    },
    mainWeatherAlt: {
        color: "#b3dbe6",
        fontSize: 15,
        textAlign: 'left',
        textTransform: "capitalize",
    },
    mainDt: {
        color: "#fff",
        textTransform: "capitalize",
    },
    cityName: {
        color: "#fff",
        fontSize: 20,
    },
    image: {
        height: 200,
        width: 200,
    },
    imageAlt: {
        height: 150,
        width: 150,
    },
});
