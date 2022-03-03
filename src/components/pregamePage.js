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
import * as FileSystem from 'expo-file-system';

import PageTitle from "./PageTitle";
import StartingPosition from "./StartingPosition";
import SquareButton from "./SquareButton";

const positions = ["LEFT", "CENTER", "RIGHT"];
const startingPositions = {
  "LEFT": 'l',
  "CENTER": 'c',
  "RIGHT": 'r'
}

const apiStations = {
  "R1": "Red1",
  "R2": "Red2",
  "R3": "Red3",
  "B1": "Blue1",
  "B2": "Blue2",
  "B3": "Blue3"
}

export default function PregamePage({ navigation }) {
  const [matchNum, setMatchNum] = React.useState('');
  const [teamNum, setTeamNum] = React.useState('');

  const [selectedPosition, setSelectedPosition] = React.useState(0);

  const scheduleFileUri = `${FileSystem.documentDirectory}${'MatchSchedule.json'}`;
  const settingsFileUri = `${FileSystem.documentDirectory}${'ScoutingAppSettings.json'}`

  const docDir = `${FileSystem.documentDirectory}`

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <PageTitle title="Pre-Game" />
          <Image />
        </View>
        
        <Text style={styles.header2}>Match #</Text>
        <TextInput
          style={styles.input}
          onChangeText={setMatchNum}
          value={matchNum}
          placeholder="Match #..."
          keyboardType="numeric"
        />

        <TouchableOpacity onPress={findMatch}>
          <Text>Find Match</Text>
        </TouchableOpacity>
        
        <Text style={styles.header}>You are scouting Team...</Text>
        <Text style={styles.header}>{teamNum}</Text>

        <Text style={styles.header2}>Starting Position</Text>
        <View style={styles.startPosContainer}>
          {positions.map((position) => (
            <SquareButton
              key={position}
              value={position}
              displayValue={position}
              selected={selectedPosition === position}
              singleTap={(valueTap) => setSelectedPosition(valueTap)}
            />
          ))}    
        </View>
        
        
        <TouchableOpacity
          onPress={async () => {
            await submitPrematch();
            navigation.navigate("Match", {
              match: parseInt(matchNum)
            });
          }}
        >
          <Text style={styles.submit}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
  
  async function findMatch() {
    let settingsJSON = await JSON.parse(await FileSystem.readAsStringAsync(settingsFileUri));
    let position = await settingsJSON["Settings"]["driverStation"];

    let jsontext = await FileSystem.readAsStringAsync(scheduleFileUri);
    let matchjson = await JSON.parse(jsontext);
    let teams = await matchjson["Schedule"][parseInt(matchNum) - 1]["teams"];
    
    await teams.forEach(team => {
      if (team["station"] == apiStations[position]) {
        setTeamNum(parseInt(team["teamNumber"]))
        return;
      }
    })
  }

  async function submitPrematch() {
    let settingsJSON = await JSON.parse(await FileSystem.readAsStringAsync(settingsFileUri));

    let team = teamNum;
    let match = matchNum;
    let position = await settingsJSON["Settings"]["driverStation"];
    let alliance = await settingsJSON["Settings"]["driverStation"].charAt(0);
    let allianceKey = `${await alliance}${match}`;
    let scout = await settingsJSON["Settings"]["scoutName"];
    let startPos = startingPositions[selectedPosition];
    
    let tmaKey = `${team}-${allianceKey}`;

    let csvText = `${team},${match},${tmaKey},${position},${alliance},${allianceKey},${scout},${startPos},`;

    let csvURI = `${FileSystem.documentDirectory}match${match}.csv`;
    await FileSystem.writeAsStringAsync(csvURI, csvText);
    console.log(await FileSystem.readAsStringAsync(csvURI));
  }
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

  startPosContainer: {
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
    left: "10%",
    marginBottom: "10%",
  },
});
