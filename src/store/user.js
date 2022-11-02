import useStore from "."

// user
export const createUserSlice = (set) => ({
    userInfo: {},
    setUserInfo: (info) => set((state) => { state.user.userInfo = info }, false),
})

export const userStore = () => useStore(s => s.user)