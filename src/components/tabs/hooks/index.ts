import { createSelectorQuery } from "@tarojs/taro"
import { useEffect, useRef } from "react"
import { useClass } from "src/hooks"
import { useSelectorQuery } from "taro-hooks"

export const useTabListRect = () => {
    const [, { getBoundingClientRect }] = useSelectorQuery()

    // 获取总长度
    const ListClass = useClass('TabList')
    const ListWidth = useRef<number>()
    const ListHeight = useRef<number>()

    // 获取ScrollView容器宽度
    const ScrollViewClass = useClass('ScrollView')
    const ScrollViewWidth = useRef<number>() // ScrollView容器宽度
    const ScrollViewHeight = useRef<number>() // ScrollView容器宽度
    const scrollDistance = useRef<number>() // 滚动距离
    useEffect(() => {
        getBoundingClientRect(`.${ListClass}`).then(event => {
            ListWidth.current = event.width
            ListHeight.current = event.height
        })
        // h5 需要兼容 原生js
        getBoundingClientRect(`.${ScrollViewClass}`).then(event => {
            ScrollViewWidth.current = event.width
            ScrollViewHeight.current = event.height
        })
    }, [])

    return {
        ListClass,
        ListWidth,
        ListHeight,
        ScrollViewClass,
        scrollDistance,
        ScrollViewWidth,
        ScrollViewHeight
    }
}
