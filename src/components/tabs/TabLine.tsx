import { View } from "@tarojs/components"
import { CSSProperties } from "react"
import { useTabsContext } from "./context"

export const TabLine = ({ style }: { style: CSSProperties }) => {
    const { lineProps = { style: {} } } = useTabsContext()
    const { style: lineStyle, ...rest } = lineProps
    return (
        <View
            style={{
                height: '2px',
                borderRadius: '3px',
                ...lineStyle,
                background: 'red',
                ...style,
                position: 'absolute',
                zIndex: 1,
                transition:'300ms'
            }}
            {...rest}
        />
    )
}