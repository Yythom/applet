import { View, Text as BaseText, ViewProps, TextProps } from "@tarojs/components"
import React, { CSSProperties, FC, PropsWithChildren } from "react"

export const Box: FC<ViewProps & CSSProperties> = ({ children, onClick, ...rest }) => {

    return (
        <View style={{ ...(rest as CSSProperties) }} onClick={onClick}>
            {children}
        </View>
    )
}

export const Text: FC<TextProps & CSSProperties> = ({ children, onClick, ...rest }) => {
    return (
        <BaseText style={{ ...(rest as CSSProperties) }} onClick={onClick}>
            {children}
        </BaseText>
    )
}


export const Flex: FC<ViewProps & CSSProperties> = ({ children, onClick, ...rest }) => {
    return (
        <View style={{ display: "flex", ...rest }} onClick={onClick}  >
            {children}
        </View>
    )
}

export const Center: FC<PropsWithChildren<CSSProperties>> = ({ children, ...rest }) => {
    return (
        <View style={{ display: "flex", width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', ...rest }}  >
            {children}
        </View>
    )
}

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