import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import {
  ClientHomeNav,
  NavBarProps,
  NavBar,
  ClientScheduleNav,
  ClientFeedNav
} from "./navigation";
import { ClientProfileScreen } from "./screens";

const screens: NavBarProps["screens"] = [
  { name: "Home", component: ClientHomeNav, iconString: "home" },
  {
    name: "Schedule",
    component: ClientScheduleNav,
    iconString: "calendar",
  },
  { name: "Feed", component: ClientFeedNav, iconString: "newspaper" },
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
