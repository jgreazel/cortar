import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";

import {
  ClientHomeNav,
  NavBarProps,
  NavBar,
  ClientScheduleNav,
  ClientFeedNav,
} from "./navigation";
import { ClientProfileScreen } from "./screens";

const theme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3182CE',
    accent: '#163d61',
  },
};

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
    <PaperProvider theme={theme}>
      <NavigationContainer>
        {/* // NavBar renders the proper screens per routes */}
        <NavBar screens={screens} />
      </NavigationContainer>
    </PaperProvider>
  );
}
