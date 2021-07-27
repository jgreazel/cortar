import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

import { ClientHomeScreen, ClientScheduleScreen } from "../screens";

const Tab = createBottomTabNavigator();

const NavBar = () => (
  // icons not working
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === "Home")
          return (
            <Ionicons name="ios-information-circle" color={color} size={size} />
          );
        if (route.name === "Schedule")
          return <Ionicons name="calendar" color={color} size={size} />;
        return null;
      },
    })}
  >
    <Tab.Screen name="Home" component={ClientHomeScreen} />
    <Tab.Screen name="Schedule" component={ClientScheduleScreen} />
  </Tab.Navigator>
);

export default NavBar;
