import { View, StyleSheet, Image } from "react-native";

export default function Card(){
    return(
        <View style={styles.cardContainer}>
            <Image style={styles.card} source={require('../assets/images/cards/2_of_clubs.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        height: '100%',
        width: '15%',
        paddingBottom: 10
    },
    
    card: {
        resizeMode: 'contain',
        height: '100%',
        width: undefined,
    }
});