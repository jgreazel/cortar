import React from "react";
import { Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

const ClientScheduleScreen = () => (
  <View>
    <Text>Client Schedule Screen</Text>
    <Calendar
      onDayPress={(day) => {
        console.log("selected day", day);
      }}
    />
  </View>
);

export default ClientScheduleScreen;
