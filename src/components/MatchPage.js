import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import * as Clipboard from 'expo-clipboard';

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import DropDownArrow from "./DropDownArrow";
import PageTitle from "./PageTitle";
import PullUpArrow from "./PullUpArrow";
import { Dimensions } from "react-native-web";

export default function MatchPage({ route, navigation }) {
  const [isAutoExpanded, setIsAutoExpanded] = React.useState(true);
  const [isTeleOpExpanded, setIsTeleOpExpanded] = React.useState(false);
  const [isEndgameExpanded, setIsEndgameExpanded] = React.useState(false);

  const [autoLowerBalls, setAutoLowerBalls] = React.useState(0);
  const [autoUpperBalls, setAutoUpperBalls] = React.useState(0);

  const [teleOpLowerBalls, setTeleOpLowerBalls] = React.useState(0);
  const [teleOpUpperBalls, setTeleOpUpperBalls] = React.useState(0);

  const [isTraversalChecked, setIsTraversalChecked] = React.useState(false);

  const [isCommentBoxOpen, setIsCommentBoxOpen] = React.useState(false);
  const [commentValue, setCommentValue] = React.useState(``);

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => handleCommentClick()}
        style={styles.commentIconContainer}
      >
        <Image
          source={require("../assets/images/comment-icon.png")}
          style={styles.commentIcon}
        />
      </TouchableOpacity>
      {isCommentBoxOpen && (
        <View style={styles.commentBox}>
          <Text style={styles.commentTitle}>Comment</Text>
          <View style={styles.commentBar}></View>
          <TextInput
            style={styles.commentInput}
            multiline
            onChangeText={(text) => setCommentValue(text)}
            value={commentValue}
          ></TextInput>
        </View>
      )}
      <ScrollView>
        <PageTitle title="Match" />
        <View style={[styles.collapsibleContainer]}>
          <TouchableOpacity
            style={[styles.row, isAutoExpanded ? styles.expandedRow : {}]}
            onPress={() => toggleAutoExpand()}
          >
            {isAutoExpanded ? (
              <PullUpArrow style={styles.arrow} />
            ) : (
              <DropDownArrow style={styles.arrow} />
            )}
            <Text style={[styles.title, styles.font]}>Autonomous</Text>
          </TouchableOpacity>
          {isAutoExpanded && (
            <View style={styles.child}>
              <View style={styles.hubInput}>
                <Text style={styles.text}>
                  {autoUpperBalls} Balls scored in Upper Hub
                </Text>
                <View style={styles.ballButtons}>
                  <TouchableOpacity
                    style={[styles.roundButton, styles.minusButton]}
                    onPress={() => updateAutoUpperBalls(-1)}
                  >
                    <Image
                      source={require("../assets/images/minus-icon.png")}
                      style={styles.buttonIcon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.roundButton, styles.plusButton]}
                    onPress={() => updateAutoUpperBalls(1)}
                  >
                    <Image
                      source={require("../assets/images/plus-icon.png")}
                      style={styles.buttonIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.hubInput}>
                <Text style={styles.text}>
                  {autoLowerBalls} Balls scored in Lower Hub
                </Text>
                <View style={styles.ballButtons}>
                  <TouchableOpacity
                    style={[styles.roundButton, styles.minusButton]}
                    onPress={() => updateAutoLowerBalls(-1)}
                  >
                    <Image
                      source={require("../assets/images/minus-icon.png")}
                      style={styles.buttonIcon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.roundButton, styles.plusButton]}
                    onPress={() => updateAutoLowerBalls(1)}
                  >
                    <Image
                      source={require("../assets/images/plus-icon.png")}
                      style={styles.buttonIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </View>
        <View style={styles.collapsibleContainer}>
          <TouchableOpacity
            style={[styles.row, isTeleOpExpanded ? styles.expandedRow : {}]}
            onPress={() => toggleTeleOpExpand()}
          >
            {isTeleOpExpanded ? (
              <PullUpArrow style={styles.arrow} />
            ) : (
              <DropDownArrow style={styles.arrow} />
            )}
            <Text style={[styles.title, styles.font]}>Tele-Op</Text>
          </TouchableOpacity>
          {isTeleOpExpanded && (
            <View style={styles.child}>
              <View style={styles.hubInput}>
                <Text style={styles.text}>
                  {teleOpUpperBalls} Balls scored in Upper Hub
                </Text>
                <View style={styles.ballButtons}>
                  <TouchableOpacity
                    style={[styles.roundButton, styles.minusButton]}
                    onPress={() => updateTeleOpUpperBalls(-1)}
                  >
                    <Image
                      source={require("../assets/images/minus-icon.png")}
                      style={styles.buttonIcon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.roundButton, styles.plusButton]}
                    onPress={() => updateTeleOpUpperBalls(1)}
                  >
                    <Image
                      source={require("../assets/images/plus-icon.png")}
                      style={styles.buttonIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.hubInput}>
                <Text style={styles.text}>
                  {teleOpLowerBalls} Balls scored in Lower Hub
                </Text>
                <View style={styles.ballButtons}>
                  <TouchableOpacity
                    style={[styles.roundButton, styles.minusButton]}
                    onPress={() => updateTeleOpLowerBalls(-1)}
                  >
                    <Image
                      source={require("../assets/images/minus-icon.png")}
                      style={styles.buttonIcon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.roundButton, styles.plusButton]}
                    onPress={() => updateTeleOpLowerBalls(1)}
                  >
                    <Image
                      source={require("../assets/images/plus-icon.png")}
                      style={styles.buttonIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </View>
        <View style={styles.collapsibleContainer}>
          <TouchableOpacity
            style={[styles.row, isEndgameExpanded ? styles.expandedRow : {}]}
            onPress={() => toggleEndgameExpand()}
          >
            {isEndgameExpanded ? (
              <PullUpArrow style={styles.arrow} />
            ) : (
              <DropDownArrow style={styles.arrow} />
            )}
            <Text style={[styles.title, styles.font]}>Endgame</Text>
          </TouchableOpacity>
          {isEndgameExpanded && (
            <View style={styles.child}>
              <Text style={[styles.checkboxHeader, styles.text]}>
                Hanger Traversal
              </Text>
              <View style={styles.traversalCheckContainer}>
                <BouncyCheckbox
                  size={75}
                  fillColor="black"
                  unfillColor="#FFFFFF"
                  iconStyle={{ borderColor: "black" }}
                  isChecked={isTraversalChecked}
                  onPress={() => setIsTraversalChecked(!isTraversalChecked)}
                />
              </View>
            </View>
          )}
        </View>

        <View>
          <TouchableOpacity
            onPress={async () => {
              await matchSubmit();
              navigation.navigate("QRCode", {
                data: await getDataString(),
              });
            }}
          >
            <Text style={styles.submit}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

  async function matchSubmit() {
    let match = route.params.match;
    let csvURI = `${FileSystem.documentDirectory}match${match}.csv`;

    let currData = await FileSystem.readAsStringAsync(csvURI);
    
    let commaIndex = 0;
    let commas = 0;
    for (i = 0; i < currData.length; i++) {
      if (currData.charAt(i) == ',') {
        commas++;
      }

      if (commas == 8) {
        commaIndex = i;
        console.log(commaIndex)
        break;
      }
    }

    currData = currData.slice(0, commaIndex + 1);
    console.log(`currData: ${currData}`)

    currData += `${autoUpperBalls},${autoLowerBalls},${teleOpUpperBalls},${teleOpLowerBalls},${+isTraversalChecked},${
      commentValue === `` ? 0 : commentValue
    }`;

    await FileSystem.writeAsStringAsync(csvURI, currData);
    console.log(await FileSystem.readAsStringAsync(csvURI));

    Clipboard.setString(currData);

    // const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    
    // if (status === "granted") {
    //   console.log(csvURI);
    //   await FileSystem.writeAsStringAsync(csvURI, currData, { encoding: FileSystem.EncodingType.UTF8 });
    //   //console.log(await FileSystem.readAsStringAsync(csvURI));
    //   const asset = await MediaLibrary.createAssetAsync(csvURI)
    //   await MediaLibrary.createAlbumAsync("Download", asset, false)
    // }
  }

  async function getDataString() {
    let match = route.params.match;
    let csvURI = `${FileSystem.documentDirectory}match${match}.csv`;
    let dataString = await FileSystem.readAsStringAsync(csvURI);

    console.log(dataString);

    return dataString;
  }

  function handleCommentClick() {
    setIsCommentBoxOpen(!isCommentBoxOpen);
  }

  function toggleAutoExpand() {
    setIsAutoExpanded((current) => !current);
  }

  function toggleTeleOpExpand() {
    setIsTeleOpExpanded((current) => !current);
  }

  function toggleEndgameExpand() {
    setIsEndgameExpanded((current) => !current);
  }

  function updateAutoLowerBalls(num) {
    let target = autoLowerBalls + num;
    if (target >= 0) {
      setAutoLowerBalls(target);
    }
  }

  function updateAutoUpperBalls(num) {
    let target = autoUpperBalls + num;
    if (target >= 0) {
      setAutoUpperBalls(target);
    }
  }

  function updateTeleOpLowerBalls(num) {
    let target = teleOpLowerBalls + num;
    if (target >= 0) {
      setTeleOpLowerBalls(target);
    }
  }

  function updateTeleOpUpperBalls(num) {
    let target = teleOpUpperBalls + num;
    if (target >= 0) {
      setTeleOpUpperBalls(target);
    }
  }
}

const styles = StyleSheet.create({
  commentIconContainer: {
    position: "absolute",
    right: "2.5%",
    top: Platform.OS === "android" ? 35 : 2,
    backgroundColor: "#C4C4C4",
    padding: 13,
    borderRadius: 100,
    zIndex: 1,
  },

  commentBox: {
    backgroundColor: "white",
    position: "absolute",
    right: "15%",
    top: Platform.OS === "android" ? 80 : 55,
    width: "75%",
    height: "70%",
    zIndex: 999,
    borderWidth: 7,
    borderRadius: 12,
  },

  commentTitle: {
    fontSize: RFPercentage(4),
    fontWeight: "bold",
    textAlign: "center",
  },

  commentBar: {
    width: "100%",
    height: 7,
    backgroundColor: "black",
  },

  commentInput: {
    width: "100%",
    height: "88%",
    padding: 5,
    fontSize: 25,
    fontWeight: "bold",
    textAlignVertical: "top",
  },

  collapsibleContainer: {
    borderWidth: 5,
    borderRadius: 25,
    marginHorizontal: 10,
    marginVertical: 5,
  },

  row: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
  },

  expandedRow: {
    borderBottomWidth: 5,
  },

  text: {
    fontSize: 40,
    fontWeight: "bold",
  },

  title: {
    fontSize: 40,
    left: "75%",
  },

  arrow: {
    marginTop: 5,
    left: "10%",
  },

  child: {
    marginVertical: 20,
    flex: 1,
    alignItems: "center",
  },

  hubInput: {
    marginVertical: 10,
  },

  roundButton: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },

  minusButton: {
    backgroundColor: "#FFBCBC",
  },

  plusButton: {
    backgroundColor: "#C6FFBD",
  },

  ballButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },

  buttonIcon: {},

  checkbox: {},

  traversalCheckContainer: {
    marginTop: 5,
  },

  submit: {
    fontSize: RFPercentage(4),
    width: "95%",
    backgroundColor: "#FFD27A",
    borderRadius: 100,
    padding: "2%",
    left: "2.5%",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "5%",
    marginBottom: "5%",
  },
});
