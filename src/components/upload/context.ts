import { createContext } from "src/utils"
import { useUpload } from "./hooks/use-upload"
import { useUploadMultiple } from "./hooks/use-upload-multiple"

export const [UploadProvider, useUploadContext] = createContext<ReturnType<typeof useUpload>>({ name: 'UploadContext' })

export const [UploadMultipleProvider, useUploadMultipleContext] = createContext<ReturnType<typeof useUploadMultiple>>({ name: 'UploadContext' })
