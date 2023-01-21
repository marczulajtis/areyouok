import { Auth } from '@aws-amplify/auth/lib-esm/Auth'
import { Alert } from 'react-native'
import { dictionary } from '../hooks/dictionary'
import { cognitoPool } from '../utils/cognito-pool'

export const onPressRegister = (
    navigation: any,
    email: string,
    password: string
) => {
    const { Auth, General } = dictionary

    cognitoPool.signUp(email, password, [], [], (err, data) => {
        if (err) {
            switch (err.name) {
                case 'InvalidParameterException':
                    return Alert.alert(General.Error, Auth.InvalidEmail)
                case 'InvalidPasswordException':
                    return Alert.alert(General.Error, Auth.InvalidPassword)
                case 'UsernameExistsException':
                    return Alert.alert(General.Error, Auth.EmailAlreadyExists)
                default:
                    return Alert.alert(
                        General.Error,
                        General.SomethingWentWrong
                    )
            }
        }
        Alert.alert(General.Success, Auth.ConfirmEmail, [
            { text: 'OK', onPress: () => navigation.navigate('Login') },
        ])
    })
}
