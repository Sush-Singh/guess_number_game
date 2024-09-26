import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

export default function Title({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    // fontWeight: "bold",
    fontSize: 24,
    color: Colors.headingText500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.headingText500,
    padding: 12,
    marginTop: 50,
    fontFamily: "open-sans-bold",
  },
});
