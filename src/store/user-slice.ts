
// user
export const createUserSlice = set => ({
    userInfo: {
        mobile:''
    },
    setUserInfo: info => set(state => { state.user.userInfo = info }, false),
})