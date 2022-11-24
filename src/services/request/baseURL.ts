const getBaseURL = () => {
    let BASE_URL = ''
    // 开发环境
    if (process.env.NODE_ENV === 'development') {
        BASE_URL = 'https://api-sensen.fosuss.com/shz' // api
    } else { // 生产环境
        BASE_URL = 'https://api-sensen.fosuss.com/shz'
    }
    return BASE_URL
}

export default getBaseURL
