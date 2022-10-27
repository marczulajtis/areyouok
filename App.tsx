import { AlegreyaSans_700Bold } from '@expo-google-fonts/alegreya-sans'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, View, Image, Alert, Pressable, Text } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
import { Alegreya_400Regular } from '@expo-google-fonts/dev'

export default function App() {
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
                // Keep the splash screen visible while we fetch resources
                await SplashScreen.preventAutoHideAsync()
                // Pre-load fonts, make any API calls you need to do here

                await Font.loadAsync(customFonts)

                // Artificially delay for two seconds to simulate a slow loading
                // experience. Please remove this if you copy and paste the code!
                await new Promise((resolve) => setTimeout(resolve, 2000))
            } catch (e) {
                console.warn(e)
            } finally {
                // Tell the application to render
                setAppIsReady(true)
            }
        }

        prepare()
    }, [])

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setAppIsReady`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            await SplashScreen.hideAsync()
        }
    }, [appIsReady])

    if (!appIsReady) {
        return null
    }

    if (!fontsLoaded) {
        return null
    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <Image
                source={require('./assets/logo.png')}
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

            <StatusBar style="auto" />
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
