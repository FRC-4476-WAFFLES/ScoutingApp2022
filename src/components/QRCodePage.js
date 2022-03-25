import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import { Dimensions } from "react-native-web";
import PageTitle from "./PageTitle";
import { captureScreen } from "react-native-view-shot";
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default function QRCodePage({ route, navigation }) {

  React.useEffect(() => {
    const getPermissions = async () => {
      const permission = await Permissions.getAsync(Permissions.CAMERA_ROLL);
      if (permission.status !== 'granted') {
          const newPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (newPermission.status === 'granted') {
            //its granted.
          }
      } else {
        // Idk
      }
    }

    getPermissions();
  })

  return (
    <SafeAreaView>
      <ScrollView>
        <PageTitle title={"QR Code"} />
          <View style={styles.qrcodeContainer}>
            <QRCode value={route.params.data} size={300} />
          </View>
          <View style={styles.displayText}>
            <Text style={styles.text}>
              CSV: {CSVtoArray(route.params.data).toString()}
            </Text>
            <Text style={styles.text}>
              {getDataFormatted(route.params.data)}
            </Text>
          </View>
          <TouchableOpacity onPress={() => captureQR()} style={styles.button}>
            <Text style={styles.buttonText}>Save Image</Text>
          </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );

  async function captureQR() {
    try {
      const result = await captureScreen({
        result: "tmpfile",
        quality: 1,
        format: "png",
      });
      await MediaLibrary.saveToLibraryAsync(result);
    } catch (e) {
      console.log(e);
    }
  }

  function getDataFormatted(data) {
    let arr = CSVtoArray(data);
    
    let match = arr[1];
    return `Match: ${match}`
  }

  // BY ridgerunner OF STACK OVREFLOW
  // Return array of string values, or NULL if CSV string not well formed.
  function CSVtoArray(text) {
    var re_valid = /^\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*(?:,\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*)*$/;
    var re_value = /(?!\s*$)\s*(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|([^,'"\s\\]*(?:\s+[^,'"\s\\]+)*))\s*(?:,|$)/g;
    // Return NULL if input string is not well formed CSV string.
    if (!re_valid.test(text)) return null;
    var a = [];                     // Initialize array to receive values.
    text.replace(re_value, // "Walk" the string using replace with callback.
        function(m0, m1, m2, m3) {
            // Remove backslash from \' in single quoted values.
            if      (m1 !== undefined) a.push(m1.replace(/\\'/g, "'"));
            // Remove backslash from \" in double quoted values.
            else if (m2 !== undefined) a.push(m2.replace(/\\"/g, '"'));
            else if (m3 !== undefined) a.push(m3);
            return ''; // Return empty string.
        });
    // Handle special case of empty last value.
    if (/,\s*$/.test(text)) a.push('');
    return a;
  };
}

const styles = StyleSheet.create({
  qrcodeContainer: {
    marginTop: "10%",
    marginLeft: "28%",
    marginBottom: "10%",
    transform: [{
      scale: 1.25
    }]
  },

  text: {
    fontSize: 40,
    marginTop: 40
  },

  button: {
    justifyContent: "center",
    marginTop: 75
  },

  buttonText: {
    fontSize: RFPercentage(3),
    width: "50%",
    backgroundColor: "#FFD27A",
    borderRadius: 100,
    padding: "2%",
    left: "25%",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: "5%",
  }
});
