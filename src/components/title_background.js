import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, Text, SafeAreaView } from "react-native";
import styles from "../styles/styles";

class BackgroundTitle extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>W.A.F.F.L.E.S Scouting</Text>
        <Image
          style={styles.backdrop}
          source={require("../../assets/backdrop.png")}
        />
      </SafeAreaView>
    );
  }
}

export default BackgroundTitle;
