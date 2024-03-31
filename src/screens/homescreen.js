import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
export default function Homescreen({ navigation }) {
  return (
    <View>
      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("image")}
      >
        <Text style={styles.textstyle}>Go to Image Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("Counter")}
      >
        <Text style={styles.textstyle}>Go to Counter Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("TextScreen")}
      >
        <Text style={styles.textstyle}>Go to Text Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("FlatScreen")}
      >
        <Text style={styles.textstyle}>Go to Flat Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("Colors")}
      >
        <Text style={styles.textstyle}>Go to Color screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("Changer")}
      >
        <Text style={styles.textstyle}>Go to Color Changer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("UseState")}
      >
        <Text style={styles.textstyle}>Go to UseState Color Changer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("AddTask")}
      >
        <Text style={styles.textstyle}>Go to Information InputText </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("Search City Data")}
      >
        <Text style={styles.textstyle}>Search City Weather Data </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("Searching Test")}
      >
        <Text style={styles.textstyle}>Search City Weather Data </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("Information")}
      >
        <Text style={styles.textstyle}>Data information </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "blue",
    borderRadius: 20,
    padding: 12,
  },
  textstyle: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  },
});
