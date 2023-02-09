import React, { useCallback } from 'react'
import { Image, View } from 'react-native'
import styles from '../../common/common-styles'
import { signUp } from '../../services/user-service'
import { Formik } from 'formik'
import { UserRegister } from '../../models/user-register'
import { Button, TextInput } from '@react-native-material/core'
import commonStyles from '../../common/common-styles'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

export const RegisterScreen = ({ navigation }) => {
    const onSubmit = useCallback((user: UserRegister) => {
        signUp(navigation, user)
    }, [])

    return (
        <Formik
            initialValues={{
                email: '',
                userName: '',
                password: '',
                phone: '',
                confirmPassword: '',
                passwordMatch: false,
            }}
            onSubmit={(user) => onSubmit(user)}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <View style={styles.container}>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={styles.cornerImage}
                        resizeMode="cover"
                    />

                    <TextInput
                        variant="standard"
                        value={values.userName}
                        style={commonStyles.textInput}
                        color={commonStyles.colors.color}
                        trailing={<Icon name="account" />}
                        onChangeText={handleChange('userName')}
                        onBlur={handleBlur('userName')}
                    />

                    <TextInput
                        variant="standard"
                        value={values.email}
                        style={commonStyles.textInput}
                        color={commonStyles.colors.color}
                        trailing={<Icon name="at" />}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                    />

                    <TextInput
                        variant="standard"
                        value={values.phone}
                        style={commonStyles.textInput}
                        color={commonStyles.colors.color}
                        trailing={<Icon name="phone" />}
                        onChangeText={handleChange('phone')}
                        onBlur={handleBlur('phone')}
                    />

                    <TextInput
                        variant="standard"
                        value={values.password}
                        secureTextEntry={true}
                        style={commonStyles.textInput}
                        color={commonStyles.colors.color}
                        trailing={<Icon name="eye" />}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                    />

                    {/* <TextInput
                        variant="standard"
                        value={values.confirmPassword}
                        secureTextEntry={true}
                        style={commonStyles.textInput}
                        color={commonStyles.colors.color}
                        trailing={<Icon name="eye" />}
                        onChangeText={() => {
                            handleChange('confirmPassword')

                            values.password === values.confirmPassword
                                ? (values.passwordMatch = true)
                                : (values.passwordMatch = false)
                        }}
                        onBlur={handleBlur('confirmPassword')}
                    /> */}

                    <Button
                        onPress={handleSubmit}
                        title="Register"
                        style={commonStyles.button}
                        color="#F454F9"
                        disabled={!values.passwordMatch}
                    />
                </View>
            )}
        </Formik>
    )
}
