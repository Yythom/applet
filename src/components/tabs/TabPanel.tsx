import { Swiper, SwiperItem, View } from "@tarojs/components"
import React from "react"
import { useTabsContext } from "./context"

export const TabPanels = ({ width = '100vw', height = '', children }) => {
    const { currentIndex, move } = useTabsContext()
    return (
        <Swiper
            style={{ width, height }}
            duration={300}
            easingFunction='linear'
            current={currentIndex}
            onChange={(e) => move(e.detail.current)}
            circular
        >
            {React.Children.toArray(children).map((Element: any, i) => (
                <SwiperItem key={i} style={{ width: 'max-content', height: 'max-content' }}>
                    {React.cloneElement(Element, { index: i })}
                </SwiperItem>
            ))}
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