import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Checkbox, Title } from "react-native-paper";

import { styles } from "../styles";

type Props = {
  title: string;
  value: boolean;
  onChange: () => void;
};

const selectedCardStyle = [styles.card, styles.selectedBorder];

const ServiceCard = (props: Props) => (
  <TouchableOpacity
    style={props.value ? selectedCardStyle : styles.card}
    onPress={props.onChange}
  >
    <View style={styles.flexRow}>
      <Checkbox
        color="#3182CE"
        status={props.value ? "checked" : "unchecked"}
        onPress={props.onChange}
      />
      <Title style={styles.paddingLeft}>{props.title}</Title>
    </View>
  </TouchableOpacity>
);

export default ServiceCard;
