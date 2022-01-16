import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import startupPage from "../components/startupPage";
import pregame from "../components/pregamePage";
import autoPage from "../components/autoPage";
import settingsPage from "../components/settings";
import analysisPage from "../components/analysisPage";
import tierListPage from "../components/tierListPage";
import cameraPage from "../components/cameraPage";

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
        <Stack.Screen name="Settings" component={settingsPage} />
        <Stack.Screen name="Analysis" component={analysisPage} />
        <Stack.Screen name="TierList" component={tierListPage} />
        <Stack.Screen name="Camera" component={cameraPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
