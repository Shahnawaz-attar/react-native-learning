import { Button, StyleSheet, Text, View } from "react-native";
import React, { useReducer } from "react";

const CounterScreen = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increase":
        return { ...state, counter: state.counter + action.payload };
      case "decrease":
        return { ...state, counter: state.counter - action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increase", payload: 1 });
        }}
      />
      <hr />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrease", payload: 1 });
        }}
      />
      <hr />
      <Text>Current Count: {state.counter}</Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
