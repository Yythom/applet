import { View } from "@tarojs/components"
import React, { useCallback, useState } from "react"
import { TabsProvider, TabsContext } from "./context"

const useTab = (defaultIndex) => {
    const [currentIndex, setIndex] = useState(defaultIndex || 0)
    const move = useCallback((idx: number) => {
        setIndex(idx)
    }, [])
    return { move, currentIndex }
}

/**
 * @Examples
 * ```
   <View style={{ width: '300px', height: '400px' }}>
       <Tabs
           direction='vertical'
           activeStyle={{ color: 'red' }}
           defaultIndex={4}
       >
           <TabList>
               <TabItem style={{ fontSize: '18px' }}>
                   测试 1
               </TabItem>
               <TabLine />
           </TabList>
           <TabPanels>
               <TabPanel>
                   <View>面板内容 1</View>
               </TabPanel>
           </TabPanels>
       </Tabs>
   </View>
 * ```
 */
export const Tabs = ({ children, direction = 'horizontal', activeStyle, defaultIndex }: {
    children: React.ReactNode
    direction?: TabsContext['direction']
    activeStyle?: TabsContext['activeStyle']
    defaultIndex?: number
}) => {
    const { move, currentIndex } = useTab(defaultIndex)

    return (
        <View style={{ display: direction === 'vertical' ? 'flex' : 'block', width: '100%', height: '100%' }}>
            <TabsProvider
                value={{
                    currentIndex,
                    move,
                    direction,
                    activeStyle
                }}
            >
                {children}
            </TabsProvider>
        </View>
    )
}

