import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Navigations() {
  return (
    <View style={styles.navigationsContainer}>
      <AntDesign name="menufold" size={30} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  navigationsContainer: {
    padding: 10,
  },
});
