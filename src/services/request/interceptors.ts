import {
    showToast,
} from '@tarojs/taro'
import { logInterceptor, timeoutInterceptor } from './interceptor/interceptors'
import http from './index'
import getBaseUrl from './baseURL'
// import { newWorkStackPush } from '../../utils/wx-net-error';

const baseURL = getBaseUrl()
const customInterceptor = chain => {
    const { requestParams } = chain
    const { url, data } = requestParams // 本次请求的url

    return chain.proceed(requestParams).then(async res => {
        const { code, data: result, msg } = res.data
        if (code !== 0) {
            msg && showToast({
                title: msg,
                icon: 'error',
                duration: 2000
            })
            // 网络监控加入stack
            // newWorkStackPush('success', 'error', res.data.code, requestParams, res.data);
            return Promise.reject(res.data)
        } else if (code === 'F-000-000-401') { // 重新登入的code
            // 如果不存在refreshToken，则是第一次使用，默认微信登录获取token
            // if (!'refreshToken') {

            // } else { // 刷新token

            // }

            // 重新发起上一次请求
            return Promise.resolve(
                await http.post(url.substring(baseURL.length), data)
            )
        }
        return Promise.resolve(result)
    }).catch(err => {
        const error = new Error(err.errMsg)
        Promise.reject(error)
        // 网络监控加入stack
        // newWorkStackPush('error', 'error', '服务器错误：' + err.errMsg, requestParams);
    })
}

const interceptors = [customInterceptor, logInterceptor, timeoutInterceptor]
export default interceptors
