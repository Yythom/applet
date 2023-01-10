import { stopPullDownRefresh, usePullDownRefresh } from '@tarojs/taro'
import { Header, Iconfont } from 'src/components'
import { Box, Flex, HStack, User, UserInfo, VStack } from 'src/features'
import { useParams } from 'src/hooks'
import './index.less'



const Index = () => {
    const params = useParams()

    usePullDownRefresh(() => {
        ///
        stopPullDownRefresh()
    })

    return (
        <Box>
            <Box background='#C08C4B' height='270px'>
                <Header
                    title='个人中心'
                    leftElement={<Box width='70px'>back</Box>}
                    rightElement={<Box width='70px'>right</Box>}
                />
                <UserInfo padding='0 16px' />
            </Box>



        </Box>
    )
}
export default Index
