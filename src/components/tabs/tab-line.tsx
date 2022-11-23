import { View } from "@tarojs/components"
import { CSSProperties } from "react"
import { TabsContext, useTabsContext } from "./context"

export const TabLine = ({ style, lineProps = { style: {} } }: { style?: CSSProperties, lineProps?: TabsContext['lineProps'] }) => {
    const { direction } = useTabsContext()
    const { style: lineStyle, ...rest } = lineProps

    return (
        <View
            style={{
                height: '2px',
                borderRadius: '3px',
                ...lineStyle,
                background: 'red',
                ...style,
                ...(direction === 'vertical' ? { width: '2px' } : { bottom: 0 }),
                position: 'absolute',
                zIndex: 1,
                transition: '400ms'
            }}
            {...rest}
        />
    )
}