import { Button, View } from '@tarojs/components'
import Taro, { stopPullDownRefresh, usePullDownRefresh } from '@tarojs/taro'
import { useParams } from 'src/hooks'
import './index.less'


const Index = () => {
    const params = useParams()
  
    // Taro.useDidShow(() => {
    //     Taro.showShareMenu({ withShareTicket: true });
    // })
    Taro.useShareAppMessage(res => {
        console.log(res, 'res')
        if (res.from === 'button') {
            // 来自页面内转发按钮
            console.log(res.target)
        }
        // return {
        //     title: '自定义转发标题',
        //     path: '/page/user?id=123'
        // }
        return {}
    })
    usePullDownRefresh(() => {
        ///
        stopPullDownRefresh()
    })

    return (
        <View>
            creat
            <Button openType='share' >123</Button>
        </View>
    )
}
export default Index
