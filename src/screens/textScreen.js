import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native"; // Corrected import for TextInput

export default function TextScreen() {
  const [name, setName] = useState(""); // Added state to track the text input

  return (
    <View style={styles.viewStyle}>
      <Text>Enter Name: {name} </Text>
      {/* Added the style and state handling to TextInput */}
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name} // Bind input value to state
        onChangeText={(newValue) => setName(newValue)} // Update state on change
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: "center", // Added to center content (optional)
    justifyContent: "center", // Added to center content vertically (optional)
  },
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 2,
    width: "80%", // Set a width for the TextInput
  },
});
