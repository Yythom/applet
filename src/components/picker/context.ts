import { createContext } from "src/utils"
import { usePicker } from "./hooks/use-picker"

export const [PickerProvider, usePickerContext] = createContext<ReturnType<typeof usePicker>>({ name: 'PickerContext' })
