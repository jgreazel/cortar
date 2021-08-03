import { DateTime } from "luxon";

export type ApptService = {
  name: string;
  lengthInMins: number;
};

export type BookingContextData = {
  servicesOffered: ApptService[];
  scheduledAppointments: {
    dateTime: DateTime;
    service: string;
    lengthInMins: number;
  }[];

  services: ApptService[];
  dateTime: DateTime;

  setServices: Function;
  setDateTime: Function;
};
