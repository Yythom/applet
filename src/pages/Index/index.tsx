import { View, Text, Button, ScrollView } from '@tarojs/components'
import { Popup, TabItem, TabList, TabPanel, TabPanels, Tabs, usePopup } from 'src/components';
import { TabLine } from 'src/components/tabs/TabLine';
import { UserName, WxUserInfo } from 'src/features';
import { H1, HStack, VStack } from 'src/layout';
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

                <View>
                    <H1>PopUp</H1>
                    <View onClick={toggle}>底部打开</View>
                    <Popup isOpen={isOpen} onClose={toggle} direction='bottom'>
                        <H1 style={{ height: '400px' }}>弹出的内容</H1>
                    </Popup>
                </View>

                <View>
                    <H1>Tabs</H1>
                    <Tabs>
                        <ScrollView enableFlex scrollWithAnimation scrollX style={{ width: '100vw', height: '40px', position: 'relative' }}>
                            <HStack spacing='20px'>
                                <TabList activeStyle={{ color: 'red' }}>
                                    <TabItem style={{ fontSize: '18px' }}>
                                        测试 1
                                    </TabItem>
                                    <TabItem>
                                        测试 2
                                    </TabItem>
                                    <TabItem>
                                        测试 2
                                    </TabItem>
                                    <TabItem>
                                        测试 2
                                    </TabItem>
                                    <TabItem>
                                        测试 2
                                    </TabItem>
                                    <TabItem>
                                        测试 2
                                    </TabItem>
                                    <TabItem>
                                        测试 2
                                    </TabItem>
                                    <TabItem>
                                        测试 2
                                    </TabItem>
                                    <TabItem>
                                        测试 2
                                    </TabItem>
                                    <TabItem>
                                        测试 2
                                    </TabItem>
                                    <TabItem>
                                        测试 2
                                    </TabItem>
                                </TabList>
                                <TabLine style={{ top: '30px' }} />
                            </HStack>
                        </ScrollView>

                        <TabPanels>
                            <TabPanel>
                                <View style={{ width: '100vw', height: '100px', background: '#ccc' }}>面板内容 1</View>
                            </TabPanel>
                            <TabPanel>
                                <View style={{ width: '100vw', height: '100px', background: '#ccc' }}>面板内容 2</View>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </View>
            </VStack>
        </View>
    )
}
export default Index