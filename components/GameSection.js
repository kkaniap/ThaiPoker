import { View, StyleSheet } from "react-native";
import Table from "./Table";
import User from "./User";
import UserCards from "./UserCards";

export default function GameSection() {
  return (
    <View style={styles.gameContainer}>
      <Table>
        <User position={{ top: "0%", left: "-20%" }} isActive={true}></User>
        <User position={{ top: "-15%", left: "-15%" }} isActive={true}></User>
        <User position={{ top: "-15%", left: "-5%" }} isActive={true}></User>
        <User position={{ top: "-15%", left: "5%" }} isActive={true}></User>
        <User position={{ top: "-15%", left: "15%" }} isActive={true}></User>
        <User position={{ top: "0%", left: "20%" }} isActive={true}></User>
      </Table>
      <UserCards />
    </View>
  );
}
const styles = StyleSheet.create({
  gameContainer: {
    flex: 2,
    flexDirection: "column-reverse",
  },
});
