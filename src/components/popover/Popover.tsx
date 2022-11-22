import { View } from "@tarojs/components"
import React, { useEffect } from "react"
import { useHover } from "src/hooks"
import { runIfFn } from "src/utils/function"
import { PopoverContext, PopoverProvider, usePopoverContext } from "./context"
import { getContentStyles, usePopover } from "./hooks/use-popover"

export const Popover = ({ children, direction = 'right', gutter = 20, mode = 'click' }: {
    children: any
    direction?: PopoverContext['direction']
    gutter?: number | string
    mode?: 'hover' | 'click'
}) => {
    const { isOpen, trigger } = usePopover()
    return (
        <PopoverProvider value={{ isOpen, trigger, direction, gutter, mode }} >
            <View style={{ position: 'relative' }}>
                {runIfFn(children, {
                    isOpen,
                    trigger,
                })}
            </View>
        </PopoverProvider>
    )
}

export const PopoverTrigger = (props: React.PropsWithChildren<{}>) => {
    const { trigger, mode } = usePopoverContext()
    const { hover, hoverProps } = useHover()
  
    useEffect(() => { mode === 'hover' && trigger?.(hover) }, [hover])
    return (
        <View onClick={trigger} {...(mode === 'hover' ? hoverProps : {})}>
            {props.children}
        </View>
    )
}

export const PopoverContent = (props: React.PropsWithChildren<{}>) => {
    const { isOpen, direction, gutter } = usePopoverContext()


    return (
        <View
            style={{
                opacity: isOpen ? 1 : 0,
                transition: '300ms',
                pointerEvents: 'none',
                position: 'absolute',
                zIndex: 50,
                ...getContentStyles(direction, isOpen, gutter)
            }}
        >
            {props.children}
        </View>
    )
}

