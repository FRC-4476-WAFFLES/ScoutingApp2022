import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import PregameScreen from "../screens/Pregame";
import StackParamList from "../library/StackParamList";
import SettingsScreen from "../screens/Settings";
import MatchScreen from "../screens/Match";
import QRCodeScreen from "../screens/QRCode";

const Stack = createNativeStackNavigator<StackParamList>();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Home"}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Pregame" component={PregameScreen} />
        <Stack.Screen name="Match" component={MatchScreen} />
        <Stack.Screen name="QRCode" component={QRCodeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;