import { View } from "@tarojs/components"
import React, { CSSProperties, useEffect, useRef } from "react"
import { useClass } from "src/hooks"
import { useSelectorQuery } from "taro-hooks"
import { useTabsContext } from "./context"

export const TabList = ({ children, activeStyle = {} }: { children: React.ReactNode, activeStyle: CSSProperties }) => {
    const { currentIndex } = useTabsContext()
    return (
        <>
            {
                React.Children.toArray(children).map((Element: any, i) =>
                    React.cloneElement(Element, {
                        index: i,
                        style: {
                            transition: '300ms',
                            ...Element.props.style || {}, ...(currentIndex === i ? activeStyle : {}),
                        }
                    })
                )
            }
        </>
    )
}

export const TabItem = ({ children, style, index = 0 }: {
    children?: React.ReactNode, style?: CSSProperties, index?: number
}) => {
    const { move, setLineProps, direction, currentIndex } = useTabsContext()
    const ref = useRef<any>()
    const classId = useClass('TabItem-' + index)
    const [, { getBoundingClientRect }] = useSelectorQuery()

    // line 核心代码吧 // 设置line跑到当前 tab下
    const setLine = async () => {
        const {
            height,
            left,
            top,
            width
        } = await getBoundingClientRect(`.${classId}`)

        const _style = direction === 'vertical' ? {
            top,
            height,
        } : {
            left,
            width
        }
        setLineProps?.({ style: _style })
    }

    useEffect(() => {
        currentIndex === index && setLine()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex])
    return (
        <View className={classId} ref={ref} onClick={() => move(index)} style={{ ...style, flexShrink: 0 }} >
            {children}
        </View>
    )
}
