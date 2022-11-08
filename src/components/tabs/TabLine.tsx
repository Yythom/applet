import { View } from "@tarojs/components"
import { CSSProperties } from "react"
import { useTabsContext } from "./context"

export const TabLine = ({ style }: { style?: CSSProperties }) => {
    const { lineProps = { style: {} }, direction } = useTabsContext()
    const { style: lineStyle, ...rest } = lineProps
    
    return (
        <View
            style={{
                height: '2px',
                borderRadius: '3px',
                ...lineStyle,
                background: 'red',
                ...style,
                ...(direction === 'vertical' ? { width: '2px' } : {}),
                position: 'absolute',
                zIndex: 1,
                transition: '400ms'
            }}
            {...rest}
        />
    )
}