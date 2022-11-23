import { useRouter } from "taro-hooks"
import { switchTab as Tab } from '@tarojs/taro'

export const useJump = () => {
    const [
        routeInfo,
        { switchTab, relaunch, redirectTo, navigateTo, navigateBack },
    ] = useRouter()
 

    return { switchTab, relaunch, redirectTo, navigateTo, navigateBack, routeInfo }
}