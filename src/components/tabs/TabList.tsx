/* eslint-disable no-unused-vars */
import { ScrollView, View } from "@tarojs/components"
import { NodesRef } from "@tarojs/taro"
import React, { CSSProperties, FC, useState } from "react"
import { Center, HStack, VStack } from "src/layout"
import { useDebounce } from "taro-hooks"
import { TabsContext, useTabsContext } from "./context"
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
    const [lineProps, setLineProps] = useState<TabsContext['lineProps']>()

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
            // scrollWithAnimation //   // 这里有个问题 还在滚动中的时候获取的位置有问题
            {...openScroll}
            style={{ ...(direction === 'horizontal' ? Hstyle : Vstyle) }}
        >
            <View className={ListClass} style={{ width: 'max-content', height: 'max-content', position: 'relative', }}>
                <Wrap spacing={spacing}>
                    {
                        React.Children.toArray(children).map((Element: any, i) =>
                            Element.type === TabLine ? React.cloneElement(Element, { lineProps }) : React.cloneElement(Element, {
                                _INJECT: {
                                    index: i,
                                    scrollDistance: scrollDistance.current,
                                    setScrollLeft,
                                    setScrollTop,
                                    getScrollViewRect,
                                    setLineProps,
                                }
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
    _INJECT?: {
        index?: number   // Inject
        scrollDistance?: number // Inject
        setScrollLeft?: (n: number) => void // Inject
        setScrollTop?: (n: number) => void // Inject
        getScrollViewRect?: () => Promise<NodesRef.BoundingClientRectCallbackResult> // Inject
        setLineProps?: (d: TabsContext['lineProps']) => void
    }
}
export const TabItem: FC<TabItemProps> = ({ children, style, _INJECT = {} }) => {
    const { index = 0 } = _INJECT
    const { move, currentIndex, activeStyle } = useTabsContext()

    // line 核心代码吧 // 设置line跑到当前 tab下 //18批处理只会渲染一次
    const { classId } = useTabLine(_INJECT)

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


