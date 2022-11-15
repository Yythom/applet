import { createContext } from "src/utils";
import { usePicker } from "./hooks/usePicker";

export const [PickerProvider, usePickerContext] = createContext<ReturnType<typeof usePicker>>({ name: 'PickerContext' })
