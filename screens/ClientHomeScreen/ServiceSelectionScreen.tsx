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
  const { services, setServices } = useContext(BookingContext);

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
      <Card
        style={
          services.includes("Men's Haircut")
            ? [styles.card, styles.selectedCard]
            : styles.card
        }
        onPress={() =>
          services.includes("Men's Haircut")
            ? setServices(services.filter((x) => x !== "Men's Haircut"))
            : setServices((oldArray: string[]) => [
                ...oldArray,
                "Men's Haircut",
              ])
        }
      >
        <Card.Title
          title="Men's Haircut"
          right={(props) =>
            services.includes("Men's Haircut") && (
              <Ionicons {...props} name={"checkmark-circle"} color="#2A69AC" />
            )
          }
        />
      </Card>
      <Card
        style={
          services.includes("Women's Haircut")
            ? [styles.card, styles.selectedCard]
            : styles.card
        }
        onPress={() =>
          services.includes("Women's Haircut")
            ? setServices(services.filter((x) => x !== "Women's Haircut"))
            : setServices((oldArray: string[]) => [
                ...oldArray,
                "Women's Haircut",
              ])
        }
      >
        <Card.Title
          title="Women's Haircut"
          right={(props) =>
            services.includes("Women's Haircut") && (
              <Ionicons {...props} name={"checkmark-circle"} color="#2A69AC" />
            )
          }
        />
      </Card>

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
    color: "#2A69AC",
  },
  container: {
    flex: 1,
    backgroundColor: "#F0F1F2",
    alignItems: "center",
  },
});
