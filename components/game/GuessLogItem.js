import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

export default function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess : {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    // fontWeight: "bold",
    borderWidth: 1,
    borderColor: Colors.headingText500,
    padding: 12,
    marginVertical: 8,
    borderRadius: 40,
    backgroundColor: Colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
