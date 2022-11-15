import React, { ReactNode, useState } from "react"

export const usePicker = ({ defaultValue }: { defaultValue?: number[] }) => {
    const [value, setValue] = useState<any>({
        indexArr: defaultValue,
        format: ''
    })

    const onChange = (indexArr: number[], children: ReactNode) => {
        const formatArr: string[] = []
        indexArr.forEach((e, i) => {
            const currentColumn = React.Children.toArray(children)[i] as React.ReactElement
            const itemString = currentColumn.props.children[e].props.children as string
            formatArr.push(itemString)
        })
        setValue({ ...value, indexArr, format: formatArr })
    }

    return {
        value,
        onChange
    }
}