import { Iconfont } from "src/components"
import { useJump } from "src/hooks"
import { Box, Flex, Text, VStack } from "src/features"
import useStore from "src/store"
import { tabBarList } from "./list"
import '../iconfont.css'

const CustomTabBar = () => {
    const { switchTab } = useJump()
    const { setCurrentIndex, currentIndex } = useStore<"tabbar">(store => store.tabbar)

    const activeTab = (url: string, index: number) => {
        setCurrentIndex(index)
        switchTab(url)
    }

    return (
        <Box position='fixed' bottom='0' left='0' width='100vw' background='#fff' borderTop='1px solid #ccc'>
            <Flex display='flex' justifyContent='space-around'>
                {
                    tabBarList.map((item, index) => {
                        return (
                            <VStack
                                key={item.pagePath}
                                spacing='2px'
                                alignItems='center'
                                padding='10px 0'
                                justifyContent='center'
                                onClick={() => activeTab(item.pagePath, index)}
                            >
                                <Iconfont
                                    color={currentIndex === index ? '#C08C4B' : '#333'}
                                    iconName={currentIndex === index ? item.activeIcon : item.icon}
                                    fontSize='20px'
                                />
                                <Text fontSize='14px' >{item.text}</Text>
                            </VStack>
                        )
                    })
                }
            </Flex>
        </Box>
    )
}
export default CustomTabBar



