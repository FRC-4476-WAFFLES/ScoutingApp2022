import React from "react";
import {
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
} from "react-native";

export default function StartupPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Background and title */}
      <ImageBackground
        style={styles.backdrop}
        source={require("../assets/images/startPage/backdrop.png")}
      >
        <Text style={styles.title}>W.A.F.F.L.E.S Scouting</Text>
      </ImageBackground>

      {/* LESS GO button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Match")}
      >
        <View>
          <Text style={styles.buttonText}>
            <View>
              <Image
                style={styles.buttonImage}
                source={require("../assets/images/startPage/paper-mario.png")}
              />
            </View>
            LES GOOOO!
            <View>
              <Image
                style={styles.buttonImageDababy}
                source={require("../assets/images/startPage/dababy.png")}
              />
            </View>
          </Text>
        </View>
      </TouchableOpacity>

      {/* Bottom Row Icons */}
      <View style={styles.rowIcons}>
        {/* Camera Icon */}
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          <Image
            source={require("../assets/images/startPage/cam-transp.png")}
            onPress={() => navigation.navigate("Autonomous")}
          />
        </TouchableOpacity>
        {/* Analysis Icon */}
        <TouchableOpacity onPress={() => navigation.navigate("Analysis")}>
          <Image
            source={require("../assets/images/startPage/analysis-icon.png")}
          />
        </TouchableOpacity>
        {/* List Icon */}
        <TouchableOpacity onPress={() => navigation.navigate("TierList")}>
          <Image source={require("../assets/images/startPage/list-icon.png")} />
        </TouchableOpacity>
        {/* Settings Icon */}
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Image
            source={require("../assets/images/startPage/settings-icon.png")}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
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
    bottom: Dimensions.get("screen").height * 0.1,
  },

  buttonText: {
    color: "black",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 20,
    textAlign: "center",
  },

  buttonImage: {
    width: 30,
    height: 30,
    alignContent: "flex-start",
    marginRight: 100,
  },

  buttonImageDababy: {
    width: 30,
    height: 30,
    alignContent: "flex-end",
    marginLeft: 100,
  },

  rowIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    bottom: Dimensions.get("screen").height * 0.05,
    width: '75%'
  },
});
