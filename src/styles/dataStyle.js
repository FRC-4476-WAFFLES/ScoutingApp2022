import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar, Dimensions } from "react-native";

const dataStyle = StyleSheet.create({
  container: {
    flex: 1,
  },

  // Main Title
  title: {
    fontSize: 40,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight - 55 : 0,
    textAlign: "center",
  },

  bar: {
    marginTop: 14,
    width: Dimensions.get("screen").width,
    height: 5,
    backgroundColor: "black",
  },

  alignHeaders: {
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 600,
  },

  // Headers
  teamHead: {
    color: "black",
    fontSize: 30,
  },

  headings: {
    fontSize: 25,
  },

  input: {
    backgroundColor: "#FFBCBC",
    borderRadius: 10,
    padding: 10,
    width: Dimensions.get("screen").width * 0.8,
  },
});

export default dataStyle;
