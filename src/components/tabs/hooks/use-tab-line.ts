/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import { useClass } from "src/hooks"
import { useSelectorQuery } from "taro-hooks"
import { useTabsContext } from "../context"
import { TabItemProps } from "../TabList"

export const useTabLine = (
    {
        index = 0,
        scrollDistance = 0,  // Inject
        setScrollLeft,       // Inject
        setScrollTop,        // Inject
        getScrollViewRect,   // Inject 
    }: Required<TabItemProps>['_INJECT'],
) => {
    const classId = useClass('TabItem-' + index) // 用于获取tabItem宽度
    const { setLineProps, direction, currentIndex } = useTabsContext()
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
        const scrollRect = await getScrollViewRect?.()
        // h5获取的宽度有问题
        if (direction === 'horizontal') {
            // 初始化的时候可能拿不到 ScrollViewWidth
            const scrollOffsetLeft = scrollRect?.left || 0
            const scrollWidth = scrollRect?.width || 0

            let offsetLeft = Number(_style.left) - scrollOffsetLeft;
            let scrollLefts = offsetLeft - (scrollWidth - Number(_style.width)) / 2;
            let scrollToLeft = scrollLefts < 0 ? 0 : scrollLefts;
            setScrollLeft?.(scrollToLeft)
            _style.left = Number(_style.left) - scrollOffsetLeft
        } else {
            const scrollOffseTop = scrollRect?.top || 0
            const scrollHeight = scrollRect?.height || 0

            let offsetTop = Number(_style.top) - scrollOffseTop;
            let _scrollTop = offsetTop - (scrollHeight - Number(_style.height)) / 2;
            let scrollToTop = _scrollTop < 0 ? 0 : _scrollTop;
            setScrollTop?.(scrollToTop)
            _style.top = Number(_style.top) - scrollOffseTop
            // TODO 没考虑垂直的逻辑 等等吧
        }
        setLineProps?.({ style: _style })
    }
    useEffect(() => {
        currentIndex === index && setLine()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex])

    return { classId }
}