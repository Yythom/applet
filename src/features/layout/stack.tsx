import { View, ViewProps } from "@tarojs/components"
import React, { CSSProperties, FC } from "react"
import { Flex } from "./flex"


export const HStack: FC<ViewProps & CSSProperties & { spacing: string }> = ({ spacing, children, ...rest }) => {
    const childrens = React.Children.toArray(children)

    return (
        <Flex {...rest} >
            {childrens.map((item, i) => {
                if (i !== childrens.length - 1) {
                    return <>{item}<View style={{ width: spacing, flexShrink: 0 }}></View></>
                } else return item
            })}
        </Flex>
    )
}

export const VStack: FC<ViewProps & CSSProperties & { spacing: string }> = ({ spacing, children, ...rest }) => {
    const childrens = React.Children.toArray(children)

    return (
        <Flex flexDirection='column' {...rest}>
            {childrens.map((item, i) => {
                if (i !== childrens.length - 1) {
                    return <>{item}<View style={{ height: spacing, flexShrink: 0 }}></View></>
                } else return item
            })}
        </Flex>
    )
}