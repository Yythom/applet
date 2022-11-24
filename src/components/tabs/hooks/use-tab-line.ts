/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import { useClass } from "src/hooks"
import { useSelectorQuery } from "taro-hooks"
import { useTabsContext } from "../context"
import { TabItemProps } from "../tab-list"

export const useTabLine = (
    {
        index = 0,
        scrollDistance = 0,  // Inject
        setScrollLeft,       // Inject
        setScrollTop,        // Inject
        getScrollViewRect,   // Inject 
        setLineProps,        // Inject 
    }: Required<TabItemProps>['_INJECT'],
) => {
    const classId = useClass('TabItem-' + index) // 用于获取tabItem宽度
    const { direction, currentIndex } = useTabsContext()
    const [, { getBoundingClientRect }] = useSelectorQuery()

    // line 核心代码吧 // 设置line跑到当前 tab下
    const setLine = async () => {
        let rect = await getBoundingClientRect(`.${classId}`)
        if (!rect) rect = await getBoundingClientRect(`.${classId}`)
        const _style = direction === 'vertical' ? {
            top: rect.top + scrollDistance,
            height: rect.height,
        } : {
            left: rect.left + scrollDistance,
            width: rect.width
        }
        const scrollRect = await getScrollViewRect?.()

        if (direction === 'horizontal') {
            // 初始化的时候可能拿不到 ScrollViewWidth
            const scrollOffsetLeft = scrollRect?.left || 0
            const scrollWidth = scrollRect?.width || 0
            let offsetLeft = Number(_style.left) - scrollOffsetLeft
            _style.left = Number(_style.left) - scrollOffsetLeft
            let scrollLefts = offsetLeft - (scrollWidth - Number(_style.width)) / 2
            setScrollLeft?.(scrollLefts < 0 ? 0 : scrollLefts)
        } else {
            const scrollOffseTop = scrollRect?.top || 0
            const scrollHeight = scrollRect?.height || 0
            let offsetTop = Number(_style.top) - scrollOffseTop
            _style.top = Number(_style.top) - scrollOffseTop

            let _scrollTop = offsetTop - (scrollHeight - Number(_style.height)) / 2
            setScrollTop?.(_scrollTop < 0 ? 0 : _scrollTop)
        }
        setLineProps?.({ style: _style })
    }
    useEffect(() => {
        currentIndex === index && setLine()
    }, [currentIndex])

    return { classId }
}