import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from "react-native";

import Header from "@components/shared/Header";
import {BACKGROUND_SOURCE, BACKGROUND_STYLE, TEXT, SET_COLOR} from "@assets/Globals";

const HomeScreen = () => {
  return (
    <ImageBackground
      source={BACKGROUND_SOURCE}
      style={BACKGROUND_STYLE}
    >
      <View style={styles.mainCont}>
        <Header />
        <Text style={{...TEXT.BOLD, ...SET_COLOR._WHITE}}> Home Screen</Text>
      </View>
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
});

export default HomeScreen;
