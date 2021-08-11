import { DateTime } from "luxon";

type Appointment = {
  service: Service;
  clientNote: string;
  dateTime: DateTime;
};

type Service = {
  title: Services;
  length: number;
};

// should probably be defined by barber through web portal and come from server
// they should define string desc and short code?
enum Services {
  ADULTCUT = "Adult Cut",
  CUTSHAMPOO = "Cut and Shampoo",
  CUTSHAMPOOSTYLE = "Cut, Shampoo, and Style",
  KIDSCUT = "Kid's Cut",
  BANGBEARDTRIM = "Bang/Beard Trim",
}

/**
 * Next steps:
 * 1. create back end
 */
