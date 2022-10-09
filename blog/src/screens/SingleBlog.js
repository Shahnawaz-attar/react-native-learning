import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";

const SingleBlog = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

export default SingleBlog;

const styles = StyleSheet.create({});
