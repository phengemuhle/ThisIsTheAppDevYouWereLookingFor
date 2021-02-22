import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";

import Header from "@components/shared/Header";
import infoFile from "@assets/Info.json";
import {
  MAIN_APP_STYLE,
  TEXT,
  LIGHT_BLUE,
  PROFILE_PIC,
  SEAFOAM,
} from "@assets/Globals";

const HomeScreen = () => {
  const info = infoFile.map((obj) => {
    return (
      <View key={obj.key} style={styles.infoCard}>
        <View style={styles.infoRow}>
          <Text style={{ ...TEXT.SEMIBOLD }}>{obj.key}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={{ ...TEXT.SMALLSEMIBOLD, marginLeft: "5%" }}>
            {obj.value}
          </Text>
        </View>
      </View>
    );
  });
  return (
    <View style={MAIN_APP_STYLE}>
      <View style={styles.mainCont}>
        <View style={{ maxHeight: "30%", marginBottom: "0%" }}>
          <Header
            firstName="Phillip"
            lastName="Hengemuhle"
            image={PROFILE_PIC}
          />
        </View>

        <View
          style={{
            height: "68%",
            paddingBottom: "10%",
            flexDirection: "column",
          }}
        >
          <ScrollView contentContainerStyle={styles.bodyScroll}>
            {info}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCont: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  bodyScroll: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  infoCard: {
    flexDirection: "column",
    width: Dimensions.get("window").width * 0.95,
    borderRadius: 10,
    borderColor: LIGHT_BLUE,
    borderWidth: 1,
    padding: "2%",
    backgroundColor: SEAFOAM,
    marginBottom: "2%",
  },
  infoRow: {
    flexDirection: "row",
  },
});

export default HomeScreen;
