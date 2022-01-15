import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView
} from "react-native";

import PageTitle from './PageTitle'
import StartingPosition from "./StartingPosition";

export default function pregamePage(props) {
    return (
        <SafeAreaView>
            <ScrollView>
                <PageTitle title="Pre-Game" />
                <View>
                    <Text>Starting Position</Text>
                    <StartingPosition />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}