import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

const TextScreen = () => {
  const [name, setName] = useState("");
  const handleNameChange = (text) => {
    setName(text);
    console.log(name);
  };
  return (
    <View>
      <Text>TextScreen</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(text) => handleNameChange(text)}
      />

      {name && (
        <Text>
          My name is {name} and it has {name.length} characters
        </Text>
      )}
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
  },
});
