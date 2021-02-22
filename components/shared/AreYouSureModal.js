import React from "react";
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

import {
  TEXT,
  SET_COLOR,
  RED,
  LIGHT_BLUE,
  GREEN,
  BLACK,
} from "@assets/Globals";

const AreYouSureModal = (props) => {
  const {
    firstFunction,
    secondFunction,
    isVisible,
    headerMessge,
    subMessage,
    buttonOneValue,
    buttonTwoValue,
  } = props;
  console.log(secondFunction);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          return;
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{headerMessge}</Text>
            <Text style={styles.subText}>{subMessage}</Text>
            <View
              style={{
                marginTop: "10%",
                flexDirection: "row",
                height: Dimensions.get("window").height / 20,
              }}
            >
              <TouchableHighlight
                style={styles.noButton}
                onPress={firstFunction}
              >
                <Text style={styles.buttonTwo}>{buttonTwoValue}</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.yesButton}
                onPress={secondFunction}
              >
                <Text style={styles.buttonOne}>{buttonOneValue}</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalView: {
    backgroundColor: LIGHT_BLUE,
    borderRadius: 20,
    width: "100%",
    height: "40%",
    borderColor: RED,
    borderWidth: 3,
    padding: Dimensions.get("window").width / 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  yesButton: {
    justifyContent: "center",
    backgroundColor: RED,
    borderRadius: 20,
    borderColor: BLACK,
    borderWidth: 1,
    width: "50%",
    height: "100%",
    margin: "3%",
    elevation: 2,
  },
  buttonOne: {
    ...TEXT.SMALLSEMIBOLD,
    textAlign: "center",
    ...SET_COLOR._WHITE,
  },
  noButton: {
    justifyContent: "center",
    backgroundColor: GREEN,
    borderRadius: 20,
    borderColor: BLACK,
    borderWidth: 1,
    width: "50%",
    height: "100%",

    margin: "3%",
    elevation: 2,
  },
  buttonTwo: {
    ...TEXT.SMALLSEMIBOLD,
    ...SET_COLOR._BLACK,
    textAlign: "center",
  },
  modalText: {
    ...TEXT.SEMIBOLD,
    marginBottom: 15,
    textAlign: "center",
  },
  subText: {
    ...TEXT.SMALLSEMIBOLD,
    textAlign: "center",
  },
});

export default AreYouSureModal;
