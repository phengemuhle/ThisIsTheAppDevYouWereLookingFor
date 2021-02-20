import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import GOLBAL from "../../assets/Globals";

const LoadingScreen = () => {
  return (
    <ImageBackground
      source={GOLBAL.BACKGROUND_IMAGE_SOURCE}
      style={GOLBAL.BACKGROUND_IMAGE_STYLE}
    >
      <View style={styles.loadingContainer}>
        <Text
          style={{
            ...GOLBAL.TEXT.H2,
            ...GOLBAL.SET_COLOR._WHITE,
            textAlign: "center",
          }}
        >
          Please Enjoy this adorable doggo while the app is loading
        </Text>
        <Image
          style={styles.image}
          source={{
            uri: "https://media2.giphy.com/media/YnGAt5S2TYrqXhUJlb/source.gif",
          }}
        />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: "2%",
  },
  image: {
    height: "30%",
    width: "90%",
    resizeMode: "cover",
    borderColor: GOLBAL.LIGHT_BLUE,
    borderWidth: 3,
    marginTop: "4%",
  },
});
export default LoadingScreen;
