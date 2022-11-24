import { Input as BaseInput, InputProps } from "@tarojs/components"
import { CSSProperties, FC, useState } from "react"
import { Box, BoxProps, Flex, FlexProps } from "src/features"
import { InputContext, InputProvider, useInputContext } from "./context"

export type InputGroupProps = FlexProps & { onChange?: InputContext['onChange'], defaultValue?: InputContext['value'] }

export const InputGroup: FC<InputGroupProps> = ({ children, onChange, defaultValue, ...rest }) => {
    const [value, setValue] = useState<string>(defaultValue || '')

    const change = (v: string) => {
        setValue(v)
        onChange?.(v)
    }

    return (
        <InputProvider value={{ onChange: change, value }}>
            <Flex border='2px solid #C08C4B' borderRadius='100px' height='68rpx' {...rest}>
                {children}
            </Flex>
        </InputProvider>
    )
}

export const InputRight: FC<BoxProps> = ({ children, ...rest }) => {
    return (
        <Box width='max-content' {...rest}>
            {children}
        </Box>
    )
}

export const Input: FC<InputProps & CSSProperties> = ({ placeholderTextColor = '#C8CDD1', placeholder = '请输入', ...rest }) => {
    const { onChange, value } = useInputContext()
    return (
        <BaseInput
            // placeholderStyle='color:#C8CDD1'
            placeholderTextColor={placeholderTextColor}
            placeholder={placeholder}
            value={value}
            style={{ width: '100%', height: '100%', fontSize: '14px', ...(rest as any) }}
            onInput={e => onChange?.(e.detail.value)}
        />
    )
}