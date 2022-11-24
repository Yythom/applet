import { View, ViewProps } from "@tarojs/components"
import { CSSProperties, FC, PropsWithChildren } from "react"

 
export const Flex: FC<ViewProps & CSSProperties> = ({ children, onClick, ...rest }) => {
    return (
        <View style={{ display: "flex", ...rest }} onClick={onClick}  >
            {children}
        </View>
    )
}

export const Center: FC<PropsWithChildren<CSSProperties>> = ({ children, ...rest }) => {
    return (
        <View style={{ display: "flex", width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', ...rest }}  >
            {children}
        </View>
    )
}