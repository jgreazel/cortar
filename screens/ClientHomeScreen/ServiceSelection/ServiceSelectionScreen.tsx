import React, { useContext } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

import { BookingContext } from "../../../context";
import { styles } from "../../../styles";
import { ServiceCard } from "../../../components";

type Props = {
  // todo need to type data
  // todo need an empty return state for no services
  data: any;
  onNextClick: () => Function;
};

const ServiceSelectionScreen = (props: Props) => {
  // todo the whole context and how im handling this form need re-evaluated
  const { services, setServices, servicesOffered } = useContext(BookingContext);

  return (
    <View style={styles.topContainer}>
      <View style={styles.centerContainer}>
        {props.data.services.map((offeredService: any) => (
          <ServiceCard
            key={offeredService.id}
            title={offeredService.title}
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
          onPress={props.onNextClick}
          disabled={services.length === 0}
        >
          Next
        </Button>
      </View>
    </View>
  );
};

export default ServiceSelectionScreen;
