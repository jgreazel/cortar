import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
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
    primary: "#3182CE",
    accent: "#163d61",
  },
};

const client = new ApolloClient({
  // this machine's local ip, not 'localhost'
  uri: "http://192.168.0.192:3000/graphql",
  cache: new InMemoryCache(),
});

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
    <ApolloProvider client={client}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          {/* // NavBar renders the proper screens per routes */}
          <NavBar screens={screens} />
        </NavigationContainer>
      </PaperProvider>
    </ApolloProvider>
  );
}
