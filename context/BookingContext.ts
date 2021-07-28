import React from "react";

export type BookingContextData = {
  services: string[];
  date?: Date;

  setServices: Function;
  setDate: Function;
};

const BookingContext = React.createContext<BookingContextData>({
  services: [],
  date: undefined,
  
  setServices: () => {},
  setDate: () => {},
});

BookingContext.displayName = "BookingContext";

export default BookingContext;
