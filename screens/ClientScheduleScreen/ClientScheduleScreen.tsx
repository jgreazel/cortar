import React, { useState } from "react";
import { Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { Button } from "react-native-paper";
import { DateTime } from "luxon";

import { Appointment } from "../../schema";

export type ClientScheduleScreenProps = {
  scheduledAppointments: Appointment[];
  navigateHome: () => Function;
};

// todo below calendar, card showing appintments on selectedDate
const ClientScheduleScreen = (props: ClientScheduleScreenProps) => {
  const [selectedDate, setSelectedDate] = useState(
    props.scheduledAppointments[0]?.dateTime
  );

  const getMarkedDates = () => {
    // todo markedDates need typed
    const markedDates = {};
    props.scheduledAppointments.forEach((x: Appointment) => {
      markedDates[x.dateTime.toFormat("yyyy-MM-dd")] = { marked: true };
    });
    return markedDates;
  }

  const noAppts = (
    <View>
      <Text>You don't have any appointments scheduled!</Text>
      <Button mode="contained" onPress={props.navigateHome}>
        Book Now!
      </Button>
    </View>
  );

  // const markedDates = props.scheduledAppointments.forEach(x )

  return props.scheduledAppointments.length > 0 ? (
    <View>
      <Calendar
        onDayPress={(day) => {
          setSelectedDate(DateTime.fromISO(day.dateString));
          console.log({ selectedDate });
        }}
        minDate={DateTime.now().toFormat("yyyy-MM-dd")}
        markedDates={getMarkedDates()}
      />
    </View>
  ) : (
    noAppts
  );
};

export default ClientScheduleScreen;
