import React, { ReactNode } from 'react'

export interface IPrimarylayout {
  children: ReactNode
}

const PrimaryLayout = ({ children }: IPrimarylayout) => {
  return (
    <>
      {children}
      {/* <main className=''>{children}</main> */}
    </>
  )
}

export default PrimaryLayout
