import { registerRootComponent } from 'expo';
import React from 'react';
import AppStack from "./navigation/AppStack";

const App = () => {
  return <AppStack />
}

registerRootComponent(App);