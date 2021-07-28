import React, { useContext } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import { Button, Chip } from "react-native-paper";

import { BookingContext } from "../../context";

// todo container to get available times per day from server
type Props = {
  navigation: any;
};

const TimeSelectionScreen = (props: Props) => {
  const { date, setDate, time, setTime } = useContext(BookingContext);

  return (
    <View >
      <Button onPress={() => console.log({ date, time })}>log</Button>
      <Calendar
        onDayPress={(day) => setDate(day.dateString)}
        minDate={Date.now()}
        markedDates={{ [date!]: { selected: true, selectedColor: "blue" } }}
      />
      <ScrollView
        horizontal
        style={styles.chips}
        showsHorizontalScrollIndicator={false}
      >
        <Chip selected={time === "12:00"} onPress={() => setTime("12:00")}>
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
        </Chip>
      </ScrollView>

      {(date && time) && (
        <Button
        style={styles.button}
          mode="contained"
          onPress={() => props.navigation.navigate("")}
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
      alignSelf: 'center'
  }
});
