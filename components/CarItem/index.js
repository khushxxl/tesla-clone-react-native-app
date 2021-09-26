import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import CustomButton from "../CustomButton";
import styles from "./styles";

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline} <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          type="primary"
          content="Custom Order"
          onPress={() => {
            console.warn("Custom order was made");
          }}
        />
        <CustomButton
          type="secondary"
          content="Existing Inventory"
          onPress={() => {
            console.warn("Existing inventory was clicked");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
