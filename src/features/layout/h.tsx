import { View } from "@tarojs/components"
import { FC, ReactNode } from "react"
import { getNoOfLines } from "./text"

export const H1: FC<{ children: ReactNode, style?: React.CSSProperties } & { noOfLines?: number }> = ({ children, noOfLines, style }) => {
    return (
        <View style={{ fontSize: '24px', fontWeight: "bold", ...getNoOfLines(noOfLines), ...style }}>{children}</View>
    )
}