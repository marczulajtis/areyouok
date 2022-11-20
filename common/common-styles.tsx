import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#737373',
    },
    button: {
        backgroundColor: '#737373',
        borderRadius: 100,
        width: 200,
        padding: 20,
        marginTop: 20,
    },
    buttonText: {
        color: '#FFD7D2',
        textAlign: 'center',
        fontSize: 20,
        textDecorationLine: 'underline',
        fontFamily: 'alegreya-regular',
    },
    textInput: {
        borderRadius: 15,
        width: 200,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 15,
        marginBottom: 20,
        marginTop: 5,
        borderColor: '#737373',
        borderWidth: 3,
        fontFamily: 'alegreya-regular',
    },
    hint: {
        fontSize: 10,
        textAlign: 'left',
        fontFamily: 'alegreya-regular',
    },
    label: {
        textAlign: 'left',
        width: 200,
        fontSize: 15,
        fontFamily: 'alegreya-regular',
        color: '#737373',
    },
    error: {
        color: '#F48CA7',
        fontWeight: 'bold',
        fontFamily: 'alegreya-regular',
    },
    cornerImage: {
        height: 50,
        width: 50,
        top: 20,
        right: 20,
        position: 'absolute',
    },
})
