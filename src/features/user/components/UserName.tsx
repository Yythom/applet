import { Text } from "@tarojs/components"
import { useRequest } from "taro-hooks"
import { getUsername } from "../apis"

export const UserName = () => {
    const { data } = useRequest(getUsername)
    return <Text>{data}</Text>
}