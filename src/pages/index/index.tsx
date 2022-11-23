import { Button, View } from '@tarojs/components'
import { Iconfont } from 'src/components'
import { useParams } from 'src/hooks'
import './index.less'


const Index = () => {
    const params = useParams()
  
   
    return (
        <View>
            creat
            <Button openType='share' >123</Button>
            <Iconfont iconName='iconhuodong-dayindingdan' />
        </View>
    )
}
export default Index
