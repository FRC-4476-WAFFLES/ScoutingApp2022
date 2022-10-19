import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';

import ScreenTitle from "../components/ScreenTitle";
import StackParamList from "../library/StackParamList";

type QRCodeScreenProps = NativeStackScreenProps<StackParamList, "QRCode">;

const QRCodeScreenProps: React.FunctionComponent<QRCodeScreenProps> = props => {

    return (
        <SafeAreaView>



        </SafeAreaView>
    );
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
