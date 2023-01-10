import { RootPortal } from '@tarojs/components'
import { getEnv } from '@tarojs/taro'
import { FC, PropsWithChildren } from 'react'

export const Portal = getEnv() === 'WEB' ? ({ children }) => children : RootPortal as FC<PropsWithChildren>

export * from './popup'
export * from './tabs'
export * from './popover'
export * from './upload'
export * from './picker'
export * from './iconfont'
export * from './input'
