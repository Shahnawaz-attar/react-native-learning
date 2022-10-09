import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ResultsDetails = ({ result }) => {
  return (
    <View>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

export default ResultsDetails;

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 10,
    marginRight: 20,
  },
  nameStyle: {
    fontWeight: "bold",
  },
});
