import { useState } from "react"
import { useLatest } from "taro-hooks"

export function useMutation<T = any, P = void>(queryFn: (...arg: any) => Promise<any>, options?: { variables: P }) {
    const serviceRef = useLatest(queryFn)

    const [data, setData] = useState<any>(undefined)
    const query = async () => {
        try {
            const _data = await serviceRef.current({ body: options?.variables })
            setData(_data)
            return _data
        } catch (error) {

        }
    }

    return {
        data: data as T,
        mutateAsync: query
    }
}