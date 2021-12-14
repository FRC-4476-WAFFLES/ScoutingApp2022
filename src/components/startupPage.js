import React, { Component } from "react";
import { Text, SafeAreaView, ImageBackground, Button } from "react-native";
import styles from "../styles/styles";

const startupPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground
      style={styles.backdrop}
      source={require("../../assets/backdrop.png")}
    >
      <Text style={styles.title}>W.A.F.F.L.E.S Scouting</Text>
      <Button
        title="Get Started"
        onPress={() =>
          navigation.navigate('datatest')
        }
      />
    </ImageBackground>
  </SafeAreaView>
  );
};

export default startupPage;
