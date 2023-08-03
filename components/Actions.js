import { StyleSheet, View } from "react-native";
import ActionButton from "./ActionButtons";

export default function Actions() {
  return (
    <View style={styles.actionContainer}>
      <ActionButton name="Call" />
      <ActionButton name="Check" />
    </View>
  );
}

const styles = StyleSheet.create({
  actionContainer: {
    paddingBottom: 15,
    paddingHorizontal: 15,
    flexDirection: "row",
    gap: 5,
  },
});
