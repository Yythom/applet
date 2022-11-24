import { Text as BaseText, TextProps } from "@tarojs/components"
import { CSSProperties, FC } from "react"

export const Text: FC<TextProps & CSSProperties> = ({ children, onClick, ...rest }) => {
    return (
        <BaseText style={{ ...(rest as CSSProperties) }} onClick={onClick}>
            {children}
        </BaseText>
    )
}
