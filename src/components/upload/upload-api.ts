import Taro from "@tarojs/taro"

export type UploadResult = {
    download: string
    preview: string
}
export const uploadApi = async (
    filePath: string,
    name = '',
    formData = {},
    onProgress = (_progress: number) => { }
) => {
    return new Promise(resolve => {
        const task = Taro.uploadFile({
            name: name,
            url: 'http://49.235.84.243:8701/ossKey',
            filePath,
            formData,
            success(ret) {
                const data = JSON.parse(ret.data).data as UploadResult
                resolve(data)
            },
        })

        task.progress(res => {
            onProgress?.(res.progress)
        })
    })
}