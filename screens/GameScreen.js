import { StyleSheet, View, Text } from "react-native";
import SideMenu from "../components/SideMenu";
import GameSection from "../components/GameSection";

export default function GameScreen(){

    return(
        <View style={styles.gameContainer}>
            <GameSection />
            <SideMenu />
        </View>
    );
}

const styles = StyleSheet.create({
    gameContainer: {
      flex: 1,
      flexDirection: "row"
    }
  });