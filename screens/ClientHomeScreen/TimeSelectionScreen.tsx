import React, { useContext } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import { Button, Chip } from "react-native-paper";
import { DateTime } from "luxon";

import { BookingContext } from "../../context";

// todo container to get available times per day from server
type Props = {
  navigation: any;
};

// todo time slots need to be based on appointment time
// todo for performance later on may need to query appts per month
const TimeSelectionScreen = (props: Props) => {
  const { dateTime, setDateTime, services, scheduledAppointments } =
    useContext(BookingContext);
  const apptLength = services.reduce(
    (acc, { lengthInMins }) => acc + lengthInMins,
    0
  );
  const [openTime, closeTime] = ["8:00", "17:00"];
  // ! todo for AUG 3 -- Figure out how to do scheduling, available times based on apptLength and already scheduled appts

  return (
    <View>
      <Button onPress={() => console.log({ dateTime })}>log</Button>
      <Button onPress={() => console.log({ now: DateTime.now() })}>
        log now
      </Button>
      <Button onPress={() => console.log({ appts: scheduledAppointments })}>
        appts
      </Button>
      <Calendar
        onDayPress={(day) => setDateTime(DateTime.fromISO(day.dateString))}
        minDate={Date.now()}
        markedDates={{
          [dateTime.toISODate()]: { selected: true, selectedColor: "#3182CE" },
        }}
      />
      <ScrollView
        horizontal
        style={styles.chips}
        showsHorizontalScrollIndicator={false}
      >
        {/* // todo use luxon for datetimes, start at openTime then luxon.plus(minutes: apptLength) */}
        {/* {time && } */}
        {/* <Chip selected={time === "12:00"} onPress={() => setTime("12:00")}>
          12:00
        </Chip>
        <Chip selected={time === "1:00"} onPress={() => setTime("1:00")}>
          1:00
        </Chip>
        <Chip selected={time === "2:00"} onPress={() => setTime("2:00")}>
          2:00
        </Chip>
        <Chip selected={time === "3:00"} onPress={() => setTime("3:00")}>
          3:00
        </Chip>
        <Chip selected={time === "4:00"} onPress={() => setTime("4:00")}>
          4:00
        </Chip>
        <Chip selected={time === "5:00"} onPress={() => setTime("5:00")}>
          5:00
        </Chip>
        <Chip selected={time === "6:00"} onPress={() => setTime("6:00")}>
          6:00
        </Chip>
        <Chip selected={time === "7:00"} onPress={() => setTime("7:00")}>
          7:00
        </Chip> */}
      </ScrollView>

      {dateTime && (
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
    margin: 10,
  },
  container: {
    backgroundColor: "#F0F1F2",
    alignItems: "center",
  },
  button: {
    alignSelf: "center",
  },
});
