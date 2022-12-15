import { Image, Text } from "@tarojs/components"
import React, { FC, ReactNode } from "react"
import { Iconfont } from "src/components"
import { Box, BoxProps, Flex, HStack, VStack } from "src/features/layout"
import useStore from "src/store"
import { AuthWxUserInfo } from "./WxUserInfo"

export const User = ({ children }) => {
    return (
        <AuthWxUserInfo>
            {children}
        </AuthWxUserInfo>
    )
}
User.Mobile = ({ fallback = null, ...rest }: { fallback?: ReactNode } & BoxProps) => {
    const { userInfo } = useStore<'user'>(s => s.user)
    if (!userInfo.mobile) return fallback as JSX.Element
    return <Box {...rest}>{userInfo.mobile || fallback}</Box>
}

User.NickName = ({ fallback = null, ...rest }: { fallback?: ReactNode } & BoxProps) => {
    const { userInfo } = useStore<'user'>(s => s.user)
    if (!userInfo.nickName) return fallback as JSX.Element
    return <Box {...rest}>{userInfo.nickName}</Box>
}

User.Avatar = ({ fallback = '', ...rest }: { fallback?: string } & BoxProps) => {
    const { userInfo } = useStore<'user'>(s => s.user)
    return (
        <Box background='#fff' borderRadius='50%' width='55px' height='55px' overflow='hidden'  {...rest}>
            <Image src={userInfo.avatarUrl || fallback} style={{ width: '100%', height: '100%' }} />
        </Box>
    )
}

export const UserInfo: FC<BoxProps> = p => {
    return (
        <Box {...p}>
            <User>
                <HStack spacing='10px'>
                    <User.Avatar />
                    <VStack spacing='4px' justifyContent='center' color='#fff' flex={1}>
                        <User.NickName fontSize='18px' />
                        <Flex justifyContent='space-between'>
                            <User.Mobile color='#fff' fallback='注册/登入' />
                            <Iconfont iconName='icon-right' />
                        </Flex>
                    </VStack>
                </HStack>
            </User>
        </Box>
    )
}