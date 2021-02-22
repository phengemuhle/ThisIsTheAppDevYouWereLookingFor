import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {
    MAIN_APP_STYLE,
    TEXT,
  } from "@assets/Globals";

const ResumeScreen = () => {
  return (
    <View style={{...MAIN_APP_STYLE, alignItems:"center", justifyContent:"center"}}>
      <Text style={{...TEXT.BOLD, textAlign:"center"}}>Please reach out for a copy!</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default ResumeScreen;
