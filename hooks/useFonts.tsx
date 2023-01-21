import * as Font from 'expo-font'

export default useFonts = async () => {
    await Font.loadAsync({
        'Alegreya Bold': require('../assets/fonts/Alegreya-Bold.ttf'),
    })
}
