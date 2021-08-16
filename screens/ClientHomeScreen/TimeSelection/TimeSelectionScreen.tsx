import React, { useContext, useState } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { Calendar } from "react-native-calendars";
import { Button, Chip, Title } from "react-native-paper";
import { DateTime } from "luxon";
import { Ionicons } from "@expo/vector-icons";

import { BookingContext } from "../../../context";

// todo container to get available times per day from server
export type TimeSelectionViewProps = {
  // ? move navigation to props for container? see: ClientScheduleScreen
  // navigation: any;
  availableTimes: DateTime[];
  onDateSelect: Function;
};

// todo time slots need to be based on appointment time
// todo for performance later on may need to query appts per month
const TimeSelectionScreen = (props: TimeSelectionViewProps) => {
  const [date, setDate] = useState<string>();
  const { dateTime, setDateTime, services, scheduledAppointments } =
    useContext(BookingContext);
  const apptLength = services.reduce(
    (acc, { lengthInMins }) => acc + lengthInMins,
    0
  );
  const [openTime, closeTime] = ["8:00", "17:00"];
  // ! todo -- Figure out how to do scheduling, available times based on apptLength and already scheduled appts
  // ? i think it might be best to send a request to the server with the approx. appointment time, then return all available times
  // looks like super cuts does a request every time a date is pressed. Return avail times for that day
  // if default will be today, will need initial request for avail times today

  return (
    <View>
      <Button onPress={() => console.log({ dateTime })}>log</Button>
      {/* <Button onPress={() => console.log({ now: DateTime.now() })}>
        log now
      </Button>
      <Button onPress={() => console.log({ appts: scheduledAppointments })}>
        appts
      </Button> */}
      <Calendar
        // ? pry doesn't need to set dateTime, only get values and set it with pill
        onDayPress={(day) => {
          // setDateTime(DateTime.fromISO(day.dateString));
          setDate(day.dateString);
          console.log(day);
          props.onDateSelect();
        }}
        minDate={Date.now()}
        markedDates={{
          [date!]: { selected: true, selectedColor: "#3182CE" },
        }}
      />
      <View style={styles.flex}>
        <Title>Time</Title>
        <Ionicons
          // @ts-ignore
          name="time-outline"
          size={24}
        />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {props.availableTimes.map((x) => (
          <Chip
            style={styles.chips}
            key={x.toString()}
            selected={x === dateTime}
            onPress={() => setDateTime(x)}
          >
            {x.toLocaleString(DateTime.TIME_SIMPLE)}
          </Chip>
        ))}
      </ScrollView>

      {dateTime.toString() !==
        DateTime.local(1998, 8, 15, 17, 55).toString() && (
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => console.log({ dateTime, services })}
        >
          Next
        </Button>
      )}
    </View>
  );
};

export default TimeSelectionScreen;

const styles = StyleSheet.create({
  chips: {
    margin: 5,
    backgroundColor: "#fff",
  },
  container: {
    backgroundColor: "#F0F1F2",
    alignItems: "center",
  },
  button: {
    alignSelf: "center",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
  },
});
