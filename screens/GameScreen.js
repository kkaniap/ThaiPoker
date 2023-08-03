import { StyleSheet, View, StatusBar } from "react-native";
import SideMenu from "../components/SideMenu";
import GameSection from "../components/GameSection";

export default function GameScreen() {
  return (
    <View style={styles.gameContainer}>
      <StatusBar hidden={true} />
      <GameSection />
      <SideMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    flexDirection: "row",
  },
});
