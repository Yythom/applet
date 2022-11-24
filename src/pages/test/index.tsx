/* eslint-disable no-unused-vars */
import { View, Text, Button, ScrollView } from '@tarojs/components'
import { useState } from 'react'
import { Picker, Popover, PopoverContent, PopoverTrigger, Popup, PopupClose, PopupContent, PopupTigger, TabItem, TabLine, TabList, TabPanel, TabPanels, Tabs, Upload, UploadMultiple } from 'src/components'
import { Center, H1, HStack, UserName, VStack, WxUserInfo } from 'src/features'
import './index.less'

const Index = () => {
    const [aaa, toggle] = useState(false)

    return (
        <View className='index'>
            <WxUserInfo>
                <Button>获取用户信息</Button>

            </WxUserInfo>

            <VStack spacing='30px'>
                <Upload>
                    <Upload.FileTrigger>
                        单图片
                    </Upload.FileTrigger>
                    <View >
                        <Upload.PreviewImage />
                    </View>
                </Upload>

                <UploadMultiple>
                    <UploadMultiple.FileTrigger>
                        多图片
                    </UploadMultiple.FileTrigger>
                    <View >
                        <UploadMultiple.PreviewImage />
                    </View>
                </UploadMultiple>



                <View>
                    <H1>HStack</H1>
                    <HStack spacing='4px' >
                        <View>123</View>
                        <View>123</View>
                    </HStack>
                </View>

                <View>
                    <H1>VStack</H1>
                    <VStack spacing='4px' >
                        <View>123</View>
                        <View>123</View>
                    </VStack>
                </View>

                <Center>
                    <View>
                        <Popover direction='right' mode='hover'>
                            <PopoverTrigger>
                                <View>PopoverTrigger</View>
                            </PopoverTrigger>
                            <PopoverContent>
                                <View style={{ width: '100px', height: '50px', border: '1px solid #eee' }}>
                                    面板
                                </View>
                            </PopoverContent>
                        </Popover>
                    </View>
                </Center>

                <View>
                    <H1>PopUp + Picker</H1>
                    <Popup direction='bottom'>
                        <PopupTigger>
                            <View>底部打开</View>
                        </PopupTigger>
                        <PopupContent>
                            <PopupClose
                                style={{
                                    position: 'absolute',
                                    right: '16px',
                                    fontSize: '32px',
                                    top: '16px'
                                }}
                            />
                            <Picker>
                                <Picker.Column>
                                    <Picker.Item>
                                        11
                                    </Picker.Item>
                                    <Picker.Item>
                                        12
                                    </Picker.Item>
                                </Picker.Column>
                                <Picker.Column>
                                    <Picker.Item>
                                        21
                                    </Picker.Item>
                                    <Picker.Item>
                                        22
                                    </Picker.Item>
                                </Picker.Column>
                            </Picker>
                        </PopupContent>
                    </Popup>
                </View>

                <View style={{ width: '300px', height: '400px', marginLeft: '40px', marginTop: '20px' }}>
                    <H1>Tabs</H1>
                    <Tabs
                        // direction='vertical'
                        activeStyle={{ color: 'red' }}
                        defaultIndex={4}
                    >
                        <TabList>
                            <TabItem style={{ fontSize: '18px' }}>
                                测试 1
                            </TabItem>
                            <TabItem>
                                测试 2
                            </TabItem>
                            <TabItem>
                                测试 3
                            </TabItem>
                            <TabItem>
                                测试 4
                            </TabItem>
                            <TabItem>
                                测试 5
                            </TabItem>
                            <TabItem>
                                测试 6
                            </TabItem>
                            <TabItem>
                                测试 7
                            </TabItem>
                            <TabItem>
                                测试 8
                            </TabItem>
                            <TabItem>
                                测试 9
                            </TabItem>
                            <TabItem>
                                测试 10
                            </TabItem>
                            <TabItem>
                                测试 11
                            </TabItem>
                            <TabLine />
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <View style={{ width: '100%', height: '100px', background: '#ccc' }}>面板内容 1</View>
                            </TabPanel>
                            <TabPanel>
                                <View style={{ width: '100%', height: '100px', background: '#ccc' }}>面板内容 2</View>
                            </TabPanel>
                            <TabPanel>
                                <View style={{ width: '100%', height: '100px', background: '#ccc' }}>面板内容 3</View>
                            </TabPanel>
                            <TabPanel>
                                <View style={{ width: '100%', height: '100px', background: '#ccc' }}>面板内容 4</View>
                            </TabPanel>
                            <TabPanel>
                                <View style={{ width: '100%', height: '100px', background: '#ccc' }}>面板内容 5</View>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </View>
            </VStack>
        </View>
    )
}
export default Index