import { Button, Flex } from '@react-native-material/core'
import React from 'react'
import { Image, StyleSheet } from 'react-native'
import commonStyles from '../../common/common-styles'

const HomeScreen = ({ navigation }) => {
    return (
        <Flex style={commonStyles.container}>
            <Image
                source={require('../../assets/logo.png')}
                style={homeStyles.image}
                resizeMode="cover"
            />

            <Button
                onPress={() => navigation.navigate('Login')}
                accessibilityLabel="Log in to Are you ok"
                style={commonStyles.button}
                title="Login"
                color="#F454F9"
            />

            <Button
                onPress={() => {
                    navigation.navigate('Register')
                }}
                accessibilityLabel="Register to Are you ok"
                style={commonStyles.button}
                title="Register"
                color="#F454F9"
            />
        </Flex>
    )
}

const homeStyles = StyleSheet.create({
    image: {
        height: 250,
        width: 250,
    },
})

export default HomeScreen
