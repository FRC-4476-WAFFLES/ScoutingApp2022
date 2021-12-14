import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from '../styles/styles';

class HelloWorld extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Hello World!</Text>
                <StatusBar style="auto" />
            </View>
        )
    }
}

export default HelloWorld;