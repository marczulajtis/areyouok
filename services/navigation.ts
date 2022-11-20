import { createNavigationContainerRef } from '@react-navigation/native'

export default class NavigationService {
    static navigate(name: never) {
        const navigationRef = createNavigationContainerRef()

        if (navigationRef.isReady()) {
            navigationRef.navigate(name)
        }
    }
}
