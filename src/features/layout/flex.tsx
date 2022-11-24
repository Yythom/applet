import { View, ViewProps } from "@tarojs/components"
import { CSSProperties, FC } from "react"

export type FlexProps = ViewProps & CSSProperties
export const Flex: FC<FlexProps> = ({ children, onClick, ...rest }) => {
    return (
        <View style={{ display: "flex", ...rest }} onClick={onClick}  >
            {children}
        </View>
    )
}
export type CenterProps = ViewProps & CSSProperties
export const Center: FC<CenterProps> = ({ children, onClick, ...rest }) => {
    return (
        <View
            style={{
                display: "flex",
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                ...rest
            }}
            onClick={onClick}
        >
            {children}
        </View>
    )
}