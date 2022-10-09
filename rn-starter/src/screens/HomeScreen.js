import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Its Home..</Text>
      <View styles={styles.buttonStyle}>
        <Button
          title="Go to Components Demo"
          onPress={() => navigation.navigate("Components")}
        />
        <Button
          title="Go to list Demo"
          onPress={() => navigation.navigate("List")}
        />
        <Button
          title="Go to Image Demo"
          onPress={() => navigation.navigate("screen")}
        />

        <Button
          title="Go to Counter Demo"
          onPress={() => navigation.navigate("counter")}
        />
        <Button
          title="Go to squar Screen"
          onPress={() => navigation.navigate("squareScreen")}
        />
        <Button
          title="Go to Text Screen"
          onPress={() => navigation.navigate("textScreen")}
        />
        <Button
          title="Go to Box Screen"  
          onPress={() => navigation.navigate("boxScreen")}
        />
      </View>
      {/* <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  buttonStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
  },
});
