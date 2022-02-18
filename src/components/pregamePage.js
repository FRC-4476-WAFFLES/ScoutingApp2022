import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Header } from "react-native/Libraries/NewAppScreen";

import PageTitle from "./PageTitle";
import StartingPosition from "./StartingPosition";

export default function pregamePage({ navigation }) {
  let x = "Qn12";
  let teamNum = "4476";
  const [text, onChangeText] = React.useState(x);

  const saveData = async () => {
    try {
      await AsyncStorage.setItem("teamNum", teamNum);
      await AsyncStorage.setItem("x", text);
    } catch (error) {
      // Error saving data
    }
    navigation.navigate("Match");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <PageTitle title="Pre-Game" />
          <Image />
        </View>
        <Text style={styles.header}>You are scouting Team...</Text>
        <Text style={styles.header}>{teamNum}</Text>
        <Text style={styles.header2}>Match #</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Text style={styles.header2}>Starting Position</Text>
        <StartingPosition />
        <TouchableOpacity
          onPress={async () => {
            saveData();
          }}
        >
          <Text style={styles.submit}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    fontSize: 48,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    textAlign: "center",
  },

  header2: {
    fontSize: 35,
    left: "5%",
    paddingTop: "5%",
  },

  input: {
    fontSize: 25,
    width: "80%",
    backgroundColor: "#FFBCBC",
    borderRadius: 10,
    marginTop: 15,
    padding: "2%",
    left: "10%",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: "5%",
  },

  submit: {
    fontSize: 25,
    width: "95%",
    backgroundColor: "#FFD27A",
    borderRadius: 100,
    padding: "2%",
    left: "2.5%",
    justifyContent: "center",
    textAlign: "center",
  },
});
