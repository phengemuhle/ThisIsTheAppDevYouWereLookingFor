import React from "react";
import { View, Text, ImageBackground, Dimensions, StyleSheet } from "react-native";

import Header from "../shared/Header";
import GLOBAL from "../../assets/Globals";

const HomeScreen = () => {
  return (
    <ImageBackground
      //   source={GOLBAL.BACKGROUND_SOURCE}
      style={GLOBAL.BACKGROUND_STYLE}
    >
      <View style={styles.mainCont}>
        <Header />
        <Text> Home Screen</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainCont: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
