import { View } from "@tarojs/components"
import React, { CSSProperties, useState } from "react"
import { createContext } from "src/utils"
import { Portal } from ".."
import { styles } from "./styles"
import { PopupType } from "./type"

const [PopupProvider, useContext] = createContext<{ setOpen: (d: boolean) => void, isOpen: boolean, direction: PopupType['direction'], close: () => Promise<void> }>({ name: 'PopupContext' })

export const PopupTigger = ({ children }) => {
    const { setOpen } = useContext()
    return (
        <View onClick={() => setOpen(true)}>
            {children}
        </View>
    )
}

export const PopupClose = ({ children, style }: { style?: CSSProperties, children?: React.ReactNode }) => {
    const { close } = useContext()
    return (
        <View onClick={close}
            style={{
                right: '16px',
                top: '16px',
                position: 'absolute',
                zIndex: 1,
                ...style
            }}
        >
            {children || 'x'}
        </View>
    )
}

export const PopupContent = ({ children }) => {
    const { isOpen, direction = 'bottom' } = useContext()
    return (
        <View
            {...({ catchMove: true })}
            style={{
                ...(isOpen ? styles[direction].open : styles[direction].close),
                ...(styles[direction].common),
                background: '#ccc',
                position: 'fixed',
                zIndex: '10000',
                transition: '360ms',
            }}
        >
            {children}
        </View>
    )
}
/**
 * @Examples
 * ```
 *  <Popup direction='bottom'>
        <PopupTigger>
           <View>底部打开</View>
        </PopupTigger>
        <PopupContent>
            <PopupClose 
                style={{ right:'16px', top:'16px' }} // 默认的
            />
            <H1 style={{ height: '400px' }}>无所谓</H1>
        </PopupContent>
    </Popup>
 * ```
 */
export const Popup: React.FC<PopupType> = ({
    onClose = () => { },
    direction = 'bottom',
    children
}) => {
    const [isOpen, setOpen] = useState(false)

    const close = async () => {
        await onClose?.()
        setOpen(false)
    }
    return (
        <PopupProvider value={{ isOpen, setOpen, direction, close }}>
            {children}
            {isOpen && <PopupMask onClick={close} />}
        </PopupProvider>
    )
}

// 不要也得要 就不拆了
const PopupMask = props => (
    <Portal>
        <View
            catchMove
            style={{
                position: 'fixed',
                background: 'rgba(0,0,0,.4)',
                zIndex: '9999',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh'
            }}
            {...props}
        />
    </Portal>
)


