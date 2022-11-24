import { FC, PropsWithChildren } from 'react'
import './app.less'
// import CustomTabBar from './custom-tab-bar' //  H5 需手动打开bar
import { Box } from './layout'

 
const App: FC<PropsWithChildren> = ({ children }) => {

    return (
        <Box>
            {children}
            {/* H5 需手动打开bar */}
            {/* {getEnv() === 'WEB' && <CustomTabBar />} */}
        </Box>
    )
}
export default App
