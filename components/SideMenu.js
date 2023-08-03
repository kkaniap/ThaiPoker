import { StyleSheet, View } from "react-native";
import Actions from "./Actions";
import Navigations from "./Navigations";
import AvailablePlays from "./AvailablePlays";

export default function SideMenu() {
  return (
    <View style={styles.menuContainer}>
      <Navigations />
      <AvailablePlays />
      <Actions />
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, .4)",
  },
});
