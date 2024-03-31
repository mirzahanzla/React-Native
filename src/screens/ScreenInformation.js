import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
} from "react-native";
// import Profile from "./Profile"

export default function Screeninformation({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {

    if (!name || !email || !password) {
        Alert.alert('All fields are required');
        return;
      }

    navigation.navigate("Profile", {
      userName: name,
      userEmail: email,
      userPassword: password,
    });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <Text style={{ textAlign: "center", marginBottom: 20 }}>
          Please Enter Your Information
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Name"
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Your Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Your Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={{ color: "white" }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: Dimensions.get("window").width - 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
});
