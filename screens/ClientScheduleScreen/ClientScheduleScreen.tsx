import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import { Button, Card, Divider } from "react-native-paper";
import { DateTime } from "luxon";

import { Appointment } from "../../schema";

export type ClientScheduleScreenProps = {
  scheduledAppointments: Appointment[];
  navigateHome: () => Function;
};

// todo below calendar, card showing appintments on selectedDate
const ClientScheduleScreen = (props: ClientScheduleScreenProps) => {
  const [selectedDate, setSelectedDate] = useState(
    props.scheduledAppointments[0].dateTime
  );

  // todo would like to show 1 dot per appt. on each day (to an extent)
  const getMarkedDates = () => {
    // todo markedDates need typed
    const markedDates: any = {};
    props.scheduledAppointments.forEach((x: Appointment) => {
      markedDates[x.dateTime.toFormat("yyyy-MM-dd")] = { marked: true };
    });
    markedDates[selectedDate.toFormat("yyyy-MM-dd")] = {
      ...markedDates[selectedDate.toFormat("yyyy-MM-dd")],
      selected: true,
    };
    return markedDates;
  };

  const noAppts = (
    <View>
      <Text>You don't have any appointments scheduled!</Text>
      <Button mode="contained" onPress={props.navigateHome}>
        Book Now!
      </Button>
    </View>
  );

  // todo may need to add barber and client names to Appointment type
  return props.scheduledAppointments.length > 0 ? (
    <View>
      {/* <Button onPress={() => console.log({ selectedDate, props })}>log</Button> */}
      <Calendar
        onDayPress={(day) => {
          setSelectedDate(DateTime.fromISO(day.dateString));
          console.log({ selectedDate });
        }}
        minDate={DateTime.now().toFormat("yyyy-MM-dd")}
        markedDates={getMarkedDates()}
      />
      <Card style={styles.card}>
        <Card.Title
          title={selectedDate.toLocaleString(DateTime.DATE_HUGE)}
          // subtitle="Card Subtitle"
        />
        <Card.Content>
          <Divider />
          {props.scheduledAppointments
            .filter(
              (x) =>
                x.dateTime.toFormat("yyyy-MM-dd") ===
                selectedDate.toFormat("yyyy-MM-dd")
            )
            .map((filteredDate, idx) => (
              <View key={idx}>
                <View style={styles.row}>
                  <Text style={styles.bold}>
                    {filteredDate.dateTime.toLocaleString(DateTime.TIME_SIMPLE)}
                  </Text>
                  <Text style={styles.normal}>
                    {filteredDate.service.title}
                  </Text>
                </View>
                <Divider />
              </View>
            ))}
        </Card.Content>
      </Card>
    </View>
  ) : (
    noAppts
  );
};

export default ClientScheduleScreen;

const styles = StyleSheet.create({
  card: {
    width: "90%",
    margin: 8,
    alignSelf: "center",
  },
  bold: {
    fontWeight: "bold",
    flex: 1,
  },
  normal: {
    flex: 3,
  },
  row: {
    flexDirection: "row",
    height: 50,
    display: "flex",
    alignItems: "center",
  },
});
