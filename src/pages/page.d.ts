import { NextPage } from 'next'
import { ComponentType, ReactElement, ReactNode } from 'react'

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (_page: ReactElement) => ReactNode
  layout?: ComponentType
}

export type GetFileProp = {
  createdAt: string
  fileId: string
  storageUrl: string
  urlFile: string
  fileName: string
  fileType: string
  fileSize: number
}
