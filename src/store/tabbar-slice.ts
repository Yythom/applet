import useStore from "."

// tabbar
export const tabbarSlice = set => ({
    currentIndex: 0,
    setCurrentIndex: index => set(state => { state.tabbar.currentIndex = index }, false),
})


