import { createContext } from "src/utils"

export type InputContext = {
    onChange?: (v: string) => void
    value?: string
}

export const [InputProvider, useInputContext] = createContext<InputContext>({ name: 'InputContext' })
