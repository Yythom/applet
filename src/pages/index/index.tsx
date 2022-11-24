import { View, Image } from '@tarojs/components'
import { useState } from 'react'
import { TabItem, TabLine, TabList, TabPanel, TabPanels, Tabs } from 'src/components'
import { Box, Flex, SearchInput, VStack } from 'src/features'
import { useParams } from 'src/hooks'
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
    const params = useParams()
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
        <View>
            <SearchInput onSearch={v => setProductListParams(old => ({ ...old, search: v }))} />
            <Tabs
                onChange={i => {
                    const id = data?.data.category.list[i].category_id
                    setProductListParams(old => ({ ...old, category_id: id! }))
                }}
            >
                <TabList>
                    {data?.data.category.list.map(item => {
                        return (
                            <TabItem key={item.category_id}>{item.category_name}</TabItem>
                        )
                    })}
                    <TabLine />
                </TabList>
                <TabPanels height='100vh'>
                    {
                        data?.data.category.list.map(item => (
                            <TabPanel key={item.category_id}>
                                <Flex flexWrap='wrap' justifyContent='space-between' padding='0 12px'>
                                    {productList?.data.list.map((e: any) => {
                                        return (
                                            <Box key={e.product_id}>
                                                <VStack spacing='8px'>
                                                    <Image src={e.cover} style={{ borderRadius: '8px', width: '45vw', height: '45vw' }} />
                                                </VStack>
                                                <VStack spacing='4px'>
                                                    <Flex>{e.product_name}</Flex>
                                                    <Flex>¥{e.discount_price}</Flex>
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
        </View>
    )
}
export default Index
