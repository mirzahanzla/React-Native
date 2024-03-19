import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Imagedetails from "../components/imageDetail";
export default function FlatScreen() {
  const freinds = [
    { name: "Hanzla", age: 23 },
    { name: "Ali", age: 24 },
    { name: "Azim", age: 23 },
    { name: "Rizwan", age: 25 },
    { name: "Mobeen", age: 25 },
  ];

  return (
    <View>
      <Text>Welcome to FlatScreen</Text>
      <FlatList
        data={freinds}
        renderItem={({ item }) => {
          // Corrected to use destructuring
          return (
            <Text style={styles.textStyle}>
              {item.name} AND {item.age}
            </Text> // Correctly accessing item properties
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    margin: 20,
    fontSize: 20,
  },
});
