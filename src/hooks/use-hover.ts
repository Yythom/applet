import { useState } from "react"

export const useHover = (onHover?: () => void) => {
    const [hover, toggle] = useState(false)

    return {
        hover,
        hoverProps: {
            onMouseEnter: () => { onHover?.(); toggle(true) },
            onMouseLeave: () => toggle(false)
        },
    }
}