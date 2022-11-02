import { useRouter } from "taro-hooks";

export const useJump = () => {
    const [
        routeInfo,
        { switchTab, relaunch, redirectTo, navigateTo, navigateBack },
    ] = useRouter()

    return { switchTab, relaunch, redirectTo, navigateTo, navigateBack, routeInfo }
}