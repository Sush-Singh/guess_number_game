import { StyleSheet, View } from "react-native";
import Colors from "../constants/colors";

export default function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    marginTop: 36,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.containerBackground500,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4, //android only shadow property.
    // below shadow property works for ios system.
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
