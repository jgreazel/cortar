import React from "react";
import { DateTime } from "luxon";

import TimeSelectionView, {
  TimeSelectionViewProps,
} from "./TimeSelectionScreen";

// todo make api fetch, but using mock data for now
const dummyData: TimeSelectionViewProps = {
  availableTimes: [
    DateTime.fromISO("2017-05-15T08:30:00"),
    DateTime.fromISO("2017-05-15T09:00:00"),
    DateTime.fromISO("2017-05-15T10:00:00"),
    DateTime.fromISO("2017-05-15T10:30:00"),
    DateTime.fromISO("2017-05-15T11:00:00"),
    DateTime.fromISO("2017-05-15T11:30:00"),
    DateTime.fromISO("2017-05-15T12:00:00"),
  ],
  onDateSelect: () => {
    console.log("get available times");
  },
};

const TimeSelectionContainer = () => {
  return (
    <TimeSelectionView
      availableTimes={dummyData.availableTimes}
      onDateSelect={dummyData.onDateSelect}
    />
  );
};

export default TimeSelectionContainer;
