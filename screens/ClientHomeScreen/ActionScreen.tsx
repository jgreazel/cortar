import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

import { ActionScreenStyles } from "../../styles";

type Props = {
  navigation: any;
};

const ActionScreen = (props: Props) => (
  <View style={ActionScreenStyles.container}>
    <Button
      mode="contained"
      onPress={() => props.navigation.navigate("Service")}
    >
      Book Now
    </Button>
  </View>
);

export default ActionScreen;
