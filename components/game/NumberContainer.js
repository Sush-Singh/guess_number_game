import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.textColor500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.textColor500,
    fontSize: 36,
    // fontWeight: "bold",
    fontFamily: "open-sand-bold",
  },
});
