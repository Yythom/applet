import { Image, Progress, View } from "@tarojs/components"
import { CSSProperties, ReactNode } from "react"
import { Center } from "src/layout"
import { UploadMultipleProvider, useUploadMultipleContext, } from "./context"
import { FileItem, useUploadMultiple } from "./use-upload-multiple"


export const UploadMultiple = ({ children, count = 3, isCompress = true }) => {
    const state = useUploadMultiple({ count, isCompress })

    return (
        <UploadMultipleProvider value={state as any}>
            {children}
        </UploadMultipleProvider>
    )
}

UploadMultiple.PreviewImage = ({ style }: { style?: CSSProperties }) => {
    const { files } = useUploadMultipleContext()
    return <>{Object.values(files).map((item: FileItem['']) => <UploadMultiple.ImageItem key={item.name} fileItem={item} style={style} />)}</>
}

UploadMultiple.ImageItem = ({ fileItem, style }: { fileItem: FileItem[''], style?: CSSProperties }) => {
    const { preview } = useUploadMultipleContext()
    return (
        <View style={{ width: '50px', height: '50px', background: '#eee', ...style, position: 'relative' }}>
            {fileItem?.url.download && <UploadMultiple.RemoveFileIcon fileName={fileItem.name} style={{ position: 'absolute', right: '-4px', top: '-4px' }} />}
            {
                (fileItem?.progress > 0 && fileItem?.progress !== 100)
                    ? <Center>
                        <Progress
                            percent={fileItem?.progress}
                            style={{ height: '4px', width: '60%' }}
                        />
                    </Center>
                    : <Image
                        onClick={() => preview(fileItem?.url.download)}
                        src={fileItem?.url.download || ''}
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
            }
        </View>
    )
}

UploadMultiple.FileTrigger = ({ children }) => {
    const { selectFile } = useUploadMultipleContext()
    return (
        <View onClick={selectFile}>
            {children}
        </View>
    )
}

UploadMultiple.RemoveFileIcon = ({ children, style, fileName }: { children?: ReactNode, style?: CSSProperties, fileName: string }) => {
    const { removeFile } = useUploadMultipleContext()

    return (
        <View onClick={() => removeFile(fileName)} style={{ fontSize: '24px', fontWeight: '600', ...style }}>{children || 'X'}</View>
    )
}
