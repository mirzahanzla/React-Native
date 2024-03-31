import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Profile({ route, navigation }) {
  console.log(route.params);
  const { userName, userEmail, userPassword } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Name:</Text>
        <TouchableOpacity style={styles.dataContainer}>
          <Text style={styles.value}>{userName}</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.row, styles.rowAlternate]}>
        <Text style={styles.label}>Email:</Text>
        <TouchableOpacity style={styles.dataContainer}>
          <Text style={styles.value}>{userEmail}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Password:</Text>
        <TouchableOpacity style={styles.dataContainer}>
          <Text style={styles.value}>{userPassword}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  rowAlternate: {
    backgroundColor: "#e0e0e0",
  },
  label: {
    fontWeight: "bold",
    marginRight: 10,
    width: 100,
  },
  dataContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  value: {
    flex: 1,
    color: "#333333",
  },
});
