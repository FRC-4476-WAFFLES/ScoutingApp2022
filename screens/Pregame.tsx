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
    Platform
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { RFPercentage } from "react-native-responsive-fontsize";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as FileSystem from "expo-file-system";

import StackParamList from "../library/StackParamList";
import ScreenTitle from "../components/ScreenTitle";

type PregameScreenProps = NativeStackScreenProps<StackParamList, "Pregame">;

const PregameScreen: React.FunctionComponent<PregameScreenProps> = props => {
    const { navigation, route } = props;

    const [toNavigate, setToNavigate] = React.useState("Match");

    const [matchNum, setMatchNum] = React.useState("");
    const [teamNum, setTeamNum] = React.useState("");
  
    const [selectedPosition, setSelectedPosition] = React.useState(0);

    const scheduleFileUri = `${
        FileSystem.documentDirectory
    }${"MatchSchedule.json"}`;
    const settingsFileUri = `${
        FileSystem.documentDirectory
    }${"ScoutingAppSettings.json"}`;

    const docDir = `${FileSystem.documentDirectory}`;

    const positions = ["LEFT", "CENTER", "RIGHT"];
    const startingPositions = {
    LEFT: "l",
    CENTER: "c",
    RIGHT: "r",
    };

    const apiStations = {
    R1: "Red1",
    R2: "Red2",
    R3: "Red3",
    B1: "Blue1",
    B2: "Blue2",
    B3: "Blue3",
    };

    return (
        <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <ScreenTitle title="Pre-Game" />
          </View>
  
          <Text style={styles.header2}>Match #</Text>
          <TextInput
            style={styles.input}
            onChangeText={setMatchNum}
            value={matchNum}
            placeholder="Match #..."
            keyboardType="numeric"
          />
  
          <TouchableOpacity /* onPress={findMatch} */ >
            <Text style={styles.findMatch}>Find Match</Text>
          </TouchableOpacity>
  
          <Text style={styles.header}>You are scouting Team...</Text>
          <Text style={styles.header}>{teamNum}</Text>
  
          <TouchableOpacity
            onPress={async () => {
                //await submitPrematch();
            //   navigation.navigate(toNavigate, {
            //     match: parseInt(matchNum),
            //   });
            }}
          >
            <Text style={styles.submit}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    )
}

export default PregameScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  
    header: {
      fontSize: RFPercentage(4),
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      textAlign: "center",
    },
  
    header2: {
      fontSize: RFPercentage(4),
      left: "5%",
      paddingTop: "2%",
    },
  
    input: {
      fontSize: 25,
      width: "80%",
      backgroundColor: "#FFBCBC",
      borderRadius: 10,
      marginTop: "5%",
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
      marginBottom: "5%",
    },
  
    startPosContainer: {
      flexWrap: "wrap",
      flexDirection: "column",
      justifyContent: "center",
      left: "10%",
      marginBottom: "10%",
    },
  
    findMatch: {
      fontSize: RFPercentage(3),
      width: "50%",
      backgroundColor: "#FFD27A",
      borderRadius: 100,
      padding: "2%",
      left: "25%",
      justifyContent: "center",
      textAlign: "center",
      marginBottom: "5%",
    },
});