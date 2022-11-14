import Taro from "@tarojs/taro";
import { useState } from "react";
import { useImage, useRequest } from "taro-hooks";
import { uploadApi } from "./upload-api";

/**
 * @param isCompress  是否开启压缩 
 */
export const useUpload = ({ isCompress }: { isCompress?: boolean }) => {
    const [
        fileInfo,
        { choose, chooseMessageFile, preview, save, getInfo, compress },
    ] = useImage({ count: 1, sizeType: ['original', 'compressed'], sourceType: ['album', 'camera'], })

    const { data, run, loading } = useRequest<any>(uploadApi, { manual: true })

    const [progress, setProgress] = useState(0)

    const selectFile = async () => {
        const file = await choose()
        onUpload(file.tempFiles[0])
    }

    const onUpload = async (file: any, formData = {}) => {
        const { path, originalFileObj = {} } = file
        const name = Taro.getEnv() === 'WEAPP' ? path.split('/tmp/')[1] : originalFileObj.name
        return await run(isCompress ? (await compress(path)).tempFilePath : path, name, formData, (prog) => { setProgress(prog) })
    }

    return {
        selectFile,
        tempFilePaths: fileInfo.tempFilePaths,
        onUpload,
        isLoading: loading,
        url: {
            download: data?.download, // 只需要改这里
            preview: data?.preview
        },
        progress,
        preview: (src) => preview({ urls: [data?.download], current: src })
    }
}