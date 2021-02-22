import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from "react-native";

import Header from "@components/shared/Header";

import { MAIN_APP_STYLE, TEXT, SET_COLOR, PROFILE_PIC } from "@assets/Globals";

const HomeScreen = () => {
  return (
    <View style={MAIN_APP_STYLE}>
      <View style={styles.mainCont}>
        <Header firstName="Phillip" lastName="Hengemuhle" image={PROFILE_PIC} />
        <Text style={{ ...TEXT.BOLD, ...SET_COLOR._WHITE }}> Home Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCont: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
});

export default HomeScreen;
