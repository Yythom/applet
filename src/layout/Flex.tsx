import { View } from "@tarojs/components"
import React from "react"

export const Flex = ({ children, alignItems = 'center', ...rest }) => {
    return (
        <View style={{ display: "flex", alignItems, ...rest }}  >
            {children}
        </View>
    )
}

export const Center = ({ children, flexDir = 'row', ...rest }) => {
    return (
        <View style={{ display: "flex", width: '100%', height: '100%', flexDirection: (flexDir as any), alignItems: 'center', justifyContent: 'center', ...rest }}  >
            {children}
        </View>
    )
}

export const HStack = ({ spacing, children }) => {
    const childrens = React.Children.toArray(children)

    return (
        <Flex  >
            {childrens.map((item, i) => {
                if (i !== childrens.length - 1) {
                    return <>{item}<View style={{ width: spacing, flexShrink: 0 }}></View></>
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
                    return <>{item}<View style={{ height: spacing, flexShrink: 0 }}></View></>
                } else return item
            })}
        </Flex>
    )
}