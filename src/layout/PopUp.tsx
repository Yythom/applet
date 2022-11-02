import { View } from "@tarojs/components"
import React, { useState } from "react"

export const usePopUp = () => {
    const [isOpen, setOpen] = useState(false)
    return {
        isOpen,
        toggle: () => setOpen(!isOpen)
    }
}
type PopUpType = {
    isOpen: boolean
    onClose: (() => {}) | (() => void)
    direction?: 'bottom' | 'left' | 'right' | 'top'
    children: React.ReactNode
}
export const PopUp: React.FC<PopUpType> = ({
    isOpen,
    onClose = () => { },
    direction = 'bottom',
    children
}) => {
    return (
        <>
            <View
                {...({ catchMove: true })}
                style={{
                    ...(isOpen ? styles[direction].open : styles[direction].close),
                    ...(styles[direction].common),
                    background: '#ccc',
                    position: 'fixed',
                    zIndex: '100',
                    transition: '360ms'
                }}
            >
                {children}
            </View>
            {isOpen && <PopUpMask onClick={onClose} />}
        </>
    )
}

export const PopUpMask = (props) => (
    <View catchMove style={{ position: 'fixed', background: 'rgba(0,0,0,.4)', zIndex: '99', width: '100vw', height: '100vh' }} {...props} />
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

