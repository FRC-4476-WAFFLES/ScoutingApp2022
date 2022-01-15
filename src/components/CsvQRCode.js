import React, { Component } from 'react';
import { Image } from 'react-native';

import styles from '../styles/styles';

class CsvQRCode extends Component {

    generateQRCode(rawCsv) {
        // Generate QR Code from raw text CSV
    }

    return() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.QRCode}
                    source={} // Get QR Code
                />
            </View>
        )
    }
};