import { CSSProperties } from "react"
import { Direction } from "./type"

// type Style = 
export const styles: Record<Direction, { open: CSSProperties, close: CSSProperties, common: CSSProperties }> = {
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
    },
    center: {
        open: {
            transform: 'translate(-50%, -50%)',
            opacity: 1
        },
        close: {
            transform: 'translate(-50%, -70%)',
            opacity: 0,
            pointerEvents:'none'
        },
        common: {
            width: '70vw',
            top: '50%',
            left: '50%',
            height: 'max-height',
        }
    }
}