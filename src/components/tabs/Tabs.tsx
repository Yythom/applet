import { View } from "@tarojs/components"
import React, { useCallback, useState } from "react"
import { TabsProvider, TabsContext } from "./context"

export const Tabs = ({ children, direction = 'horizontal' }: {
    children: React.ReactNode
    direction?: TabsContext['direction']
}) => {
    const [index, setIndex] = useState(0)

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
                    direction
                }}
            >
                {children}
            </TabsProvider>
        </View>
    )
}

