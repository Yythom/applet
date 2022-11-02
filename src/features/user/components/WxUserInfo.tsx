import { View } from "@tarojs/components"
import { userStore } from "src/store";
import { useRequest, useUserInfo } from "taro-hooks";

function bindphone(iv, encryptedData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ mobile: 1314521520 });
        }, 1000);
    });
}


export const WxUserInfo = ({ children }) => {
    const [userInfo, { getUserInfo, getUserProfile }] = useUserInfo();
    const user = userStore()
    const { loading, run } = useRequest(bindphone, { manual: true, });

    const handleGetUserInfo = async () => {
        if (user.userInfo.mobile) return
        const info = await getUserProfile({ desc: "完善资料" })
        // bindphone
        const { iv, encryptedData } = info as any
        const mobile = await run(iv, encryptedData)
        user.setUserInfo({...info,mobile})
    }

    return (
        <View onClick={handleGetUserInfo}>
            {children}
        </View>
    )
}