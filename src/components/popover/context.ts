import { createContext } from "src/utils";
import { usePopover } from './hooks/use-popover'

export type PopoverContext = Partial<ReturnType<typeof usePopover>> & {
    direction: 'top' | 'bottom' | 'left' | 'right',
    gutter: number | string
    mode: 'hover' | 'click'
}

export const [PopoverProvider, usePopoverContext] = createContext<PopoverContext>({ name: 'PopoverContext' })
