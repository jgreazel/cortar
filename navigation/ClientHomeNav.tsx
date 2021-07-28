import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ActionScreen,
  ServiceSelectionScreen,
  TimeSelectionScreen,
} from "../screens/ClientHomeScreen";
import { BookingContext, BookingContextData } from "../context";

const Stack = createStackNavigator();

const ClientHomeNav = () => {
  const [services, setServices] = useState<string[]>([]);
  const [date, setDate] = useState<Date>();
  const value: BookingContextData = { services, setServices, date, setDate };

  return (
    <BookingContext.Provider value={value}>
      <Stack.Navigator>
        {/* // todo maybe move all route strings to a ROUTES file */}
        {/* could separate into different groups */}
        <Stack.Screen
          name="Action"
          component={ActionScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Service"
          component={ServiceSelectionScreen}
          options={{ title: "Select A Service" }}
        />
        <Stack.Screen
          name="Time"
          component={TimeSelectionScreen}
          options={{ title: "Book A Time" }}
        />
      </Stack.Navigator>
    </BookingContext.Provider>
  );
};

export default ClientHomeNav;
