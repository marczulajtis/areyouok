import { FormInputProps } from './FormInputProps'
import { IconButton, TextInput } from '@react-native-material/core'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import commonStyles from '../common/common-styles'

export const IconTextField = ({
    iconStart,
    name,
    secureTextEntry,
    value,
    handleChange,
    handleBlur,
}: FormInputProps) => {
    return (
        <TextInput
            variant="standard"
            value={value}
            secureTextEntry={secureTextEntry ?? false}
            style={commonStyles.textInput}
            color={commonStyles.colors.color}
            trailing={<Icon name={iconStart} />}
            onChangeText={() => handleChange(name)}
            onBlur={() => handleBlur(name)}
        />
    )
}
