import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import PageTitle from "./PageTitle";

export default function StartupPage({ navigation }) {
  const [apiResponse, setApiResponse] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle title="Settings" />
      <SafeAreaView style={styles.container}>
        <TouchableOpacity>
          <Text>Settings</Text>
        </TouchableOpacity>
        <Button title="Ping FIRST" onPress={() => fetchFrcApi('events?districtCode=ONT')} />
        <Text>{apiResponse}</Text>
      </SafeAreaView>
    </SafeAreaView>
  );

  async function fetchFrcApi(requestPath) {
    var base64 = require('base-64')

    var username = 'faiazumaer';
    var password = '5fecfbc3-09ce-45a0-bad2-769fd4006781'
    
    var requestOptions = {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + base64.encode(username + ':' + password),
        'If-Modified-Since': ''
      },
      redirect: 'follow'
    };

    const response = await fetch(`https://frc-api.firstinspires.org/v3.0/2022/${requestPath}`, requestOptions)
      .catch(error => console.log('error', error));
    const text = await response.text();
    setApiResponse(await text);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFCC00",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
