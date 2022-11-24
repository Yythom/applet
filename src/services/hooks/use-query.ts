import { useEffect, useState } from "react"
import { useLatest } from "taro-hooks"

export function useQuery<T = any, P = void>(queryFn: (...arg: any) => Promise<any>, options?: { variables: P }) {
    const serviceRef = useLatest(queryFn)

    const [data, setData] = useState<any>(undefined)
    const query = async () => {
        try {
            const _data = await serviceRef.current({ body: options?.variables })
            setData(_data)
        } catch (error) {

        }
    }
    useEffect(() => {
        query()
    }, [JSON.stringify(options?.variables)])
    return {
        data: data as T
    }
}

export const creatQuery = <P, T>({
    variables,
    queryFn,
}: {
    variables?: P
    queryFn: (...arg: any) => Promise<any>
}) => {
    const query = (options?: { variables?: P }) => {
        return useQuery<T, P>(queryFn, { variables: { ...options?.variables, ...variables, } as any })
    }
    return query
}

