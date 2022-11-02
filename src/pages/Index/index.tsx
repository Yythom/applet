import { View, Text, Button } from '@tarojs/components'
import { UserName, WxUserInfo } from 'src/features';
import { H1, HStack, Popup, usePopup, VStack } from 'src/layout';
import { userStore } from 'src/store'
import './index.less'

const Index = () => {
    const user = userStore()
    console.log(user);

    const { isOpen, toggle } = usePopup()

    return (
        <View className='index'>
            {/* <Text>Hello world!</Text>
            <UserName />
            <WxUserInfo>
                <Button>获取用户信息</Button>

            </WxUserInfo> */}

            <VStack spacing='30px'>
                <View>
                    <H1>HStack</H1>
                    <HStack spacing='30px' >
                        <View>123</View>
                        <View>123</View>
                        <View>123</View>
                    </HStack>
                </View>

                <View>
                    <H1>VStack</H1>
                    <VStack spacing='30px' >
                        <View>123</View>
                        <View>123</View>
                        <View>123</View>
                    </VStack>
                </View>

                <H1>PopUp</H1>
                <View onClick={toggle}>底部打开</View>
                <Popup isOpen={isOpen} onClose={toggle} direction='bottom'>
                    <H1 style={{ height: '400px' }}>弹出的内容</H1>
                </Popup>
            </VStack>
        </View>
    )
}
export default Index