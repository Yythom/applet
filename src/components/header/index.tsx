import { FC, ReactNode } from "react"
import { Flex, Center, Box, FlexProps } from "src/features"
import { useSystemInfo } from "taro-hooks"

type HeaderProps = FlexProps & {
    title: ReactNode
    leftElement?: ReactNode
    rightElement?: ReactNode
}
export const Header: FC<HeaderProps> = ({ title, leftElement, rightElement }) => {
    const info = useSystemInfo()
    return (
        <Flex height={info?.statusBarHeight} paddingTop={info?.safeArea.top} justifyContent='space-between'>
            <Box width='max-content'>
                {leftElement}
            </Box>
            <Center width='max-content' fontSize='18px'>
                {title}
            </Center>
            <Box width='max-content'>
                {rightElement}
            </Box>
        </Flex>
    )
}