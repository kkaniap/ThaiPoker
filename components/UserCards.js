import { View, StyleSheet } from "react-native";
import Card from "./Card";

export default function UserCards() {
  return (
    <View style={styles.cardsContainer}>
      <Card />
      <Card />
      <Card />
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    width: "100%",
    height: "35%",
    position: "absolute",
    justifyContent: "center",
    flexDirection: "row",
    gap: 20,
  },
});
