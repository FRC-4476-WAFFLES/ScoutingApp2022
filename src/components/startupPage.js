import React, { Component } from "react";
import {
  Text,
  SafeAreaView,
  ImageBackground,
  Button,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../styles/styles";

const startupPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.backdrop}
        source={require("../../assets/backdrop.png")}
      >
        <Text style={styles.title}>W.A.F.F.L.E.S Scouting</Text>
      </ImageBackground>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("datatest")}
      >
        <View>
          <Text style={styles.buttonText}>Get Started</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default startupPage;
