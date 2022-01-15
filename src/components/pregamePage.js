import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Button
} from "react-native";

import PageTitle from './PageTitle'
import StartingPosition from "./StartingPosition";

export default function pregamePage({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>
                <PageTitle title="Pre-Game" />
                <View>
                    <Text>Starting Position</Text>
                    <StartingPosition />
                    <Button onPress={() => navigation.navigate("Autonomous")} title="Autonomous"></Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}