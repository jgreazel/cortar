import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

import { BookingContext } from "../../context";

// todo add data for choices, mock it, create container for it
type Props = {
  navigation: any;
};

const ServiceSelectionScreen = (props: Props) => {
  const { services, setServices, servicesOffered } = useContext(BookingContext);

  // todo next: create cards for options and callback to set state
  return (
    <View style={styles.container}>
      <Button
        // for testing
        onPress={() =>
          setServices((oldArray: string[]) => [...oldArray, "hello"])
        }
      >
        Add
      </Button>
      <Button onPress={() => console.log(services)}>Log</Button>

      {/* // todo def need to something better about this */}
      {/* // data will likely come in through a prop from container from server and be mapped */}
      {servicesOffered.map((offeredService) => (
        <Card
          key={offeredService.name}
          style={
            services.includes(offeredService)
              ? [styles.card, styles.selectedCard]
              : styles.card
          }
          onPress={() =>
            services.includes(offeredService)
              ? setServices(services.filter((x) => x !== offeredService))
              : setServices((oldArray: string[]) => [
                  ...oldArray,
                  offeredService,
                ])
          }
        >
          <Card.Title title={offeredService.name} />
        </Card>
      ))}

      {services.length > 0 && (
        <Button
          mode="contained"
          onPress={() => props.navigation.navigate("Time")}
        >
          Next
        </Button>
      )}
    </View>
  );
};

export default ServiceSelectionScreen;

// todo needs moved to style folder or figure out how to theme
const styles = StyleSheet.create({
  card: {
    width: "90%",
    margin: 8,
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: "#3182CE",
    backgroundColor: "#E2E8F0",
    margin: 6,
  },
  container: {
    flex: 1,
    backgroundColor: "#F0F1F2",
    alignItems: "center",
  },
});
