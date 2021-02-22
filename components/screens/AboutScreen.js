import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import AboutInfo from "@assets/About.json";
import { LIGHT_BLUE, TEXT } from "../../assets/Globals";

const AboutScreen = () => {
  const textInfo = AboutInfo.map((obj, index) => {
    return (
      <Text key={index} style={TEXT.MEDIUM}>
        {obj.key}
        {"\n"}
      </Text>
    );
  });
  return (
    <View style={styles.mainCont}>
      <ScrollView contentContainerStyle={styles.bodyScroll}>
        {textInfo}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    padding: "2%",
    flexDirection: "column",
    borderWidth: 3,
    borderColor: LIGHT_BLUE,
  },
  bodyScroll: {
    flexDirection: "column",
    justifyContent: "center",
  },
});
export default AboutScreen;
