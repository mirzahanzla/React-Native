import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import React, { useState } from "react";

export default function ColorScreen() {
  const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  };

  const randomHeight = () => {
    return Math.floor(Math.random() * 100);
  };

  const randomWidth = () => {
    return Math.floor(Math.random() * 100);
  };

  const randomAlignment = () => {
    const alignments = ["flex-start", "center", "flex-end"];
    const randomIndex = Math.floor(Math.random() * alignments.length);
    return alignments[randomIndex];
  };

  const [colors, setColors] = useState([]);

  const addColor = () => {
    const newColor = randomRGB();
    const newHeight = randomHeight();
    const newWidth = randomWidth();
    const alignItem = randomAlignment();
    setColors([
      ...colors,
      {
        color: newColor,
        height: newHeight,
        width: newWidth,
        alignitem: alignItem,
      },
    ]);
  };

  return (
    <View>
      <Text>ColorScreen</Text>
      <Button title="Add Color" onPress={addColor} />
      <FlatList
        data={colors}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: item.height,
                width: item.width,
                backgroundColor: item.color,
                alignSelf: item.alignitem,
              }}
            ></View>
          );
        }}
      />
    </View>
  );
}
