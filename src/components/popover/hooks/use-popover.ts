import { CSSProperties, useState } from "react"
import { PopoverContext } from "../context"

export const usePopover = () => {
    const [isOpen, setIsOpen] = useState(false)
    const trigger = (is?: any) => {
        setIsOpen(typeof is === 'boolean' ? is : !isOpen)
    }
    return {
        isOpen,
        trigger
    }
}

export const getContentStyles = (direction?: PopoverContext['direction'], isOpen?: boolean, gutter?: number | string) => {
    const _gutter = typeof gutter === 'number' ? `${gutter}px` : gutter
    let style: CSSProperties = {}
    if (direction === 'bottom') {
        style = {
            left: '50%',
            top: '100%',
            transform: `translate(-50%, ${isOpen ? _gutter : '0'})`,
        }
    } else if (direction === 'top') {
        style = {
            bottom: '100%',
            left: '50%',
            transform: `translate(-50%, ${isOpen ? 0 : _gutter})`,
            marginBottom: _gutter
        }
    } else if (direction === 'left') {
        style = {
            right: '100%',
            top: '50%',
            transform: `translate(${isOpen ? 0 : _gutter}, -50%)`,
            marginRight: _gutter
        }
    } else if (direction === 'right') {
        style = {
            left: '100%',
            top: '50%',
            transform: `translate(${isOpen ? _gutter : 0}, -50%)`,
        }
    }
    return style
}