import create from 'zustand'
import { immer } from 'zustand/middleware/immer'
import shallow from 'zustand/shallow'
import { tabbarSlice } from './tabbar-slice'
import { createUserSlice } from './user-slice'

const createStore = set => ({
    tabbar: tabbarSlice(set),
    user: createUserSlice(set),
})

const useBaseStore = create(
    immer(
        set => createStore(set)
    )
)
const useStore = <T extends keyof ReturnType<typeof createStore>>(selector?: (s: ReturnType<typeof createStore>) => ReturnType<typeof createStore>[T]) => useBaseStore(selector!, shallow)
export default useStore

