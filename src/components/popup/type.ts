export type Direction = 'bottom' | 'left' | 'right' | 'top' | 'center'
export type PopupType = {
    onClose?: (() => {}) | (() => void)
    direction?: Direction
    children: React.ReactNode
}