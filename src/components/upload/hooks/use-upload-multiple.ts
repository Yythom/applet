import Taro from "@tarojs/taro";
import { useState } from "react";
import { useImage } from "taro-hooks";
import { uploadApi } from "../upload-api";

export type FileItem = Record<string, { url: { download?: string, preview?: string }, progress: number, name: string }>

/**
 * @param isCompress  是否开启压缩 
 */
export const useUploadMultiple = ({ count, isCompress }: { isCompress?: boolean, count?: number }) => {
    const [
        fileInfo,
        { choose, chooseMessageFile, preview, save, getInfo, compress },
    ] = useImage({ count, sizeType: ['original', 'compressed'], sourceType: ['album', 'camera'], })

    const [files, setFiles] = useState<FileItem>({})

    const selectFile = async () => {
        const file = await choose()
        const newFils = { ...files }
        file.tempFiles.forEach((element) => {
            onUpload(element, {}, newFils)
        });
    }

    const onUpload = async (
        file: any,
        formData: any,
        newFils: FileItem
    ) => {
        const { path, originalFileObj = {} } = file
        const name = (Taro.getEnv() === 'WEAPP' ? path.split('/tmp')[1] : originalFileObj.name).replaceAll('_')
        newFils[name] = {
            name,
            progress: 0,
            url: {}
        }

        const item = newFils[name]
        const _data: any = await uploadApi(isCompress ? (await compress(path)).tempFilePath : path, name, formData, (prog: number) => {
            item.progress = prog
            prog !== 100 && setFiles({ ...newFils })
        })
        item.url = {
            download: _data?.download, // 只需要改这里
            preview: _data?.preview
        }
        setFiles({ ...newFils })
    }

    const removeFile = (key) => {
        const newFils = { ...files }
        delete newFils[key]
        setFiles(newFils)
    }

    return {
        selectFile,
        tempFilePaths: fileInfo.tempFilePaths,
        onUpload,
        removeFile,
        files,
        preview: (src) => preview({ urls: Object.values(files).map(e => e.url.download), current: src })
    }
}