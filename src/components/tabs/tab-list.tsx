import { ScrollView, View } from "@tarojs/components"
import { NodesRef } from "@tarojs/taro"
import React, { CSSProperties, FC, useState } from "react"
import { Center, HStack, VStack } from "src/features"
import { TabsContext, useTabsContext } from "./context"
import { Hstyle, Vstyle } from "./default-style"
import { useTabLine, useTabListRect } from "./hooks"
import { TabLine } from "./tab-line"

export const TabList = ({ children, spacing = '30px', ...rest }: { children: React.ReactNode, spacing?: string } & CSSProperties) => {
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
            onScroll={event => {
                const { scrollLeft, scrollTop } = event.detail
                scrollDistance.current = direction === 'horizontal' ? scrollLeft : scrollTop
            }}
            scrollAnchoring
            // scrollWithAnimation //   // 这里有个问题 还在滚动中的时候获取的位置有问题
            {...openScroll}
            style={{ ...(direction === 'horizontal' ? Hstyle : Vstyle), ...rest }}
        >
            <View className={ListClass} style={{ width: 'max-content', height: 'max-content', position: 'relative' }}>
                <Wrap spacing={spacing}>
                    {
                        React.Children.toArray(children).filter((e: any) => e.type === TabItem || e.type === TabLine).map((Element: any, i) => {
                            if (Element.type === TabItem) {
                                return React.cloneElement(Element, {
                                    _INJECT: {
                                        index: i,
                                        scrollDistance: scrollDistance.current,
                                        setScrollLeft,
                                        setScrollTop,
                                        getScrollViewRect,
                                        setLineProps,
                                    }
                                })
                            } else if (Element.type === TabLine) return React.cloneElement(Element, { lineProps })
                        })
                    }
                </Wrap>
            </View>
        </ScrollView>
    )
}


// 没有使用 context 已经最小粒度渲染了 没必要 内部log可以看到
// Inject 注入的 不用外面传入 后续会改成 _INJECT:{ XX:()=>{} }
export interface TabItemProps extends CSSProperties {
    children?: React.ReactNode
    _INJECT?: {
        index?: number   // Inject
        scrollDistance?: number // Inject
        setScrollLeft?: (n: number) => void // Inject
        setScrollTop?: (n: number) => void // Inject
        getScrollViewRect?: () => Promise<NodesRef.BoundingClientRectCallbackResult> // Inject
        setLineProps?: (d: TabsContext['lineProps']) => void
    }
}

export const TabItem: FC<TabItemProps> = ({ children, _INJECT = {}, ...style }) => {
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


