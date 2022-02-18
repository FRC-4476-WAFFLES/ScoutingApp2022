import React from "react";
<<<<<<< HEAD
import { 
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform
} from "react-native";
=======
import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";
>>>>>>> 34d7bd3c873d50dfe11aeccf95de18dd3e510e41

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
<<<<<<< HEAD
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight - 55 : 10,
=======
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
>>>>>>> 34d7bd3c873d50dfe11aeccf95de18dd3e510e41
    textAlign: "center",
  },

  bar: {
    marginTop: Platform.OS == "android" ? 14 : 18,
    width: Dimensions.get("screen").width,
    height: 5,
    backgroundColor: "black",
  },
});
