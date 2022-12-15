import { Image, Swiper, SwiperItem } from '@tarojs/components'
import { useState } from 'react'
import { TabItem, TabLine, TabList, TabPanel, TabPanels, Tabs } from 'src/components'
import { Box, Center, Flex, SearchInput, VStack } from 'src/features'
import { postApiV1AppletHome, PostApiV1AppletHomeResponse, postApiV1AppletProductList } from 'src/services/apis'
import './index.less'
import { creatQuery } from '../../services'


const useHomeData = creatQuery<any, PostApiV1AppletHomeResponse['200']>({
    queryFn: postApiV1AppletHome,
    variables: {
        search: { shop_id: '1' }
    }
})

const useProductList = creatQuery<{ search: any }, any>({
    queryFn: postApiV1AppletProductList
})

const Index = () => {
    const [productListParams, setProductListParams] = useState({
        "search": "",
        "category_id": ""
    })
    const { data } = useHomeData()

    const { data: productList } = useProductList({
        variables: {
            "search": productListParams,
        }
    })

    return (
        <Box background='#F3F3F3'>
            <VStack spacing='8px'>
                <Box margin='0 15rpx' >
                    <SearchInput onSearch={v => setProductListParams(old => ({ ...old, search: v }))} />
                </Box>
                <Box height='180px'>
                    <Swiper>
                        {data?.data.top_banner.list.map(e => {
                            return (
                                <SwiperItem key={e.image}>
                                    <Center>
                                        <Image src={e.image!} mode='widthFix' style={{ width: '100%', height: '100%' }} />
                                    </Center>
                                </SwiperItem>
                            )
                        })}
                    </Swiper>
                </Box>
            </VStack>
            <Tabs
                onChange={i => {
                    const id = data?.data.category.list[i].category_id
                    setProductListParams(old => ({ ...old, category_id: id! }))
                }}
                activeStyle={{
                    color: '#C08C4B'
                }}
            >
                <Flex height='45px' background='#fff' alignItems='center'>
                    <TabList
                        spacing='30px'
                        height='max-content'
                    >
                        {data?.data.category.list.map((item, index) => {
                            return (
                                <TabItem
                                    padding={0}
                                    marginLeft={index == 0 ? '15px' : ''}
                                    fontSize='18px'
                                    fontWeight='bold'
                                    key={item.category_id}
                                >
                                    {item.category_name}
                                    {data?.data.category.list.length > index + 1 && <Box background='#ccc' height='10px' width='1px' transform='translateX(15px)' />}
                                </TabItem>
                            )
                        })}
                        <TabLine style={{ background: '#C08C4B' }} />
                    </TabList>
                </Flex>
                <TabPanels height='100vh' marginTop='10px'>
                    {
                        data?.data.category.list.map(item => (
                            <TabPanel key={item.category_id}>
                                <Flex flexWrap='wrap' justifyContent='space-between' padding='0 8px'>
                                    {productList?.data.list.map((e: any) => {
                                        return (
                                            <Box key={e.product_id} width='46vw' marginBottom='10px' background='#fff' borderRadius='5px'>
                                                <VStack spacing='8px'>
                                                    <Image src={e.cover} style={{ borderRadius: '5px 5px 0 0', width: '100%', height: '45vw' }} />
                                                </VStack>
                                                <VStack spacing='5px' height='118px' padding='8px' paddingBottom={0}>
                                                    <Flex noOfLines={1}>{e.product_name}</Flex>
                                                    <Flex fontSize='18px' fontWeight='bold' color='#FE2811'>¥{e.discount_price}</Flex>
                                                </VStack>
                                            </Box>
                                        )
                                    })}
                                </Flex>
                            </TabPanel>
                        ))
                    }
                </TabPanels>
            </Tabs>
        </Box >
    )
}
export default Index
