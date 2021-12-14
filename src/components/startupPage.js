import React, { Component } from "react";
import { Image, Text, SafeAreaView, ImageBackground } from "react-native";
import styles from "../styles/styles";

class BackgroundTitle extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          style={styles.backdrop}
          source={require("../../assets/backdrop.png")}
        >
          <Text style={styles.title}>W.A.F.F.L.E.S Scouting</Text>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default BackgroundTitle;
