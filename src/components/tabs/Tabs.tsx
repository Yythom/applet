import { View } from "@tarojs/components"
import React, { useState } from "react"
import { TabsProvider, TabsContext } from "./context"

const useTab = (defaultIndex?: number, onChange?: any) => {
    const [currentIndex, setIndex] = useState(defaultIndex || 0)
    const move = (idx: number) => {
        setIndex(idx)
        onChange?.(idx)
    }
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
export const Tabs = ({ children, direction = 'horizontal', activeStyle, defaultIndex, onChange }: {
    children: React.ReactNode
    direction?: TabsContext['direction']
    activeStyle?: TabsContext['activeStyle']
    defaultIndex?: number
    onChange?: (index: number) => void
}) => {
    const { move, currentIndex } = useTab(defaultIndex, onChange)

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

