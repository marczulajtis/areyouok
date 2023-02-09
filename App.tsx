import { AlegreyaSans_700Bold } from '@expo-google-fonts/alegreya-sans'
import { useFonts } from 'expo-font'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import * as Font from 'expo-font'
import { Alegreya_400Regular } from '@expo-google-fonts/dev'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import HomeScreen from './components/screens/home-screen'
import { awsconfig } from './utils/cognito-pool'
import { Amplify } from 'aws-amplify'
import { WelcomeScreen } from './components/screens/welcome-screen'
import { LoginScreen } from './components/screens/login-screen'
import { RegisterScreen } from './components/screens/register-screen'

const Stack = createNativeStackNavigator()

export default function App() {
    Amplify.configure(awsconfig)

    const [appIsReady, setAppIsReady] = useState(false)

    const customFonts = {
        'alegreya-regular': Alegreya_400Regular,
    }

    let [fontsLoaded] = useFonts({
        AlegreyaSans_700Bold,
    })

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync(customFonts)

                await new Promise((resolve) => setTimeout(resolve, 2000))
            } catch (e) {
                console.warn(e)
            } finally {
                setAppIsReady(true)
            }
        }

        prepare()
    }, [])

    if (!fontsLoaded) {
        return null
    }

    if (appIsReady) {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                    <Stack.Screen name="Welcome" component={WelcomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
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
