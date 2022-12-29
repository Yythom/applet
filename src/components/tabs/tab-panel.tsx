import { Swiper, SwiperItem, View } from "@tarojs/components"
import React, { CSSProperties, FC, PropsWithChildren } from "react"
import { useTabsContext } from "./context"

export const TabPanels: FC<CSSProperties & PropsWithChildren> = ({ height = '', children, ...rest }) => {
    const { currentIndex, move, direction } = useTabsContext()

    return (
        <Swiper
            style={{
                width: "100%",
                height: height || (direction === 'vertical' ? '100%' : ""),
                ...rest
            }}
            duration={300}
            easingFunction='linear'
            current={currentIndex}
            onChange={e => move(e.detail.current)}
            circular
            // h5 不能为false
            vertical={direction === 'vertical' ? true : undefined}
        >
            {
                React.Children.toArray(children).map((Element: any, i) => {
                    return (
                        <SwiperItem key={i} style={{ width: '100%', height: '100%' }}>
                            {currentIndex === i ? Element : null}
                        </SwiperItem>
                    )
                })
            }
        </Swiper>
    )
}

export const TabPanel = ({ children }) => {
    return (
        <View>
            {children}
        </View>
    )
}