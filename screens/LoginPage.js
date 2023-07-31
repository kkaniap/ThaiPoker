import { StyleSheet, SafeAreaView, Image, TextInput, Pressable, Text } from "react-native";

export default function LoginPage(){
    return(
        <SafeAreaView style={styles.logoContainer}>
            <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
            <TextInput style={styles.usernameInput} placeholder="Username" placeholderTextColor="#adadad"/>
            <Pressable style={({pressed}) => pressed ? [styles.joinButton, styles.joinButtonPressed] : styles.joinButton }>
                    <Text style={styles.joinButtonText}>Join</Text>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    logoContainer:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        marginTop: 15,
        width: '30%',
        height: '50%'
    },
    usernameInput: {
        marginTop: 20,
        paddingLeft: 10,
        width: '50%',
        height: 50,
        color: 'white',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, .3)'
    },
    joinButton: {
        marginTop: 10,
        width: '70%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    joinButtonText:{
        color: 'white',
        fontSize: 25
    },
    joinButtonPressed: {
        opacity: .5
    }
});