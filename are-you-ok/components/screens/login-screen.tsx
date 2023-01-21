import React from 'react'
import { Alert, Image, Pressable, Text, TextInput, View } from 'react-native'
import styles from '../../common/common-styles'

const LoginScreen = ({ navigation }) => {
    const [password, setPassword] = React.useState('')
    const [email, setEmail] = React.useState('')

    const validatePassword = () => {
        console.log('Password validated')
    }

    const passwordDefinition = `- At least one digit [0-9] \n
    - At least one lowercase character [a-z] \n
    - At least one uppercase character [A-Z] \n
    - At least one special character [*.!@#$%^&(){}[]:;<>,.?/~_+-=|\] \n
    - At least 8 characters in length, but no more than 32.`

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/logo.png')}
                style={styles.cornerImage}
                resizeMode="cover"
            ></Image>

            <Text style={styles.label}>E-mail address</Text>
            <TextInput
                style={styles.textInput}
                value={email}
                onChangeText={(value) => setEmail(value)}
                accessibilityLabel="E-mail address"
            ></TextInput>

            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.textInput}
                value={password}
                onChangeText={(value) => setPassword(value)}
                accessibilityLabel="Password"
                textContentType="password"
                secureTextEntry={true}
            ></TextInput>
            <Pressable
                onPress={() =>
                    Alert.alert(
                        'Forgot password pressed\n' + email + '\n' + password
                    )
                }
            >
                <Text style={styles.forgotPassBtn}></Text>
            </Pressable>

            <Pressable
                onPress={() => UserService.login()}
                accessibilityLabel="Log in to Are you ok"
                style={styles.button}
            >
                <Text style={styles.buttonText}>Log in</Text>
            </Pressable>
        </View>
    )
}

export default LoginScreen
