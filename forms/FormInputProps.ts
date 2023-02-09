import { TextContentType } from './TextContentType'

export interface FormInputProps {
    label: string
    iconStart: any
    name: string
    secureTextEntry?: boolean
    value: string
    handleChange: (name: string) => void
    handleBlur: (name: string) => void
}
