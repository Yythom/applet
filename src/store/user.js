import useStore from "."

export const createUserSlice = (set) => ({
    userInfo: 0,
    setUserInfo: () => set((state) => ({ bears: state.userInfo   })),
})

export const userStore = () => useStore(s => s.user)