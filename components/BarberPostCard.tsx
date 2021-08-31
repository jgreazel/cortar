import React from "react";
import { View, Text, Image } from "react-native";
import { Checkbox, Title } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "../styles";

type Props = {
  title: string;
  description: string;
  isFeatured: boolean;
  imageUrl?: string;
};

const BarberPostCard = (props: Props) => (
  <View style={[styles.card, styles.noPadding]}>
    <View style={[styles.flexRow, styles.spaceBetween, styles.paddingTRL]}>
      <Title>{props.title}</Title>
      {props.isFeatured && (
        <View style={styles.flexRow}>
          <Text>Featured!</Text>
          <Ionicons name="flame-sharp" />
        </View>
      )}
    </View>
    <View style={styles.padding}>
      <Text>{props.description}</Text>
    </View>
    {props.imageUrl && (
      <View style={[styles.centerContainer, styles.flexRow]}>
        <Image style={[styles.image, styles.cardImage]} source={{ uri: props.imageUrl }} />
      </View>
    )}
  </View>
);

export default BarberPostCard;
