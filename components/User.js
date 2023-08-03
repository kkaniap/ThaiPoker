import { View, StyleSheet, Text, Image } from "react-native";

export default function User(props){


    return(
        <View style={[styles.container, props.position !== undefined ? {top: props.position.top, left: props.position.left} : '', !props.isActive ? {opacity: 0} : '']}>
            <View style={styles.userCardsContainer}>
                <Image style={styles.card} source={require('../assets/images/card_back.png')} />
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.nameText}>Kania</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '15%',
        height: '50%',
        padding: 1
    },
    userCardsContainer: {
        flex: 4 
    },
    nameContainer: {
        marginTop: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: 'rgba(0, 0, 0, .5)'
    },
    nameText: {
        color: 'white',
        fontSize: 10
    },
    card: {
        height: '100%',
        width: 'auto',
        
    }
});