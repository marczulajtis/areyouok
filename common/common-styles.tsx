import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    colors: { color: '#737373' },
    container: {
        flex: 1,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#FA90AC',
        borderRadius: 5,
        width: 150,
        padding: 10,
        marginTop: 20,
        textTransform: 'uppercase',
    },
    buttonText: {
        color: '#FFD7D2',
        textAlign: 'center',
        fontSize: 16,
    },
    textInput: {
        marginBottom: 10,
        width: '50%',
        fontSize: 10,
        borderColor: 'gray',
    },
    hint: {
        fontSize: 10,
        textAlign: 'left',
    },
    label: {
        textAlign: 'left',
        width: 200,
        fontSize: 15,
        color: '#737373',
    },
    error: {
        color: '#F48CA7',
        fontWeight: 'bold',
    },
    cornerImage: {
        height: 50,
        width: 50,
        top: 20,
        right: 20,
        position: 'absolute',
    },
    forgotPassBtn: {
        width: 200,
        textDecorationLine: 'underline',
        textAlign: 'left',
        fontSize: 10,
    },
})
