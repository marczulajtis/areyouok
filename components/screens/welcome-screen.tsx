import { Text } from '@react-native-material/core'
import { View } from 'react-native'

export const WelcomeScreen = ({ route, navigation }) => {
    const { user } = route.params

    return (
        <View>
            <Text> Hello {user.username} </Text>
        </View>
    )
}
