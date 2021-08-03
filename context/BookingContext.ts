import React from "react";
import { DateTime } from "luxon";

import { BookingContextData } from ".";

// todo give types to store avail. services, dates, times for appts. from container comp.
const BookingContext = React.createContext<BookingContextData>({
  servicesOffered: [],
  scheduledAppointments: [],

  services: [],
  dateTime: DateTime.now(),

  setServices: () => {},
  setDateTime: () => {},
});

BookingContext.displayName = "BookingContext";

export default BookingContext;
