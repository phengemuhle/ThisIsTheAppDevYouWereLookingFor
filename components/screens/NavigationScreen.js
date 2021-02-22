import * as React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./HomeScreen";
import ChoiceScreen from "./welcome/ChoiceScreen";

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const LogOutStack = createStackNavigator();

function LogOutStackNavigation({ navigation }) {
  return (
    <LogOutStack.Navigator
      initialRouteName="Log Out"
      screenOptions={{ headerShown: false }}
    >
      <LogOutStack.Screen name="Log Out" component={ChoiceScreen} />
    </LogOutStack.Navigator>
  );
}
function HomeStackNavigation({ navigation }) {
  return (
    <HomeStack.Navigator
      initialRouteName="Dev Profile"
      screenOptions={{
        headerTitle: "Dev Profile",
        headerTitleStyle: {
          textAlign: "center",
          justifyContent: "center",
        },
        headerLeft: () => (
          <Icon
            style={{ paddingLeft: 10, zIndex: 1000 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerRight: () => <View style={{ paddingRight: 10 }}></View>,
      }}
    >
      <HomeStack.Screen name="Dev Profile" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

export default () => {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Dev Profile">
          <Drawer.Screen name="Dev Profile" component={HomeStackNavigation} />
          <Drawer.Screen name="About" component={HomeStackNavigation} />
          <Drawer.Screen name="Projects" component={HomeStackNavigation} />
          <Drawer.Screen name="Resume" component={HomeStackNavigation} />
          <Drawer.Screen name="Panzer" component={HomeStackNavigation} />
          <Drawer.Screen name="Log Out" component={LogOutStackNavigation} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};
