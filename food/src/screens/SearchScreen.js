import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Searchbar from "../../Components/Searchbar";
import useResults from "../hooks/useResults";
import ResultList from "../../Components/ResultList";
import { ScrollView } from "react-native-gesture-handler";

const SearchScreen = ({}) => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  const handleSearch = (newTerm) => {
    setTerm(newTerm);
    searchApi(newTerm);
  };

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <Searchbar
        term={term}
        onTermChange={(newTerm) => handleSearch(newTerm)}
        onTermSubmitted={() => searchApi()}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ResultList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultList title="Bit Pricier" results={filterResultsByPrice("$$")} />
        <ResultList title="Big Spender" results={filterResultsByPrice("$$$")} />
      </ScrollView>
      {results.length > 0 && (
        <Text>We have found {results.length} results</Text>
      )}
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
