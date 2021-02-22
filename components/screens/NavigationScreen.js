import * as React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./HomeScreen";
import ChoiceScreen from "./welcome/ChoiceScreen";
import AboutScreen from "./AboutScreen";
import PanzerScreen from "./PanzerScreen";
import ResumeScreen from "./ResumeScreen";

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const LogOutStack = createStackNavigator();
const AboutStack = createStackNavigator();
const PanzerStack = createStackNavigator();
const ResumeStack = createStackNavigator();

function ResumeStackNavigation({ navigation }) {
  return (
    <ResumeStack.Navigator
      initialRouteName="Resume"
      screenOptions={{
        headerTitle: "Resume",
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
      <ResumeStack.Screen name="Resume" component={ResumeScreen} />
    </ResumeStack.Navigator>
  );
}
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
function PanzerStackNavigation({ navigation }) {
  return (
    <PanzerStack.Navigator
      initialRouteName="Panzer Profile"
      screenOptions={{
        headerTitle: "Panzer Profile",
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
      <PanzerStack.Screen name="Panzer Profile" component={PanzerScreen} />
    </PanzerStack.Navigator>
  );
}
function AboutStackNavigation({ navigation }) {
  return (
    <AboutStack.Navigator
      initialRouteName="About"
      screenOptions={{
        headerTitle: "About",
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
      <AboutStack.Screen name="About" component={AboutScreen} />
    </AboutStack.Navigator>
  );
}

export default () => {
  return (
    <>
      <NavigationContainer independent={true}>
        <Drawer.Navigator initialRouteName="Dev Profile">
          <Drawer.Screen name="Dev Profile" component={HomeStackNavigation} />
          <Drawer.Screen name="About" component={AboutStackNavigation} />
          <Drawer.Screen name="Resume" component={ResumeStackNavigation} />
          <Drawer.Screen
            name="Panzer Profile"
            component={PanzerStackNavigation}
          />
          <Drawer.Screen name="Log Out" component={LogOutStackNavigation} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};
