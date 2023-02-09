import { Button, TextInput } from '@react-native-material/core'
import { Formik } from 'formik'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Image, View } from 'react-native'
import commonStyles from '../../common/common-styles'
import styles from '../../common/common-styles'
import { UserLogin } from '../../models/user-login'
import { signIn } from '../../services/user-service'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

export const LoginScreen = ({ navigation }) => {
    const { control } = useForm<UserLogin>()

    const onSubmit = (user: UserLogin) => {
        signIn(navigation, user.userName, user.password)
    }

    return (
        <Formik
            initialValues={{
                userName: '',
                password: '',
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
                        value={values.password}
                        style={commonStyles.textInput}
                        color={commonStyles.colors.color}
                        trailing={<Icon name="eye" />}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        secureTextEntry={true}
                    />

                    <Button
                        onPress={handleSubmit}
                        accessibilityLabel="Log in to Are you ok"
                        style={styles.button}
                        title="Login"
                        color="#F454F9"
                    />
                </View>
            )}
        </Formik>
    )
}
