import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { NavBar } from "./navigation";

export default function App() {
  return (
    <NavigationContainer>
      {/* // NavBar renders the proper screens per routes */}
      <NavBar />
    </NavigationContainer>
  );
}
