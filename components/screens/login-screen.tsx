import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import commonStyles from '../../common/common-styles'

export default function LoginScreen() {
    return (
        <View style={commonStyles.container}>
            <Image
                source={require('../../assets/logo.png')}
                style={loginStyles.image}
                resizeMode="cover"
            ></Image>
        </View>
    )
}

const loginStyles = StyleSheet.create({
    image: {
        height: 50,
        right: 0,
        top: 0,
    },
})
