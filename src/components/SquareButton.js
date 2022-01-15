import React from "react";
import PropTypes from 'prop-types'
import { 
    View,
    StyleSheet, 
    Text,
    TouchableWithoutFeedback
} from "react-native";

export default function SquareButton(props) {

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                props.singleTap(props.value)
            }}
        >
            <View
                style={
                    [
                        styles.button,
                        props.selected ? styles.selectedButton : styles.neutralButton
                    ]
                }
            >
                <Text style={
                    [
                        styles.text,
                        props.selected ? styles.selectedText : styles.neutralText
                    ]
                }
                >
                    {props.displayValue}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

SquareButton.propTypes = {
    selected: PropTypes.bool.isRequired,
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    displayValue: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired
}

const styles = StyleSheet.create({

    button: {
        margin: 5,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1
    },

    text: {
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'transparent'
    },

    selectedButton: {
        borderColor: '#1f83f0'
    },

    neutralButton: {
        borderColor: 'gray'
    },

    selectedText: {
        color: '#1f83f0'
    },

    neutralText: {
        color: 'gray'
    }
})