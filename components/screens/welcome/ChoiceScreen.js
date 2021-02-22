import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {
  BACKGROUND_SOURCE,
  BACKGROUND_STYLE,
  TEXT,
  SET_COLOR,
  RED,
  GREEN,
} from "@assets/Globals";
import NavigationScreen from "@components/screens/NavigationScreen";
import DoubleCheckModal from "@components/shared/DoubleCheckModal";

const ChoiceScreen = () => {
  const [sendHome, setSendHome] = useState(false);
  const [doubleCheck, setDoubleCheck] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
  }, [doubleCheck, modalVisible, sendHome]);
  const changeModalVisibility = () => {
    setModalVisible(!modalVisible);
  };
  const mistakeCheck = () => {
    setModalVisible(!modalVisible);
    setDoubleCheck(true);
  };

  return (
    <>
      {sendHome ? (
        <NavigationScreen />
      ) : (
        <ImageBackground source={BACKGROUND_SOURCE} style={BACKGROUND_STYLE}>
          <View style={styles.mainCont}>
            <View style={{ height: "20%", justifyContent: "center" }}>
              <Text
                style={{
                  ...TEXT.SEMIBOLD,
                  ...SET_COLOR._WHITE,
                  textAlign: "center",
                }}
              >
                Are you ready to meet your next team members?
              </Text>
              <Text
                style={{
                  ...TEXT.SMALLSEMIBOLD,
                  ...SET_COLOR._WHITE,
                  textAlign: "center",
                }}
              >
                We come as a pair!
              </Text>
            </View>
            <View style={styles.buttonCont}>
              {doubleCheck ? null : (
                <TouchableOpacity
                  style={styles.buttoneTwo}
                  onPress={changeModalVisibility}
                >
                  <Text style={{ ...TEXT.SEMIBOLD }}>No</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={styles.buttonOne}
                onPress={() => setSendHome(!sendHome)}
              >
                <Text style={{ ...TEXT.SEMIBOLD }}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
          <DoubleCheckModal
            isVisible={modalVisible}
            buttonOneValue={"I'm confused"}
            buttonTwoValue={"I see my error!"}
            headerMessge={"Are you sure?"}
            subMessage={
              "Please Enjoy this adorable doggo while rethinking your decision."
            }
            firstFunction={changeModalVisibility}
            secondFunction={mistakeCheck}
          />
        </ImageBackground>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  mainCont: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonCont: {
    height: "20%",
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttoneTwo: {
    width: "40%",
    padding: "1%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: RED,
    ...SET_COLOR.RED,
  },
  buttonOne: {
    width: "40%",
    padding: "1%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GREEN,
    ...SET_COLOR.GREEN,
  },
});
export default ChoiceScreen;
