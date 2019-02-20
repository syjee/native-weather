import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: "Raining like a MF",
        subtitle: "For more info look outside",
        icon: "weather-rainy"
    },
    Clear: {
        colors: ["#FFEA38", "#E05F01"],
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt",
        icon: "weather-sunny"
    },
    Thunderstorm: {
        colors: ["#01E3B9", "#0183D8"],
        title: "Thunderstorm \n\t\t in the house",
        subtitle: "Actually, outside of the house",
        icon: "weather-lightning"
    },
    Clouds: {
        colors: ["#C8C3BE", "#4A5562"],
        title: "Clouds",
        subtitle: "I know , fucking boring",
        icon: "weather-cloudy"
    },
    Snow: {
        colors: ["#72D9FE", "#A8B5E9"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no.",
        icon: "weather-snowy"
    },
    Haze: {
        colors: ["#C8C3BE", "#8F9298"],
        title: "Haze",
        subtitle: "It's like foggy, just take a nap",
        icon: "weather-fog"
    },
    Drizzle: {
        colors: ["#79EFFF", "#62ABFF"],
        title: "Drizzle",
        subtitle: "It's like rain, but gay",
        icon: "weather-hail"
    },
    Mist: {
        colors: ["#C8C3BE", "#777C85"],
        title: "Mist",
        subtitle: "It's like you have no glasses on.",
        icon: "weather-fog"
    }
};

function Weather({ temp, weatherName }) {
    console.log(weatherName);
    return (
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons
                    color="white"
                    size={140}
                    name={weatherCases[weatherName].icon}
                />
                <Text style={styles.temp}>{temp}˚</Text>
            </View>

            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "transparent"
    },
    temp: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10,
        marginBottom: 20
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10
        // fontWeight: "300"
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 50
    }
});
