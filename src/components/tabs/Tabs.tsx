import { View } from "@tarojs/components"
import React, { useCallback, useState } from "react"
import { TabsProvider, TabsContext } from "./context"

export const Tabs = ({ children, direction = 'horizontal', activeStyle, defaultIndex }: {
    children: React.ReactNode
    direction?: TabsContext['direction']
    activeStyle?: TabsContext['activeStyle']
    defaultIndex?: number
}) => {
    const [index, setIndex] = useState(defaultIndex || 0)

    const [lineProps, setLineProps] = useState<TabsContext['lineProps']>()
    const move = useCallback((idx: number) => {
        setIndex(idx)
    }, [])

    return (
        <View>
            <TabsProvider
                value={{
                    currentIndex: index,
                    move,
                    length: React.Children.toArray((React.Children.toArray(children)[0] as any).props.children).length,
                    setLineProps,
                    lineProps,
                    direction,
                    activeStyle
                }}
            >
                {children}
            </TabsProvider>
        </View>
    )
}

