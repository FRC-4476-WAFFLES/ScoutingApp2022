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

export default function QRCodePage({ route, navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <PageTitle title={"QR Code"} />
        <View style={styles.qrcodeContainer}>
          <QRCode value={route.params.data} size={300} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  qrcodeContainer: {
    marginTop: "10%",
    marginLeft: "10%",
  },
});
