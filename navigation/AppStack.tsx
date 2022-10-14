import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import routes from "../config/routes";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Home"}>
        {routes.map((route, index) => (
          <Stack.Screen key={index} name={route.name} component={route.component as React.FunctionComponent<{}>} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;