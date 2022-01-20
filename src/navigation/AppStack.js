import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import startupPage from "../components/startupPage";
import datatest from "../components/datatest";
import pregame from "../components/pregamePage";
import autoPage from "../components/autoPage";
import MatchPage from "../components/MatchPage";
import QRCodePage from "../components/QRCodePage";

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Startup"
          component={startupPage}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Pregame" component={pregame} />
        <Stack.Screen name="Autonomous" component={autoPage} />
        <Stack.Screen name="Match" component={MatchPage} />
        <Stack.Screen name="QRCode" component={QRCodePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
