import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchComponent from "./SearchComponent";

export default function SearchScreen() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fe784859e073eb54a6ea021a10765594`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const renderWeatherInfo = () => {
    if (!weatherData) {
      return <Text style={styles.noDataText}>No data available</Text>;
    }

    const temperature = weatherData.main.temp;
    const feelsLike = weatherData.main.feels_like;
    const humidity = weatherData.main.humidity;

    return (
      <View style={styles.weatherInfoContainer}>
        <Text style={styles.weatherInfoText}>Temperature: {temperature}°C</Text>
        <Text style={styles.weatherInfoText}>Feels like: {feelsLike}°C</Text>
        <Text style={styles.weatherInfoText}>Humidity: {humidity}%</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SearchComponent
        term={city}
        onTermChange={(newValue) => setCity(newValue)}
        onTermSubmit={() => fetchWeatherData()}
      />
      {renderWeatherInfo()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#B8DAE1',
  },
  weatherInfoContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  weatherInfoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  noDataText: {
    fontSize: 16,
    color: "#333",
  },
});
