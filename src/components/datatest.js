import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { 
  View, 
  Text, 
  TextInput,
  StyleSheet,
  Dimensions,
  StatusBar
} from "react-native";

import PageTitle from "./PageTitle";

export default function datatest({ navigation, route }) {
  const [teamNumber, onChangeNumber] = React.useState("null");

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle title="Submission" />
      <View style={[styles.container, styles.alignHeaders]}>
        <Text style={styles.teamHead}>Team #</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={teamNumber}
          placeholder="Team Number"
          keyboardType="numeric"
        ></TextInput>
        <Text style={styles.headings}>Overall Performance</Text>
        <Text style={styles.headings}>Points Scored</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
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
  }
});
