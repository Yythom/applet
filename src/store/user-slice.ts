
// user
export const createUserSlice = set => ({
    userInfo: {},
    setUserInfo: info => set(state => { state.user.userInfo = info }, false),
})