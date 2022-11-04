/* eslint-disable no-unused-vars */
import { ScrollView, View } from "@tarojs/components"
import { NodesRef } from "@tarojs/taro"
import React, { CSSProperties, FC, useState } from "react"
import { Center, HStack, VStack } from "src/layout"
import { useTabsContext } from "./context"
import { Hstyle, Vstyle } from "./defaultStyle"
import { useTabLine, useTabListRect } from "./hooks"
import { TabLine } from "./TabLine"

export const TabList = ({ children, spacing = '30px' }: { children: React.ReactNode, spacing?: string }) => {
    const { direction } = useTabsContext()
    const {
        ListClass,
        ScrollViewClass,
        scrollDistance,
        getScrollViewRect
    } = useTabListRect()

    // 滚动偏移居中
    const [left, setScrollLeft] = useState<number>(0)
    const [top, setScrollTop] = useState<number>(0)
    const openScroll = direction === 'horizontal' ? { scrollX: true } : { scrollY: true }
    const Wrap = direction === 'horizontal' ? HStack : VStack
    return (
        <ScrollView
            className={ScrollViewClass}
            scrollLeft={left}
            scrollTop={top}
            onScroll={(event) => {
                const { scrollLeft, scrollTop } = event.detail
                scrollDistance.current = direction === 'horizontal' ? scrollLeft : scrollTop
            }}
            scrollAnchoring
            scrollWithAnimation
            {...openScroll}
            style={{ ...(direction === 'horizontal' ? Hstyle : Vstyle), position: 'relative', }}
        >
            <View className={ListClass} style={{ width: 'max-content', height: 'max-content' }}>
                <Wrap spacing={spacing}>
                    {
                        React.Children.toArray(children).map((Element: any, i) =>
                            Element.type === TabLine ? Element : React.cloneElement(Element, {
                                index: i,
                                scrollDistance: scrollDistance.current,
                                setScrollLeft,
                                setScrollTop,
                                getScrollViewRect,
                            })
                        )
                    }
                </Wrap>
            </View>
        </ScrollView>
    )
}


// 没有使用 context 已经最小粒度渲染了 没必要 内部log可以看到
// Inject 注入的 不用外面传入 后续会改成 _INJECT:{ XX:()=>{} }
export interface TabItemProps {
    children?: React.ReactNode
    style?: CSSProperties
    index?: number   // Inject
    scrollDistance?:number // Inject
    setScrollLeft?: (n: number) => void // Inject
    setScrollTop?: (n: number) => void // Inject
    getScrollViewRect?: () => Promise<NodesRef.BoundingClientRectCallbackResult> // Inject
}
export const TabItem: FC<TabItemProps> = (props) => {
    const {
        children,
        style,
        index = 0
    } = props
    const { move, currentIndex, activeStyle } = useTabsContext()

    // line 核心代码吧 // 设置line跑到当前 tab下 //18批处理只会渲染一次
    const { classId } = useTabLine(props)

    return (
        <View
            className={classId}
            onClick={() => move(index)}
            style={{
                height: '30px',
                background: '#eee',
                borderRadius: '999px',
                padding: '0 12px',
                transition: '300ms',
                ...style,
                ...(currentIndex === index ? activeStyle : {}),
                flexShrink: 0,
            }}
        >
            <Center>
                {children}
            </Center>
        </View>
    )
}


