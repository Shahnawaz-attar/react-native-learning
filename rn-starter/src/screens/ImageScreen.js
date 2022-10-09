import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageDetail from "../../Components/ImageDetail";
import forestImg from "../../assets/forest.jpg";
import beachImg from "../../assets/beach.jpg";
import mountainImg from "../../assets/mountain.jpg";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" imageSource={forestImg} />
      <ImageDetail title="Beach" imageSource={beachImg} />
      <ImageDetail title="Mountain" imageSource={mountainImg} />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
