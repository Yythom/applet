import { Image, Progress, View } from "@tarojs/components"
import { CSSProperties, ReactNode } from "react"
import { Center, VStack } from "src/features"
import { UploadProvider, useUploadContext } from "./context"
import { useUpload } from "./hooks/use-upload"

export const Upload = ({ children, isCompress = true }) => {
    const state = useUpload({ isCompress })

    return (
        <UploadProvider value={state}>
            {children}
        </UploadProvider>
    )
}

Upload.PreviewImage = ({ style }: { style?: CSSProperties, }) => {
    const { url, progress, preview } = useUploadContext()

    return (
        <View style={{ width: '50px', height: '50px', background: '#eee', ...style, position: 'relative' }}>

            {
                (progress === 100) ?
                    <>
                        {
                            url.download && (
                                <Upload.RemoveFileIcon
                                    style={{ position: 'absolute', right: '-4px', top: '-4px' }}
                                />
                            )
                        }
                        <Image
                            onClick={() => preview(url.download)}
                            src={url.download || ''}
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                    </> :
                    <VStack spacing='4px'>
                        <View>{progress}</View>
                        <Progress
                            percent={progress}
                            style={{ height: '4px', width: '60%' }}
                        />
                    </VStack>

            }
        </View>
    )
}

Upload.FileTrigger = ({ children }) => {
    const { selectFile } = useUploadContext()
    return (
        <View onClick={selectFile}>
            {children}
        </View>
    )
}

Upload.RemoveFileIcon = ({ children, style }: { children?: ReactNode, style: CSSProperties }) => {
    const { reset } = useUploadContext()
    return (
        <View
            style={{ fontSize: '24px', fontWeight: '600', ...style, zIndex: 1 }}
            onClick={() => {
                reset()
            }}
        >
            {children || 'X'}
        </View>
    )
}