import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ImageDetail = (props) => {
  const { title, imageSource } = props;
  return (
    <View>
      <Image
        style={styles.imageStyle}
        resizeMode={"cover"}
        source={imageSource}
      />
      <Text> {title} </Text>
    </View>
  );
};

export default ImageDetail;

const styles = StyleSheet.create({
  imageStyle: {
    width: 100,
    height: 100,
  },
});
