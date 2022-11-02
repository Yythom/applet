import { useRouter } from "taro-hooks"

export const useParams = () => {
    const [routeInfo] = useRouter()
    delete routeInfo.params.$taroTimestamp
    return routeInfo.params
}