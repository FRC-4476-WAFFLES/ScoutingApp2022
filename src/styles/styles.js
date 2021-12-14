import { Dimensions, Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
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
});
