import { CSSProperties, FC } from "react"
import { Box, BoxProps } from "./box"
import { getNoOfLines } from "./text"

export type FlexProps = BoxProps & CSSProperties
export const Flex: FC<FlexProps> = ({ children, onClick, noOfLines, ...rest }) => {
    return (
        <Box display='flex' {...getNoOfLines(noOfLines) as any} {...rest} onClick={onClick}  >
            {children}
        </Box>
    )
}
export type CenterProps = BoxProps & CSSProperties
export const Center: FC<CenterProps> = ({ children, onClick, noOfLines, ...rest }) => {
    return (
        <Flex
            width='100%'
            height='100%'
            alignItems='center'
            justifyContent='center'
            flexShrink='0'
            {...rest}
            onClick={onClick}
        >
            {children}
        </Flex>
    )
}