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
import AreYouSureModal from "@components/shared/AreYouSureModal";
import DoubleCheckModal from "@components/shared/DoubleCheckModal";

const ChoiceScreen = (props) => {
  const { sendHome } = props;
  const [doubleCheck, setDoubleCheck] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    return;
  }, [modalVisible, doubleCheck]);
    
  const changeModalVisibility = () => {
    setModalVisible(!modalVisible);
  };

  const changeDoubleCheck = () => {
    console.log(doubleCheck);
    console.log("pressed");
    setDoubleCheck(!doubleCheck);
    console.log(doubleCheck);
  };

  return (
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
            Are you ready to meet your next team member?
          </Text>
        </View>
        <View style={styles.buttonCont}>
          <TouchableOpacity
            style={styles.noButton}
            onPress={changeModalVisibility}
          >
            <Text style={{ ...TEXT.SEMIBOLD }}>No</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.yesButton} onPress={sendHome}>
            <Text style={{ ...TEXT.SEMIBOLD }}>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
      <AreYouSureModal
        isVisible={modalVisible}
        yesValue={"I'm not ready"}
        noValue={"Let's try again!"}
        headerMessge={"Are you sure?"}
        subMessage={"Think of butterfly effect of your decision..."}
        firstFunction={changeModalVisibility}
        secondFunction={changeDoubleCheck}
      />
      <DoubleCheckModal
        isVisible={doubleCheck}
        yesValue={"Bummer"}
        noValue={"I now see my error!"}
        headerMessge={"Are you sure?"}
        subMessage={
          "Please Enjoy this adorable doggo while rethinking your decision."
        }
        firstFunction={changeDoubleCheck}
        secondFunction={changeDoubleCheck}
      />
    </ImageBackground>
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
  noButton: {
    width: "40%",
    padding: "1%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: RED,
    ...SET_COLOR.RED,
  },
  yesButton: {
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
