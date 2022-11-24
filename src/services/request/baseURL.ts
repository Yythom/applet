const getBaseURL = () => {
    let BASE_URL = ''
    // 开发环境
    if (process.env.NODE_ENV === 'development') {
        BASE_URL = 'https://api-test-sensen.fosuss.com/dev/sensen/api/v1' // api
    } else { // 生产环境
        BASE_URL = 'https://xmt-test.jsrxjt.com'
    }
    return BASE_URL
}

export default getBaseURL
