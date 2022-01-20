import React from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";

export default function PageTitle({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.bar}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 0.176,
    flex: 1,
  },

  title: {
    fontSize: 40,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    textAlign: "center",
  },

  bar: {
    marginTop: 14,
    width: Dimensions.get("screen").width,
    height: 5,
    backgroundColor: "black",
  },
});
