import create from 'zustand'
import { immer } from 'zustand/middleware/immer'
import shallow from 'zustand/shallow'
import { createUserSlice } from './user'

const useBaseStore = create(
    immer(
        (set, get, s) => ({
            user: createUserSlice(set, get, s)
        })
    )
)
const useStore = (selector) => useBaseStore(selector, shallow)
export default useStore
export * from './user'
