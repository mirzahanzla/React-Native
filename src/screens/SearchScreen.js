import React, { useState } from "react";
import { Text, View } from "react-native";
import yelp from "../api/yelp";
import SearchComponent from "./SearchComponent";

export default function SearchScreen() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async (searchTerm) => {
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        term,
        location: "NewYork",
      },
    });
    setResults(response.data.businesses);
  };

  return (
    <View>
      <SearchComponent
        term={term}
        onTermChange={(newValue) => setTerm(newValue)}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>{results.length} results found</Text>
    </View>
  );
}
