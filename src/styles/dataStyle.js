import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar, Dimensions } from "react-native";

const dataStyle = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    title: {
      fontSize: 50,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight - 50 : 0,
      textAlign: "center",
    },
  
    bar: {
      width: Dimensions.get("screen").width,
      height: 5,
      backgroundColor: "black",
    },
});

export default dataStyle;