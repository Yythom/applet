import { View, ViewProps } from "@tarojs/components"
import { CSSProperties, FC } from "react"

export type BoxProps = ViewProps & CSSProperties
export const Box: FC<BoxProps> = ({ children, onClick, ...rest }) => {

    return (
        <View style={{ ...(rest as CSSProperties) }} onClick={onClick}>
            {children}
        </View>
    )
}
