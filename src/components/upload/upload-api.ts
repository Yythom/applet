import Taro from "@tarojs/taro";

export const uploadApi = async (filePath: string, name = '', formData = {}, onProgress = (progress: number) => { }) => {
    return new Promise((resolve) => {
        const task = Taro.uploadFile({
            name: name,
            url: 'http://49.235.84.243:8701/ossKey',
            filePath,
            formData,
            success(ret) {
                resolve((JSON.parse(ret.data) as any).data)
            },
        })
     
        task.progress((res) => {
            onProgress?.(res.progress)
        })
    });
}