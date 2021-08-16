import React from "react";
import { DateTime } from "luxon";

import ClientScheduleScreenView, {
  ClientScheduleScreenProps,
} from "./ClientScheduleScreen";
import { Services } from "../../schema";

// todo make api fetch, but using mock data for now
const dummyData: ClientScheduleScreenProps = {
  scheduledAppointments: [
    {
      service: Services.ADULTCUT,
      clientNote: "Wanting to try a new look ;)",
      dateTime: DateTime.fromISO("2021-08-25T08:30:00"),
    },
  ],
  navigateHome: () => () => {},
};

type Props = {
  navigation: any;
};

const ScheduleScreenContainer = (props: Props) => {
  return (
    <ClientScheduleScreenView
      scheduledAppointments={dummyData.scheduledAppointments}
      navigateHome={() => props.navigation.navigate("Home")}
    />
  );
};

export default ScheduleScreenContainer;
