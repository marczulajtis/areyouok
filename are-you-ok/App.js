import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import HomeScreen from './components/screens/home-screen'
import LoginScreen from './components/screens/login-screen'
import RegisterScreen from './components/screens/register-screen'

export default function App() {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
