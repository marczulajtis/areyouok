import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import commonStyles from '../../common/common-styles'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={commonStyles.container}>
            <Image
                source={require('../../assets/logo.png')}
                style={homeStyles.image}
                resizeMode="cover"
            ></Image>

            <Pressable
                onPress={() => navigation.navigate('Login')}
                accessibilityLabel="Log in to Are you ok"
                style={commonStyles.button}
            >
                <Text style={commonStyles.buttonText}>Login</Text>
            </Pressable>

            <Pressable
                onPress={() => {
                    navigation.navigate('Register')
                }}
                accessibilityLabel="Sign up to Are you ok"
                style={commonStyles.button}
            >
                <Text style={commonStyles.buttonText}>Sign up</Text>
            </Pressable>
        </View>
    )
}

const homeStyles = StyleSheet.create({
    image: {
        height: 250,
        width: 250,
    },
})

export default HomeScreen
