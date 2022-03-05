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
import * as FileSystem from "expo-file-system";

export default function StartupPage({ navigation }) {
  const [toNavigate, setToNavigate] = React.useState("Pregame");

  const settingsFileUri = `${
    FileSystem.documentDirectory
  }${"ScoutingAppSettings.json"}`;
  
  React.useEffect(() => {
    async function checkSettings() {
      let tmp = await FileSystem.getInfoAsync(settingsFileUri);
      if (!tmp.exists) {
        setToNavigate("Settings")
        return;
      }
  
      let settingsJSON = await JSON.parse(
        await FileSystem.readAsStringAsync(settingsFileUri)
      );
  
      let position = await settingsJSON["Settings"]["driverStation"];
      let scout = await settingsJSON["Settings"]["scoutName"];
  
      console.log(`Position: ${position}, Scout: ${scout}`)
  
      if (position == "" || scout == "") {
        setToNavigate("Settings")
        return;
      }

      setToNavigate("Pregame")
    }

    checkSettings();
  }, []);

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
        onPress={() => {
          navigation.navigate(toNavigate);
        }}
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
    // marginTop: 20,
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
    marginRight: Dimensions.get("screen").width * 0.05,
  },

  buttonImageDababy: {
    width: 30,
    height: 30,
    alignContent: "flex-end",
    marginLeft: Dimensions.get("screen").width * 0.05,
  },

  rowIcons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    bottom: Dimensions.get("screen").height * 0.05,
    width: "100%",
  },
});
