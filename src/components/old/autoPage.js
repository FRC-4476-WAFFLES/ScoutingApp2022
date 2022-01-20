import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import PageTitle from "../PageTitle";

export default function AutoPage(props) {
  return (
    <SafeAreaView>
      <ScrollView>
        <PageTitle title="Autonomous" />
        <View>
          <View styles={styles.container}>
            <TouchableOpacity style={styles.roundButton}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <Text style={styles.labelText}>High Goals</Text>
            <TouchableOpacity style={styles.roundButton}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
          <View></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  },

  roundButton: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "black",
  },

  buttonText: {
    color: "white",
    fontSize: 50,
  },

  labelText: {
    fontSize: 50,
  },
});
