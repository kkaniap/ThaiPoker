import { StyleSheet, Text, Pressable } from "react-native";

export default function ActionButton(props) {
  return (
    <Pressable style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{props.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D5D5D5",
    borderRadius: 10,
  },
  buttonText: {
    color: "#D5D5D5",
    fontSize: 20,
    fontWeight: "bold",
  },
});
