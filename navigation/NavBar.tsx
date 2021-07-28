import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ClientHomeNav from "./ClientHomeNav";
import { ClientFeedScreen, ClientProfileScreen, ClientScheduleScreen } from "../screens";

const Tab = createBottomTabNavigator();

// Todo: modularization
// todo: will probably end up needing to split logic between client and barber
const NavBar = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === "Home")
          return (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={size}
            />
          );
        if (route.name === "Schedule")
          return (
            <Ionicons
              name={focused ? "calendar" : "calendar-outline"}
              color={color}
              size={size}
            />
          );
        if (route.name === "Feed")
          return (
            <Ionicons
              name={focused ? "newspaper" : "newspaper-outline"}
              color={color}
              size={size}
            />
          );
        if (route.name === "Profile")
          return (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={color}
              size={size}
            />
          );
        return null;
      },
    })}
  >
    <Tab.Screen name="Home" component={ClientHomeNav} />
    <Tab.Screen name="Schedule" component={ClientScheduleScreen} />
    <Tab.Screen name="Feed" component={ClientFeedScreen} />
    <Tab.Screen name="Profile" component={ClientProfileScreen} />
  </Tab.Navigator>
);

export default NavBar;
