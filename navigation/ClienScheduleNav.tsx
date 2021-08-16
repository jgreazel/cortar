import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ClientScheduleScreen } from "../screens";

const Stack = createStackNavigator();

const ClientScheduleNav = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Schedule"
      component={ClientScheduleScreen}
      options={{
        title: "Schedule",
        headerStyle: {
          backgroundColor: "#3182CE",
        },
        headerTintColor: "#fff",
      }}
    />
  </Stack.Navigator>
);

export default ClientScheduleNav;
