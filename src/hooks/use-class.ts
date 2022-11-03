import { useId, useRef } from "react"

export const useClass = (className: string) => {
    const id = useId()
    const { current: classId } = useRef(`${className}-${id}`)
    return classId
}