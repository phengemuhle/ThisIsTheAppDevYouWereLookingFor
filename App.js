import React, { Component, useEffect, useState } from "react";
import { AppRegistry } from "react-native";
import * as Font from "expo-font";

import LoadingScreen from "./components/screens/LoadingScreen";

const App = (props) => {
  const [isLoading, setIsLooading] = useState(false);
  useEffect(async () => {
    await Font.loadAsync({
      "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
      "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
      "Montserrat-ExtraBold": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
      "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
      "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    });
    setIsLooading(true);
  }, []);

  return <>{isLoading ? null : <LoadingScreen />}</>;
};
// AppRegistry.registerComponent("ThisIsTheAppYouAreLookingFor", () => App);
export default App;
