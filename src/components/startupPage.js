import React from "react";
import {
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  StatusBar
} from "react-native";

export default function StartupPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.backdrop}
        source={require("../assets/images/backdrop.png")}
      >
        <Text style={styles.title}>W.A.F.F.L.E.S Scouting</Text>
      </ImageBackground>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Match")}
      >
        <View>
          <Text style={styles.buttonText}>Get Started</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  backdrop: {
    flex: 1,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },

  title: {
    fontSize: 50,
    color: "white",
    textAlign: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  button: {
    marginTop: 20,
    borderRadius: 100,
    padding: 10,
    backgroundColor: "white",
    width: Dimensions.get("screen").width * 0.8,
    bottom: Dimensions.get("screen").height * 0.05,
  },

  buttonText: {
    color: "black",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 20,
    textAlign: "center",
  },
});
