import React from 'react'
import {
    Alert,
    Image,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native'
import styles from '../../common/common-styles'

const RegisterScreen = ({ navigation }) => {
    const [password, setPassword] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')

    let confirmPasswordError = ''

    const validateConfirmPassword = () => {
        if (password !== confirmPassword) {
            confirmPasswordError = 'Passwords do not match'
        }
    }

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

            <Text style={styles.label}>Confirm password</Text>
            <TextInput
                style={styles.textInput}
                value={confirmPassword}
                onChangeText={(value) => {
                    setConfirmPassword(value)
                    validateConfirmPassword()
                }}
                accessibilityLabel="Confirm password"
                textContentType="password"
                secureTextEntry={true}
            ></TextInput>
            <Text style={styles.error}>{confirmPasswordError}</Text>

            <Text style={styles.hint}></Text>

            <Pressable
                onPress={() =>
                    Alert.alert(
                        'Sign up button pressed\n' + email + '\n' + password
                    )
                }
                accessibilityLabel="Sign up to Are you ok"
                style={styles.button}
            >
                <Text style={styles.buttonText}>Register</Text>
            </Pressable>
        </View>
    )
}

export default RegisterScreen
