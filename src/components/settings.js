import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import PageTitle from "./PageTitle";

export default function StartupPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <PageTitle title="Settings" />
      <SafeAreaView style={styles.container}>
        <TouchableOpacity>
          <Text>Settings</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFCC00",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
