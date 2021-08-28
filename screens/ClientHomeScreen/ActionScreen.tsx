import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

import { styles } from "../../styles";

type Props = {
  navigation: any;
};

const ActionScreen = (props: Props) => (
  <View style={styles.topContainer}>
    <View style={styles.floatMiddle}>
      <Button
        mode="contained"
        onPress={() => props.navigation.navigate("Service")}
      >
        Book Now
      </Button>
    </View>
  </View>
);

export default ActionScreen;
