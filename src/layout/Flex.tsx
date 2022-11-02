import { View } from "@tarojs/components"
import React from "react"

export const Flex = ({ children, alignItems = 'center', ...rest }) => {
    return (
        <View style={{ display: "flex", alignItems, ...rest }}>
            {children}
        </View>
    )
}

export const HStack = ({ spacing, children }) => {
    const childrens = React.Children.toArray(children)
    return (
        <Flex>
            {childrens.map((item, i) => {
                if (i !== childrens.length - 1) {
                    return <>{item}<View style={{ width: spacing }}></View></>
                } else return item
            })}
        </Flex>
    )
}

export const VStack = ({ spacing, children }) => {
    const childrens = React.Children.toArray(children)
    return (
        <Flex flexDirection='column' alignItems='flex-start'>
            {childrens.map((item, i) => {
                if (i !== childrens.length - 1) {
                    return <>{item}<View style={{ height: spacing }}></View></>
                } else return item
            })}
        </Flex>
    )
}