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
