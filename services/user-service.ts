import { UserRegister } from '../models/user-register'
import { Auth } from '@aws-amplify/auth'

export const signUp = async (navigation: any, userRegister: UserRegister) => {
    try {
        await Auth.signUp({
            username: userRegister.userName,
            password: userRegister.password,
            attributes: {
                email: userRegister.email,
                phone_number: userRegister.phone,
            },
            autoSignIn: {
                // optional - enables auto sign in after user is confirmed
                enabled: false,
            },
        }).then(() => {
            navigation.navigate('Login')
        })
    } catch (error) {
        console.log('error signing up:', error)
    }
}

export const signIn = async (
    navigation: any,
    userName: string,
    password: string
) => {
    try {
        await Auth.signIn(userName, password).then((user) => {
            console.log('signedIn: ', user)

            navigation.navigate('Welcome', { user })
        })
    } catch (error) {
        console.log('error signing in: ', error)
    }
}
