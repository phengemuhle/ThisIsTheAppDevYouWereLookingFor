import React from "react";
import {
  useFonts,
  Muli_300Light,
  Muli_400Regular,
  Muli_500Medium,
  Muli_600SemiBold,
  Muli_700Bold,
} from "@expo-google-fonts/muli";

import AppLoading from "expo-app-loading";
import WelcomeScreen from "./components/screens/welcome/WelcomeScreen";

const App = () => {
  const [loaded] = useFonts({
    Muli_300Light,
    Muli_400Regular,
    Muli_500Medium,
    Muli_600SemiBold,
    Muli_700Bold,
  });

  if (!loaded) {
    return <AppLoading/>;
  }
  return <WelcomeScreen />;
};
export default App;
