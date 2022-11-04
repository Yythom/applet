import { ScrollView, View } from "@tarojs/components"
import { NodesRef } from "@tarojs/taro"
import React, { CSSProperties, useEffect, useState } from "react"
import { useClass } from "src/hooks"
import { Center, HStack } from "src/layout"
import { useSelectorQuery } from "taro-hooks"
import { useTabsContext } from "./context"
import { Hstyle, Vstyle } from "./defaultStyle"
import { useTabListRect } from "./hooks"
import { TabLine } from "./TabLine"

export const TabList = ({ children, spacing = '30px' }: { children: React.ReactNode, spacing?: string }) => {
    const { direction } = useTabsContext()
    const {
        ListClass,
        ListWidth,
        ListHeight,
        ScrollViewClass,
        ScrollViewWidth,
        ScrollViewHeight,

        scrollDistance,
        getScrollViewRect
    } = useTabListRect()

    // 滚动偏移居中
    const [left, setScrollLeft] = useState<number>(0)
    const [top, setScrollTop] = useState<number>(0)
    const openScroll = direction === 'horizontal' ? { scrollX: true } : { scrollY: true }
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
            style={{ ...(direction === 'horizontal' ? Hstyle : Vstyle), position: 'relative', width: '100%' }}
        >
            <View className={ListClass} style={{ width: 'max-content', height: 'max-content' }}>
                <HStack spacing={spacing}>
                    {
                        React.Children.toArray(children).map((Element: any, i) =>
                            Element.type === TabLine ? Element : React.cloneElement(Element, {
                                index: i,
                                scrollDistance: scrollDistance.current,
                                ListWidth: ListWidth.current,
                                ListHeight: ListHeight.current,
                                ScrollViewWidth: ScrollViewWidth.current,
                                ScrollViewHeight: ScrollViewHeight.current,
                                setScrollLeft,
                                setScrollTop,
                                getScrollViewRect,
                            })
                        )
                    }
                </HStack>
            </View>
        </ScrollView>
    )
}

// 没有使用 context 已经最小粒度渲染了 没必要 内部log可以看到
// Inject 注入的 不用外面传入 后续会改成 _INJECT:{ XX:()=>{} }
export const TabItem = ({
    children,
    style,
    index = 0,           // Inject
    scrollDistance = 0,  // Inject
    ListWidth = 0,       // Inject
    ListHeight = 0,      // Inject
    ScrollViewWidth = 0, // Inject
    ScrollViewHeight = 0,// Inject
    setScrollLeft,       // Inject
    setScrollTop,        // Inject
    getScrollViewRect,   // Inject
}: {
    children?: React.ReactNode
    style?: CSSProperties
    index?: number
    scrollDistance?: number
    ListWidth?: number
    ListHeight?: number
    ScrollViewWidth?: number
    ScrollViewHeight?: number
    setScrollLeft?: (n: number) => void,
    setScrollTop?: (n: number) => void,
    getScrollViewRect?: () => Promise<NodesRef.BoundingClientRectCallbackResult>
}) => {
    const { move, setLineProps, direction, currentIndex, activeStyle } = useTabsContext()
    const classId = useClass('TabItem-' + index)
    const [, { getBoundingClientRect }] = useSelectorQuery()

    // line 核心代码吧 // 设置line跑到当前 tab下
    const setLine = async () => {
        const rect = await getBoundingClientRect(`.${classId}`)
        const _style = direction === 'vertical' ? {
            top: rect.top + scrollDistance,
            height: rect.height,
        } : {
            left: rect.left + scrollDistance,
            width: rect.width
        }
        // h5获取的宽度有问题
        if (direction === 'horizontal') {
            // 初始化的时候可能拿不到 ScrollViewWidth
            const scrollWidth = Number(ScrollViewWidth || (await getScrollViewRect?.())?.width)
            let offsetLeft = _style.left || 0
            let offsetWidth = _style.width || 0
            const left = (offsetLeft <= scrollWidth / 2) ? 0 : (offsetLeft - scrollWidth / 2 + (offsetWidth / 2))
            setScrollLeft?.(left)
        } else {
            console.log(ListHeight, 'vertical - height');
            // TODO 没考虑垂直的逻辑 等等吧
        }
        setLineProps?.({ style: _style })
    }
    useEffect(() => {
        currentIndex === index && setLine()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex])
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


