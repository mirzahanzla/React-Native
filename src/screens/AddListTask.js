import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  Alert,
} from "react-native";

export default function InputScreen() {
  const [name, setName] = useState("");
  const [fName, setfName] = useState("");
  const [rollNo, setRollNo] = useState("");

  const [student, setStudent] = useState([]);
  const [idCounter, setIdCounter] = useState(1);

  const addStudent = () => {
    // Trim the input values to remove whitespace
    const trimmedName = name.trim();
    const trimmedFName = fName.trim();
    const trimmedRollNo = rollNo.trim();

    if (!trimmedName || !trimmedFName || !trimmedRollNo) {
      Alert.alert("Error", "Please fill in all input fields.");
      return;
    }

    const exists = student.some(
      (item) =>
        item.name.trim() === trimmedName &&
        item.fName.trim() === trimmedFName &&
        item.rollNo.trim() === trimmedRollNo
    );
    if (!exists) {
      setStudent([
        ...student,
        {
          id: idCounter,
          name: trimmedName,
          fName: trimmedFName,
          rollNo: trimmedRollNo,
        },
      ]);
      setIdCounter(idCounter + 1);
      setName("");
      setfName("");
      setRollNo("");
    } else {
      Alert.alert(
        "Error",
        "This combination already exists. Please change the information."
      );
    }
  };

  const isAddDisabled = () => {
    return !name.trim() || !fName.trim() || !rollNo.trim();
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          style={styles.textInput}
          value={name}
          onChangeText={(text) => setName(text)}
        ></TextInput>

        <TextInput
          placeholder="Father Name"
          style={styles.textInput}
          value={fName}
          onChangeText={(text) => setfName(text)}
        ></TextInput>

        <TextInput
          placeholder="Roll NO"
          style={styles.textInput}
          value={rollNo}
          onChangeText={(text) => setRollNo(text)}
        ></TextInput>

        <Button
          title="Add Data"
          onPress={addStudent}
          disabled={isAddDisabled()}
        ></Button>
      </View>

      <FlatList
        data={student}
        keyExtractor={(item) => item.id.toString()} // Use ID as the key
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.fName}</Text>
            <Text style={styles.cell}>{item.rollNo}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    padding: 10,
  },
  labelContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
  },
  inputContainer: {
    marginBottom: 10,
  },
  textInput: {
    marginVertical: 5,
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
  },
  cell: {
    flex: 1,
    textAlign: "center",
  },
});
