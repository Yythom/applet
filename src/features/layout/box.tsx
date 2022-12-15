import { View, ViewProps } from "@tarojs/components"
import { CSSProperties, FC } from "react"
import { getNoOfLines } from "./text"

export type BoxProps = ViewProps & CSSProperties & { noOfLines?: number }
export const Box: FC<BoxProps> = ({ children, onClick, noOfLines, ...rest }) => {

    return (
        <View style={{ fontSize: '14px', ...(rest as CSSProperties), ...getNoOfLines(noOfLines), }} onClick={onClick}>
            {children}
        </View>
    )
}
