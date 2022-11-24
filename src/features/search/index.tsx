import { Button } from "@tarojs/components"
import { FC } from "react"
import { Input, InputGroup, InputGroupProps, InputRight, useInputContext } from "src/components"
import { Center } from "../layout"

export const SearchInput: FC<InputGroupProps & { onSearch: InputGroupProps['onChange'] }> = ({
    onSearch
}) => {

    return (
        <InputGroup
            alignItems='center'
        >
            <Input padding='0 12px' />
            <InputRight>
                <SearchButton onSearch={onSearch} />
            </InputRight>
        </InputGroup>
    )
}

const SearchButton: FC<{ onSearch: InputGroupProps['onChange'] }> = ({ onSearch }) => {
    const { value } = useInputContext()
    return (
        <Button
            style={{
                width: '55px',
                height: '26px',
                fontSize: '14px',
                background: '#C08C4B',
                marginRight: '4px',
                borderRadius: '100px',
                color: '#fff'
            }}
            onClick={ev => onSearch?.(value!)}
        >
            <Center>
                搜索
            </Center>
        </Button>
    )
}