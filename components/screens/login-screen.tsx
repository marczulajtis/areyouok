import React from 'react'
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native'

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/logo.png')}
                style={styles.image}
                resizeMode="cover"
            ></Image>

            <Pressable
                onPress={() => Alert.alert('Login button pressed')}
                accessibilityLabel="Log in to Are you ok"
                style={styles.button}
            >
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#737373',
        borderRadius: 100,
        width: 200,
        padding: 20,
        marginTop: 20,
    },
    buttonText: {
        color: '#FFD7D2',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'alegreya-regular',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    image: {
        height: 250,
        width: 250,
    },
})
