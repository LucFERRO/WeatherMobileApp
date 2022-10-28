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

export default function SelectedWeather() {
  return (
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
                    {`${mainWeather.name}`}
                </Text>
                <Entypo
                    name="dots-three-vertical"
                    style={styleWeather.headerIconRight}
                />
            </View>
            <View style={styleWeather.headerMoreInfo}>
                {mainWeather.icon ? (
                    <Image
                        source={{
                            uri: `http://openweathermap.org/img/wn/${mainWeather.icon}@4x.png`,
                        }}
                        style={styleWeather.imageAlt}
                    />
                ) : (
                    <></>
                )}
                <View>
                    <Text style={styleWeather.mainWeatherAltDay}>
                        {`Tommorrow`}
                    </Text>
                    <View style={styleWeather.mainTempContainerAlt}>
                        <Text style={styleWeather.mainTemp}>
                            {`${Math.round(mainWeather.temp)}`}
                        </Text>
                        <Text
                            style={styleWeather.mainTempAltMin}
                        >{`/${Math.round(
                            mainWeather.temp_min
                        )}°`}</Text>
                    </View>
                    <Text style={styleWeather.mainWeatherAlt}>
                        {`${mainWeather.description}`}
                    </Text>
                </View>
            </View>
        </>
    ) : (
        <></>
    )}
  )
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
