import { StyleSheet, View, Text } from 'react-native';


export default function SideMenu(){
    return(
        <View style={styles.menuContainer}>
        </View>
    );
}

const styles = StyleSheet.create({
    menuContainer: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, .4)'
    }
  });