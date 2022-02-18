import React from "react";
import PropTypes from "prop-types";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SquareButton(props) {
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback
        onPress={() => {
          props.singleTap(props.value);
        }}
      >
        <View
          style={[
            styles.button,
            props.selected ? styles.selectedButton : styles.neutralButton,
          ]}
        >
          <Text
            style={[
              styles.text,
              props.selected ? styles.selectedText : styles.neutralText,
            ]}
          >
            {props.displayValue}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

SquareButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  displayValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

const styles = StyleSheet.create({
  button: {
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    width: Dimensions.get("screen").width * 0.8,
    height: 50,
  },

  text: {
    textAlign: "center",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "transparent",
  },

  selectedButton: {
    borderColor: "#1f83f0",
    backgroundColor: "#C6FFBD",
  },

  neutralButton: {
    borderColor: "gray",
    backgroundColor: "#BDD0FF",
  },

  selectedText: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },

  neutralText: {
    color: "gray",
    fontSize: 20,
  },
});
