import { DateTime } from "luxon";

export type Appointment = {
  service: Service;
  clientNote: string;
  dateTime: DateTime;
};

export type Service = {
  title: string;
  length: number;
};

// should probably be defined by barber through web portal and come from server
// they should define string desc and short code?
export const Services = {
  ADULTCUT: { title: "Adult Cut", length: 30 },
  CUTSHAMPOO: { title: "Cut and Shampoo", length: 45 },
  CUTSHAMPOOSTYLE: { title: "Cut, Shampoo, and Style", length: 60 },
  KIDSCUT: { title: "Kid's Cut", length: 45 },
  BANGBEARDTRIM: { title: "Bang/Beard Trim", length: 30 },
};

export type Post = {
  title: string,
  description?: string,
  image?: string,
  datePosted: DateTime,
  featured?: boolean
}

/**
 * Next steps:
 * 1. create back end
 */
