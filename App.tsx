import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { NavBar } from "./navigation";

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}>
        <Text>My first react native project and its up on github!</Text>
        <StatusBar style="auto" />
      </View> */}
      <NavBar/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
