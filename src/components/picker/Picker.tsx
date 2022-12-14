import { PickerView, PickerViewColumn } from "@tarojs/components"
import React, { CSSProperties, ReactNode, useEffect } from "react"
import { Center } from "src/features"
import { PickerProvider } from "./context"
import { usePicker } from "./hooks/use-picker"

export const Picker = ({ children, w, h, defaultValue = [] }: {
    children: ReactNode,
    w?: CSSProperties['width']
    h?: CSSProperties['height']
    defaultValue?: number[]
}) => {
    const state = usePicker({ defaultValue })

    useEffect(() => {
        if (!state.value.format) state.onChange(defaultValue, children)
    }, [state.value])

    return (
        <PickerProvider value={state}>
            <PickerView
                style={{ width: w || '100%', height: h || '300px' }}
                value={state.value.indexArr}
                onChange={eve => {
                    state.onChange(eve.detail.value, children)
                }}
            >
                {children}
            </PickerView>
        </PickerProvider>
    )
}

Picker.Column = ({ children }) => {
    return (
        <PickerViewColumn>
            {React.Children.toArray(children).map((e: any, i) => React.cloneElement(e, {
                _INJECT: {
                    index: i
                }
            }))}
        </PickerViewColumn>
    )
}

Picker.Item = ({ children }: { children: string }) => {
    return (
        <Center>
            {children}
        </Center>
    )
}