import * as React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./HomeScreen";

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();

function HomeStackNavigation({navigation}) {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitle: "Home",
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
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
