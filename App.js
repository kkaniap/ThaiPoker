import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import LoginPage from "./screens/LoginPage";
import GameScreen from "./screens/GameScreen";

export default function App() {
  return (
    <View style={styles.rootContainer}>
      <StatusBar style="light" />

      <GameScreen />
      {/* <LoginPage /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#00301C",
    alignItems: "center",
    justifyContent: "center",
  },
});
