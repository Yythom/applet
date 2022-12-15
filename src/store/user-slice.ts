
// user
export const createUserSlice = set => ({
    userInfo: {
        mobile: '',
        avatarUrl: '',
        city: '',
        encryptedData: '',
        iv: '',
        rawData: '',
        signature: '',
        nickName: '',
    },
    setUserInfo: info => set(state => { state.user.userInfo = info }, false),
})
