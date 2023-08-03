import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";

export default function AvailablePlays() {
  const availablePlays = [
    "play 1",
    "play 1",
    "play 1",
    "play 1",
    "play 1",
    "play 1",
    "play 1",
    "play 1",
    "play 1",
    "play 1",
    "play 1",
  ];

  return (
    <View style={styles.playsContainer}>
      <FlatList
        data={availablePlays}
        renderItem={(itemData) => {
          return (
            <Pressable style={styles.availablePlay}>
              <Text style={styles.availablePlayText}>{itemData.item}</Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  playsContainer: {
    flex: 1,
    paddingBottom: 5,
    // backgroundColor: 'blue'
  },
  availablePlay: {
    height: 25,
    margin: 1,
    // backgroundColor: 'yellow',
    justifyContent: "center",
  },
  availablePlayText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
