import { getEnv } from '@tarojs/taro'
import { FC, PropsWithChildren } from 'react'
import './app.less'
import CustomTabBar from './custom-tab-bar'
import { Box } from './layout'

// const RenderCustomTabBar = () => getEnv() === 'WEB' ? <CustomTabBar /> : null

const App: FC<PropsWithChildren> = ({ children }) => {

    return (
        <Box>
            {children}
            {/* <RenderCustomTabBar /> */}
        </Box>
    )
}
export default App
