import { Text as BaseText, TextProps } from "@tarojs/components"
import { CSSProperties, FC } from "react"

export const getNoOfLines = (line?: number) => (line ? {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    '-webkit-line-clamp': line,
    display: 'block'

} : {}) as Omit<CSSProperties, 'overflow' | 'textOverflow' | 'lineClamp'>

export const Text: FC<TextProps & CSSProperties & { noOfLines?: number }> = ({ children, onClick, noOfLines, ...rest }) => {
    return (
        <BaseText style={{ ...(rest as CSSProperties), fontSize: '14px', ...getNoOfLines(noOfLines), }} onClick={onClick}>
            {children}
        </BaseText>
    )
}
