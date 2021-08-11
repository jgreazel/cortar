import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DateTime } from "luxon";

import {
  ActionScreen,
  ServiceSelectionScreen,
  TimeSelectionScreen,
} from "../../screens/ClientHomeScreen";
import { BookingContext, BookingContextData, ApptService } from "../../context";

export type ClientHomeNavProps = {
  servicesOffered: ApptService[];
  scheduledAppointments: {
    dateTime: DateTime;
    service: string;
    lengthInMins: number;
  }[];
};

const Stack = createStackNavigator();

const ClientHomeNav = (props: ClientHomeNavProps) => {
  const [services, setServices] = useState<ApptService[]>([]);
  const [dateTime, setDateTime] = useState<DateTime>(
    DateTime.local(1998, 8, 15, 17, 55)
  );

  const value: BookingContextData = {
    servicesOffered: props.servicesOffered,
    scheduledAppointments: props.scheduledAppointments,
    services,
    setServices,
    dateTime,
    setDateTime,
  };

  return (
    // todo I dont like having the context in this file, move to app.tsx somehow to decouple
    <BookingContext.Provider value={value}>
      <Stack.Navigator>
        {/* // todo maybe move all route strings to a ROUTES file */}
        {/* could separate into different groups inside routes file */}
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
