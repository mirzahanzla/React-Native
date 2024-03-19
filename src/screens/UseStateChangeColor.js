// Using array in usestate?

import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorChanger from "../components/colorChanger";
import { StatusBar } from "expo-status-bar";

export default function UseStateChangeColor() {
  const [colors, setColors] = useState([0, 0, 0]); // Array of colors [red, green, blue]
  const colorIncrement = 15;

  const updateColor = (index, change) => {
    setColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[index] = Math.min(255, Math.max(0, prevColors[index] + change));
      return newColors;
    });
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          color: "green",
          marginTop: 20,
          textAlign: "center",
        }}
      >
        Welcome to Square-Screen
      </Text>
      <ColorChanger
        color="Red "
        onIncrease={() => {
          updateColor(0, colorIncrement);
        }}
        onDecrease={() => {
          updateColor(0, -1 * colorIncrement);
        }}
      />
      <ColorChanger
        color="Green"
        onIncrease={() => {
          updateColor(1, colorIncrement);
        }}
        onDecrease={() => {
          updateColor(1, -1 * colorIncrement);
        }}
      />
      <ColorChanger
        color="Blue "
        onIncrease={() => {
          updateColor(2, colorIncrement);
        }}
        onDecrease={() => {
          updateColor(2, -1 * colorIncrement);
        }}
      />
      <View
        style={{
          marginTop: 30,
          marginLeft: 90,
          borderRadius: 29,
          height: 200,
          alignItems: "center",
          width: 200,
          backgroundColor: `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`,
        }}
      ></View>
      <StatusBar style="auto" />
    </View>
  );
}
