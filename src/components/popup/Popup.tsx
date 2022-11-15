import { View } from "@tarojs/components"
import React, { CSSProperties, useState } from "react"
import { createContext } from "src/utils"
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
                zIndex: '100',
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
    const [isOpen, setOpen] = useState(false);

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
const PopupMask = (props) => (
    <View
        catchMove
        style={{
            position: 'fixed',
            background: 'rgba(0,0,0,.4)',
            zIndex: '99',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh'
        }}
        {...props}
    />
)

const styles = {
    bottom: {
        open: {
            transform: 'translateY(0)',
            bottom: '0',
        },
        close: {
            transform: 'translateY(100%)',
            bottom: '0',
        },
        common: {
            width: '100vw',
            height: 'max-height',
        }
    },
    left: {
        open: {
            transform: 'translateX(0)',
            left: '0',
        },
        close: {
            transform: 'translateX(-100%)',
            left: '0',
        },
        common: {
            width: 'max-content',
            height: '100vh'
        }
    },
    right: {
        open: {
            transform: 'translateX(0)',
            right: '0',
        },
        close: {
            transform: 'translateX(100%)',
            right: '0',
        },
        common: {
            width: 'max-content',
            height: '100vh'
        }
    },
    top: {
        open: {
            transform: 'translateY(0)',
            top: '0',
        },
        close: {
            transform: 'translateY(-100%)',
            top: '0',
        },
        common: {
            width: '100vw',
            height: 'max-height',
        }
    }
}

