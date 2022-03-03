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
                <View style={styles.qrcodeContainer}>
                    <QRCode 
                        value={route.params.data} 
                        size={550}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    qrcodeContainer: {
        marginTop: 150,
        marginLeft: 20
    }
})