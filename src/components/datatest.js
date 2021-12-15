import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PageTitle from "./PageTitle";
import dataStyle from "../styles/dataStyle";

const datatest = ({ navigation, route }) => {
  return (
    <SafeAreaView style={dataStyle.container}>
      <PageTitle text='Submission' />
    </SafeAreaView>
  );
};

export default datatest;