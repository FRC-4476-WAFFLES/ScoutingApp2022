import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    Image
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import PageTitle from './PageTitle';

export default function QRCodePage({ route, navigation }) {

    return (
        <SafeAreaView>
            <ScrollView>
                <PageTitle title={"QR Code"} />
                <QRCode value={route.params.data} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})