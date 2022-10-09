import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const Searchbar = ({ term, onTermChange, onTermSubmitted }) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={{ border: "none", outline: "none" }}
        placeholder="Search"
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={() => onTermSubmitted()}
      />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
    width: 100,
    border: "none",
  },
});
