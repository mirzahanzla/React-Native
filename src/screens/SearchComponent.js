import React from "react";
import { TextInput, Button, View } from "react-native";

//Hanzla Mirza: SP21-BSE-057

const SearchComponent = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View
      style={{ flexDirection: "row", marginHorizontal: 10, marginBottom: 10 }}
    >
      <TextInput
        style={{
          flex: 1,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 7,
          paddingHorizontal: 10,
        }}
        placeholder="Enter city"
        value={term}
        onChangeText={onTermChange}
      />
      <View style={{ marginLeft: 10, borderRadius: 7, overflow: "hidden" }}>
        <Button
          title="Search"
          onPress={onTermSubmit}
          color="#007AFF" 
       
        />
      </View>
    </View>
  );
};

export default SearchComponent;
