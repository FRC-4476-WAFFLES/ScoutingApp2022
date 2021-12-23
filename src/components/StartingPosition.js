import React, { useState } from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
import SquareButton from './SquareButton'

const positions = ["LEFT", "CENTER", "RIGHT"]

export default function StartingPosition(props) {
    const [selectedPosition, setSelectedPosition] = useState(0);
    
    return (
        <View style={styles.container}>
            {positions.map(position => (
                <SquareButton
                    key={position}
                    value={position}
                    displayValue={position}
                    selected={selectedPosition === position}
                    singleTap={(valueTap) => setSelectedPosition(valueTap)}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center"
    }
})