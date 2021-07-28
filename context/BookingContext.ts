import React from "react";

export type BookingContextData = {
  services: string[];
  date?: string;
  time?: string;

  setServices: Function;
  setDate: Function;
  setTime: Function;
};

const BookingContext = React.createContext<BookingContextData>({
  services: [],
  date: undefined,
  time: undefined,

  setServices: () => {},
  setDate: () => {},
  setTime: () => {},
});

BookingContext.displayName = "BookingContext";

export default BookingContext;
