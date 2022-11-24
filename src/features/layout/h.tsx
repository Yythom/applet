import { View } from "@tarojs/components"
import { FC, ReactNode } from "react"

export const H1: FC<{ children: ReactNode, style?: React.CSSProperties }> = ({ children, style }) => {
    return (
        <View style={{ fontSize: '24px', fontWeight: "bold", ...style }}>{children}</View>
    )
}