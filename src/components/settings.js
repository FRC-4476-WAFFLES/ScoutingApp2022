import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import * as FileSystem from "expo-file-system";

import PageTitle from "./PageTitle";
import SquareButton from "./SquareButton";

export default function StartupPage({ navigation }) {
  const [codeText, setCodeText] = React.useState("");
  const [nameText, setNameText] = React.useState("");

  const [jsonText, setJsonText] = React.useState("");
  const [isLoaded, setIsLoaded] = React.useState(false);

  const [driverStation, setDriverStation] = React.useState("");

  const [matchScheduleExists, setMatchScheduleExists] = React.useState(false);
  const [showMatchSchedule, setShowMatchSchedule] = React.useState(false);

  const [matchScheduleString, setMatchScheduleString] = React.useState("");

  const scheduleFileUri = `${
    FileSystem.documentDirectory
  }${"MatchSchedule.json"}`;
  const settingsFileUri = `${
    FileSystem.documentDirectory
  }${"ScoutingAppSettings.json"}`;

  React.useEffect(async () => {
    async function setSettingsVars() {
      try {
        let settingsJSON = await JSON.parse(
          await FileSystem.readAsStringAsync(settingsFileUri)
        );
        setNameText(await settingsJSON["Settings"]["scoutName"]);
        setDriverStation(await settingsJSON["Settings"]["driverStation"]);
      } catch (err) {
        console.log("No Settings File Saved.");
      }
    }

    async function checkMatchScheduleExists() {
      let tmp = await FileSystem.getInfoAsync(scheduleFileUri);
      console.log(`Match Schedule Exists: ${tmp.exists}`)
      setMatchScheduleExists(tmp.exists);
    }

    await setSettingsVars();
    await checkMatchScheduleExists();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <PageTitle title="Settings" />

        <View>
          <Text style={styles.heading1}>Event Code</Text>
          <TextInput
            style={styles.codeInput}
            onChangeText={setCodeText}
            value={codeText}
            placeholder="Event Code"
          />
          <View style={styles.importSchedule}>
            <TouchableOpacity
              style={styles.importScheduleButton}
              onPress={downloadMatchSchedule}
            >
              <Text style={styles.heading2}>Import Event Match Schedule</Text>
            </TouchableOpacity>
          </View>
          {
              matchScheduleExists ? 
              <View>
                <TouchableOpacity onPress={() => fetchScheduleJSON()}>
                  <Text>View Current Match Schedule</Text>
                </TouchableOpacity>
                {
                  showMatchSchedule && matchScheduleString != "" && 
                  <View style={styles.showMatchSchedule}>
                    <Text>{matchScheduleString}</Text>
                  </View>
                }
              </View>
              :
              <View>
                <Text>Match Schedule Does Not Exist</Text>
              </View>
          }
        </View>

        <View>
          <Text style={styles.heading1}>Scout Name</Text>
          <TextInput
            style={styles.nameInput}
            onChangeText={setNameText}
            value={nameText}
            placeholder="Scout Name"
          />
        </View>

        <View>
          <Text style={styles.heading1}>Driverstation</Text>
          <View style={styles.pickerContainer}>
            <View style={styles.picker}>
              <Picker
                selectedValue={driverStation}
                onValueChange={(itemValue, itemIndex) =>
                  setDriverStation(itemValue)
                }
                itemStyle={styles.pickerItems}
              >
                <Picker.Item label="Driverstation" value="" />
                <Picker.Item label="B1" value="B1" />
                <Picker.Item label="B2" value="B2" />
                <Picker.Item label="B3" value="B3" />
                <Picker.Item label="R1" value="R1" />
                <Picker.Item label="R2" value="R2" />
                <Picker.Item label="R3" value="R3" />
              </Picker>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={async () => {
            await saveSettings();
            navigation.navigate("Startup");
          }}
        >
          <Text style={styles.save}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );

  async function fetchScheduleJSON() {
    setShowMatchSchedule(!showMatchSchedule);
    let scheduleRead = await FileSystem.readAsStringAsync(scheduleFileUri);
    let scheduleJSON = await JSON.parse(scheduleRead);
    let scheduleString = JSON.stringify(scheduleJSON);
    setMatchScheduleString(scheduleString)
  }

  async function saveSettings() {
    let theJSON = `
    {
      "Settings": {
        "scoutName": "${nameText}",
        "driverStation": "${driverStation}"
      }
    }
    `;

    await FileSystem.writeAsStringAsync(settingsFileUri, theJSON);
    console.log(await FileSystem.readAsStringAsync(settingsFileUri));
  }

  async function downloadMatchSchedule() {
    await getMatchSchedule();
    let theJSON = JSON.stringify(await JSON.parse(jsonText), null, "\t");
    await FileSystem.writeAsStringAsync(scheduleFileUri, theJSON);
    console.log(await FileSystem.readAsStringAsync(scheduleFileUri));
  }

  async function getMatchSchedule() {
    var base64 = require("base-64");

    var username = "faiazumaer";
    var password = "5fecfbc3-09ce-45a0-bad2-769fd4006781";

    var requestOptions = {
      method: "GET",
      headers: {
        Authorization: "Basic " + base64.encode(username + ":" + password),
        "If-Modified-Since": "",
      },
      redirect: "follow",
    };

    const response = await fetch(
      `https://frc-api.firstinspires.org/v3.0/2022/schedule/${codeText}?tournamentLevel=qual`,
      requestOptions
    )
      .then((res) => res.text())
      .then((data) => {
        setJsonText(data);
      })
      .catch((error) => console.log(error));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFCC00",
    justifyContent: "center",
    alignItems: "center",
  },

  heading1: {
    fontSize: Dimensions.get("window").width * 0.08,
    fontWeight: "bold",
    marginHorizontal: 15,
    marginVertical: 15,
  },

  heading2: {
    fontSize: Dimensions.get("window").width * 0.05,
    fontStyle: "italic",
  },

  codeInput: {
    fontSize: Dimensions.get("window").width * 0.05,
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

  nameInput: {
    fontSize: Dimensions.get("window").width * 0.05,
    width: "80%",
    backgroundColor: "#FFBCBC",
    borderRadius: 10,
    padding: "2%",
    left: "10%",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: "5%",
  },

  importSchedule: {
    width: Dimensions.get("window").width * 0.8,
    height: 85,
    backgroundColor: "#F5A900",
    marginLeft: Dimensions.get("window").width * 0.1,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },

  pickerContainer: {
    justifyContent: "center",
    alignItems: "center",
    transform: [{ scaleX: 2 }, { scaleY: 2 }],
  },

  picker: {
    width: "30%",
    backgroundColor: "#F5A900",
    margin: 25,
    borderRadius: 15,
  },

  save: {
    fontSize: Dimensions.get("window").width * 0.06,
    width: "95%",
    backgroundColor: "#FFD27A",
    borderRadius: 100,
    padding: "2%",
    left: Dimensions.get("window").width * 0.025,
    justifyContent: "center",
    textAlign: "center",
    marginTop: Dimensions.get("window").height * 0.05,
  },

  showMatchSchedule: {
    backgroundColor: 'white',
    width: '80%',
    height: '80%',
    top: '10%',
    left: '10%',
    borderRadius: 10
  }
});
