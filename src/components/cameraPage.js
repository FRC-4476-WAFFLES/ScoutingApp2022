import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ImagePicker,
  Permission,
} from "react-native";

import PageTitle from "./PageTitle";

export default function StartupPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <PageTitle title="Camera" />
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
