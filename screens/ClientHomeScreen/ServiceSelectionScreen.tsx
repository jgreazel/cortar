import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

import { BookingContext } from "../../context";

const ServiceSelectionScreen = () => {
  const { services, setServices } = useContext(BookingContext);

  // todo next: create cards for options and callback to set state
  return (
    <View>
      <Text>Select a Service</Text>
      <Button
        // for testing
        onPress={() =>
          setServices((oldArray: string[]) => [...oldArray, "hello"])
        }
      >
        Add
      </Button>
      <Button onPress={() => console.log(services)}>Log</Button>
    </View>
  );
};

export default ServiceSelectionScreen;
