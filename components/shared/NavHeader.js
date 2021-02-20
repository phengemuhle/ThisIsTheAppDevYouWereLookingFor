import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GLOBAL from "../../assets/Globals";

const NavHeader = ({ pageTitle }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Text style={GLOBAL.TEXT.H2}>{pageTitle}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default NavHeader;
