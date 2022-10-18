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
    Dimensions
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import ScreenTitle from "../components/ScreenTitle";
import PullUpArrow from "../components/PullUpArrow";
import DropDownArrow from "../components/DropDownArrow";
import StackParamList from "../library/StackParamList";

type MatchScreenProps = NativeStackScreenProps<StackParamList, "Match">;

const MatchScreen: React.FunctionComponent<MatchScreenProps> = props => {
    const { navigation, route } = props;

    return (
        <SafeAreaView>

        </SafeAreaView>
    );
}

export default MatchScreen;
