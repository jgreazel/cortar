import React from "react";
import { DateTime } from 'luxon';

import ClientHomeNav, { ClientHomeNavProps } from "./ClientHomeNav";

// todo make api fetch, but using mock data for now
const dummyData: ClientHomeNavProps = {
  servicesOffered: [
    { name: `Men's Haircut`, lengthInMins: 15 },
    { name: `Women's Haircut`, lengthInMins: 30 },
    { name: `Perm`, lengthInMins: 60 },
    { name: `Coloring`, lengthInMins: 60 },
    { name: `Waxing`, lengthInMins: 30 },
  ],
  scheduledAppointments: [
    { dateTime: DateTime.local(2021, 8, 5, 11, 0), service: "Perm", lengthInMins: 60 },
    {
      dateTime: DateTime.local(2021, 8, 5, 12, 0),
      service: `Men's Haircut`,
      lengthInMins: 15,
    },
    {
      dateTime: DateTime.local(2021, 8, 5, 12, 30),
      service: "Coloring",
      lengthInMins: 60,
    },
    { dateTime: DateTime.local(2021, 8, 5, 14, 0), service: "Waxing", lengthInMins: 30 },
  ],
};

const ClientHomeNavContainer = () => {
  return (
    <ClientHomeNav
      servicesOffered={dummyData.servicesOffered}
      scheduledAppointments={dummyData.scheduledAppointments}
    />
  );
};

export default ClientHomeNavContainer;
