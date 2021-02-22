import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { PROFILE_PIC, TEXT, LIGHT_BLUE } from "@assets/Globals";

const Header = (props) => {
  const { firstName, lastName, image } = props;
  return (
    <View style={styles.headerMainCont}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginHorizontal: "5%",
        }}
      >
        <View style={styles.imageCont}>
          <Image style={styles.image} source={image} />
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={TEXT.SEMIBOLD}>{firstName}</Text>
          <Text style={TEXT.SEMIBOLD}>{lastName}</Text>
        </View>
      </View>
      <View
        style={{
          borderWidth: 2.6,
          borderColor: LIGHT_BLUE,
          width: "100%",
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  headerMainCont: {
    height: "100%",
    width: "100%",
  },
  imageCont: {
    width: Dimensions.get("window").width*.35,
    height:"80%",
    backgroundColor: "#141312",
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
    borderWidth: 3,
    borderColor: LIGHT_BLUE,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
});
export default Header;
