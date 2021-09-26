import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import "./styles";
import styles from "./styles";

const CustomButton = (props) => {
  const { content, type, onPress } = props;

  const bgColor = type === "primary" ? "black" : "white";
  const titleColor = type === "primary" ? "white" : "black";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: bgColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: titleColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;
