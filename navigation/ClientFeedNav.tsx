import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ClientFeedScreen } from "../screens";

const Stack = createStackNavigator();

const ClientFeedNav = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Schedule"
      component={ClientFeedScreen}
      options={{
        title: "Newsfeed",
        headerStyle: {
          backgroundColor: "#3182CE",
        },
        headerTintColor: "#fff",
      }}
    />
  </Stack.Navigator>
);

export default ClientFeedNav;
