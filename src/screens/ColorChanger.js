import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Imagedetails from "../components/imageDetail";
import ColorChanger from "../components/colorChanger";
import { useState } from "react";
export default function SquareScreen() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const Color_Increment = 15;
  const setColors = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
    }
  };
  return (
    <View>
      <Text>Welocome to Square Screen</Text>
      <ColorChanger
        color="Red"
        onIncrease={() => {
          setColors("red", Color_Increment);
        }}
        onDecrease={() => {
          setColors("red", -1 * Color_Increment);
        }}
      />
      <ColorChanger
        color="Green"
        onIncrease={() => {
          setColors("green", Color_Increment);
        }}
        onDecrease={() => {
          setColors("green", -1 * Color_Increment);
        }}
      />
      <ColorChanger
        color="Blue"
        onIncrease={() => {
          setColors("blue", Color_Increment);
        }}
        onDecrease={() => {
          setColors("blue", -1 * Color_Increment);
        }}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({});
