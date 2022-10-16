import { NativeStackScreenProps } from "@react-navigation/native-stack";
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

import StackParamList from "../library/StackParamList";

type SettingsScreenProps = NativeStackScreenProps<StackParamList, "Settings">;

const SettingsScreen: React.FunctionComponent<SettingsScreenProps> = props => {
    const { navigation, route } = props;

    return (
        <SafeAreaView>

        </SafeAreaView>
    );
}

export default SettingsScreen;