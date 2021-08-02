import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { ClientHomeNav, NavBarProps, NavBar } from "./navigation";
import {
  ClientFeedScreen,
  ClientScheduleScreen,
  ClientProfileScreen,
} from "./screens";

const screens: NavBarProps["screens"] = [
  { name: "Home", component: ClientHomeNav, iconString: "home" },
  { name: "Schedule", component: ClientScheduleScreen, iconString: "calendar" },
  { name: "Feed", component: ClientFeedScreen, iconString: "newspaper" },
  { name: "Profile", component: ClientProfileScreen, iconString: "person" },
];

export default function App() {
  return (
    <NavigationContainer>
      {/* // NavBar renders the proper screens per routes */}
      <NavBar screens={screens} />
    </NavigationContainer>
  );
}
