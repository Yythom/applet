import Taro from '@tarojs/taro'
import getBaseUrl from './baseURL'
import interceptors from './interceptors'

interceptors.forEach(item => Taro.addInterceptor(item))
class HttpRequest {
    baseOptions(params, method = 'POST') {
        const { url, data, contentType = 'application/json' } = params
        const BASE_URL = getBaseUrl()
        const option: any = {
            url: BASE_URL + url,
            data,
            method,
            header: {
                'Content-Type': contentType,
                // token: getStorageSync('token'),
            },
        }
        const task = Taro.request(option)
        return task
    }
    async get<T>(url, option: any) {
        const ret: Taro.request.SuccessCallbackResult<T> = await this.baseOptions({ url, data: option.body }, 'GET')
        return ret
    }

    async post<T>(url, option: any) {
        const ret: Taro.request.SuccessCallbackResult<T> = await this.baseOptions({ url, data: option.body })
        return ret
    }
}

const http = new HttpRequest()
const request = (url, option: any) => {
    return http.post(url, option)
}
request.post = http.post
request.get = http.get

export default request
