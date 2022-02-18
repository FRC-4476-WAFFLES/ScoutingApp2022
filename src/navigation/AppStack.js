import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import startupPage from "../components/startupPage";
import pregame from "../components/pregamePage";
<<<<<<< HEAD
import autoPage from "../components/autoPage";
import MatchPage from "../components/MatchPage";
import QRCodePage from "../components/QRCodePage";
=======
// import autoPage from "../components/autoPage";
import settingsPage from "../components/settings";
import analysisPage from "../components/analysisPage";
import tierListPage from "../components/tierListPage";
import cameraPage from "../components/cameraPage";
import matchPage from "../components/MatchPage";
>>>>>>> 34d7bd3c873d50dfe11aeccf95de18dd3e510e41

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
<<<<<<< HEAD
        <Stack.Screen name="Autonomous" component={autoPage} />
        <Stack.Screen name="Match" component={MatchPage} />
        <Stack.Screen name="QRCode" component={QRCodePage} />
=======
        {/* <Stack.Screen name="Autonomous" component={autoPage} /> */}
        <Stack.Screen name="Settings" component={settingsPage} />
        <Stack.Screen name="Analysis" component={analysisPage} />
        <Stack.Screen name="TierList" component={tierListPage} />
        <Stack.Screen name="Camera" component={cameraPage} />
        <Stack.Screen name="Match" component={matchPage} />
>>>>>>> 34d7bd3c873d50dfe11aeccf95de18dd3e510e41
      </Stack.Navigator>
    </NavigationContainer>
  );
}
