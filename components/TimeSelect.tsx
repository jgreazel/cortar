import React from "react";
import { Text, View, ScrollView } from "react-native";
import { Chip, Checkbox, Title } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { DateTime } from "luxon";

import { styles } from "../styles";

type Props = {
  availableTimes: DateTime[];
  selected: DateTime;
  onSelect: (x: DateTime) => void;
};

const selectedStyle = [styles.chip, styles.selectedBorder];

const TimeSelect = (props: Props) => (
  <View style={styles.card}>
    <View style={styles.flexRow}>
      <Ionicons name="time-outline" size={24} />

      <View style={styles.paddingLeft}>
        <Title>Time:</Title>
      </View>
    </View>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.paddingY}
    >
      {props.availableTimes.map((x) => (
        <Chip
          style={x === props.selected ? selectedStyle : styles.chip}
          mode="outlined"
          key={x.toString()}
          selected={x === props.selected}
          onPress={() => props.onSelect(x)}
        >
          {x.toLocaleString(DateTime.TIME_SIMPLE)}
        </Chip>
      ))}
    </ScrollView>
  </View>
);

export default TimeSelect;
