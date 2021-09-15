import React from "react";
import { View, Text } from "react-native";
import { gql, useQuery } from "@apollo/client";

import ServiceSelectionScreen from "./ServiceSelectionScreen";

const GET_SERVICES = gql`
  {
    services {
      id
      title
      cost
      timeLength
    }
  }
`;

type Props = {
  navigation: any;
};

const ServiceSelectionContainer = (props: Props) => {
  const { data, loading, error } = useQuery(GET_SERVICES);
  // todo need a better loading state
  if (loading)
    return (
      <View>
        <Text>loading..</Text>
      </View>
    );
  if (error) console.error({ error });
  // ! for debugging
  console.log({data})
  return (
    <ServiceSelectionScreen
      onNextClick={() => props.navigation.navigate("Time")}
      data={data}
    />
  );
};

export default ServiceSelectionContainer;
