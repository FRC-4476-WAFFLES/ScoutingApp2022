import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import PregameScreen from "../screens/Pregame";
import StackParamList from "../library/StackParamList";
import SettingsScreen from "../screens/Settings";

const Stack = createNativeStackNavigator<StackParamList>();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Home"}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Pregame" component={PregameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;