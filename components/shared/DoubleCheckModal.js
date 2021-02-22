import React from "react";
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ImageBackground,
  Image,
} from "react-native";

import {
  TEXT,
  SET_COLOR,
  RED,
  LIGHT_BLUE,
  GREEN,
  BLACK,
  DOGGO_SOURCE,
  YELLOW,
} from "@assets/Globals";

const DoubleCheckModal = (props) => {
  const {
    firstFunction,
    secondFunction,
    isVisible,
    headerMessge,
    subMessage,
    buttonOneValue,
    buttonTwoValue,
  } = props;

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
            <View style={styles.image}>
              <Image style={{ flex: 1 }} source={DOGGO_SOURCE} />
            </View>
            <View
              style={{
                marginTop: "10%",
                flexDirection: "row",
                justifyContent: "space-around",
                width: Dimensions.get("window").width * 0.9,
                height: Dimensions.get("window").height / 14,
              }}
            >
              <View style={styles.buttonCont}>
                <TouchableHighlight
                  style={styles.buttonOne}
                  onPress={firstFunction}
                >
                  <Text style={styles.buttonOneTextStyle}>
                    {buttonOneValue}
                  </Text>
                </TouchableHighlight>
              </View>
              <View style={styles.buttonCont}>
                <TouchableHighlight
                  style={styles.buttonTwo}
                  onPress={secondFunction}
                >
                  <Text style={styles.buttonTwoTextStyle}>
                    {buttonTwoValue}
                  </Text>
                </TouchableHighlight>
              </View>
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
  buttonCont: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: LIGHT_BLUE,
    borderRadius: 20,
    width: "95%",
    borderColor: RED,
    borderWidth: 3,
    padding: Dimensions.get("window").width / 30,
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
  buttonOne: {
    justifyContent: "center",
    alignContent:"center",
    backgroundColor: RED,
    borderRadius: 20,
    borderColor: BLACK,
    borderWidth: 1,
    width: "47%",
    height: "100%",
    // margin: "3%",
    elevation: 2,
  },
  buttonOneTextStyle: {
    ...TEXT.SMALLSEMIBOLD,
    textAlign: "center",
    ...SET_COLOR.BLACK,
  },
  buttonTwo: {
    justifyContent: "center",
    backgroundColor: GREEN,
    borderRadius: 20,
    borderColor: BLACK,
    borderWidth: 1,
    width: "47%",
    height: "100%",

    // margin: "3%",
    elevation: 2,
  },
  buttonTwoTextStyle: {
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
  image: {
    height: "50%",
    width: "100%",
    borderColor: YELLOW,
    overflow: "hidden",
    borderWidth: 3,
    borderRadius: 10,
    marginTop: "8%",
  },
});

export default DoubleCheckModal;
