import { View, Text } from '@tarojs/components'
import { UserName  } from 'src/features';
import { userStore } from 'src/store'
import './index.less'
 
const Index = () => {
    const user =  userStore()
    console.log(user);
    
    return (
        <View className='index'>
            <Text>Hello world!</Text>
            <UserName />
        </View>
    )
}
export default Index