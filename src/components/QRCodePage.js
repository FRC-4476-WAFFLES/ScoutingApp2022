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
import ViewShot from "react-native-view-shot";

export default function QRCodePage({ route, navigation }) {
  React.useEffect()

  return (
    <SafeAreaView>
      <ScrollView>
        <PageTitle title={"QR Code"} />
        <ViewShot ref="viewShot" options={{ format: "jpg", quality: 0.9 }}>
          <View style={styles.qrcodeContainer}>
            <QRCode value={route.params.data} size={300} />
          </View>
        </ViewShot>
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
