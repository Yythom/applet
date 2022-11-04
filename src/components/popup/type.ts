export type PopupType = {
    onClose?: (() => {}) | (() => void)
    direction?: 'bottom' | 'left' | 'right' | 'top'
    children: React.ReactNode
}