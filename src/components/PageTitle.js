import React from 'react';
import { View, Text, StyleSheet, StatusBar, Dimensions } from "react-native";
import styles from "../styles/styles";
import dataStyle from '../styles/dataStyle';

const PageTitle = ({ text }) => {
    return (
        <View style={dataStyle.container}>
            <Text style={dataStyle.title}>{ text }</Text>
            <View style={dataStyle.bar}></View>
        </View>
    )
}

export default PageTitle;