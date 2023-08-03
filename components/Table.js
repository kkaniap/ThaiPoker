import { View, StyleSheet, Image } from "react-native";

export default function Table(props){
    return(
        <View style={styles.tableContainer}>
            <View style={styles.tableCorner}>
                <View style={styles.table}>
                    {props.children}
                </View>
            </View> 
            <View style={styles.dealerContainer}>
                <View style={styles.deck}>
                    <Image style={styles.card} source={require('../assets/images/card_back.png')} />
                </View>
                <View style={styles.dealerCards}>
                    <Image style={[styles.card, {width: '38%'}]} source={require('../assets/images/cards/10_of_spades.png')} />
                    <Image style={[styles.card, {width: '38%'}]} source={require('../assets/images/cards/10_of_spades.png')} />
                </View>               
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tableContainer: {
      width: '100%',
      height: '100%', 
      justifyContent: 'center',
      alignItems: 'center'
    },

    table: {
        width: '93%',
        height: '87%',
        borderRadius: 100,
        backgroundColor: '#387D44',
        flexDirection: 'row',
        justifyContent: 'space-between'
        
    },
    tableCorner: {
        width: '70%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#6F4F38'
    },
    dealerContainer: {
        width: '30%',
        height: '20%',
        position: 'absolute',
        flexDirection: 'row'
    },
    deck: {
        height: '100%',
        width: '40%',
    },
    dealerCards: {
        height: '100%',
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    card: {
        resizeMode:'contain',
        height: '100%',
        width: undefined,
    }
  });