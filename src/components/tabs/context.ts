import { createContext } from "src/utils";

export type TabsContext = {
    currentIndex: number
    direction: 'vertical' | 'horizontal',
    move: (index: number) => void
    length?: number
    lineProps?: {
        style?: {
            top?: string | number,
            left?: string | number,
            width?: string | number,
            height?: string | number
        }
    }
    setLineProps?: (d: TabsContext['lineProps']) => void
}

export const [TabsProvider, useTabsContext] = createContext<TabsContext>({ name: 'TabsContext' })
