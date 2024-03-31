import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WeatherTable = ({ temperature, feelsLike, humidity }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Temperature:</Text>
        <Text style={styles.data}>{temperature}°C</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Feels like:</Text>
        <Text style={styles.data}>{feelsLike}°C</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Humidity:</Text>
        <Text style={styles.data}>{humidity}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  label: {
    marginRight: 10,
    fontWeight: "bold",
  },
  data: {
    fontWeight: "bold",
    color: "blue", // Apply styling to the data (temperature, feelsLike, humidity)
  },
});

export default WeatherTable;
