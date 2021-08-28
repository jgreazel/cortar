import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

import { BookingContext } from "../../context";
import { styles } from "../../styles";
import { ServiceCard } from "../../components";

// todo add data for choices, mock it, create container for it
type Props = {
  navigation: any;
};

const ServiceSelectionScreen = (props: Props) => {
  const { services, setServices, servicesOffered } = useContext(BookingContext);
  const [val, setVal] = React.useState(false);

  // todo next: create cards for options and callback to set state
  return (
    <View style={styles.topContainer}>
      {/* // todo def need to something better about this */}
      {/* // data will likely come in through a prop from container from server and be mapped */}
      <View style={styles.centerContainer}>
        {servicesOffered.map((offeredService) => (
          <ServiceCard
            key={offeredService.name}
            title={offeredService.name}
            value={services.includes(offeredService)}
            onChange={() =>
              services.includes(offeredService)
                ? setServices(services.filter((x) => x !== offeredService))
                : setServices((oldArray: string[]) => [
                    ...oldArray,
                    offeredService,
                  ])
            }
          />
        ))}
      </View>

        <View style={styles.floatBottom}>
          <Button
            mode="contained"
            onPress={() => props.navigation.navigate("Time")}
            disabled={services.length === 0}
          >
            Next
          </Button>
        </View>
    </View>
  );
};

export default ServiceSelectionScreen;
