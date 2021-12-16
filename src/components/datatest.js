import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput } from "react-native";

import PageTitle from "./PageTitle";
import dataStyle from "../styles/dataStyle";

const datatest = ({ navigation, route }) => {
  const [teamNumber, onChangeNumber] = React.useState("null");

  return (
    <SafeAreaView style={dataStyle.container}>
      <PageTitle text="Submission" />
      <View style={[dataStyle.container, dataStyle.alignHeaders]}>
        <Text style={dataStyle.teamHead}>Team #</Text>
        <TextInput
          style={dataStyle.input}
          onChangeText={onChangeNumber}
          value={teamNumber}
          placeholder="Team Number"
          keyboardType="numeric"
        ></TextInput>
        <Text style={dataStyle.headings}>Overall Performance</Text>
        <Text style={dataStyle.headings}>Points Scored</Text>
      </View>
    </SafeAreaView>
  );
};

export default datatest;
