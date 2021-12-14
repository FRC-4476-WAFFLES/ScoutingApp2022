import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import startupPage from '../components/startupPage';
import datatest from '../components/datatest';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Startup"
              component={startupPage}
              options={{ title: 'Welcome' }}
            />
            <Stack.Screen name="datatest" component={datatest} />
          </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppStack;