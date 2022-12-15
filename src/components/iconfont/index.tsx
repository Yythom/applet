import { Text } from "@tarojs/components"
import { CSSProperties, FC } from "react"

export const Iconfont: FC<{ iconName?: string } & CSSProperties> = ({ iconName = 'none', ...rest }) => {
    return (
        <Text
            className={`iconfont ${iconName}`}
            style={{ fontSize: '16px', width: 'max-content',height: 'max-content',  ...rest }}
        />
    )
}