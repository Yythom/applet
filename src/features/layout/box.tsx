import { View, ViewProps } from "@tarojs/components"
import { CSSProperties, FC } from "react"

export const Box: FC<ViewProps & CSSProperties> = ({ children, onClick, ...rest }) => {

    return (
        <View style={{ ...(rest as CSSProperties) }} onClick={onClick}>
            {children}
        </View>
    )
}
