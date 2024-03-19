import React, { useState } from "react";
import { Text, View } from "react-native";
import yelp from "../api/yelp";
import SearchComponent from "./SearchComponent";

export default function SearchScreen() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "NewYork", // You may want to make this dynamic
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <View>
      <SearchComponent
        term={term}
        onTermChange={(newValue) => setTerm(newValue)}
        onTermSubmit={() => searchApi(term)}
        resultsCount={results.length} // Pass the count of results
      />
      <Text>{results.length} results found</Text>
      {/* You can map through results here and display them accordingly */}
    </View>
  );
}
