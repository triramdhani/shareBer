import React, { ReactNode } from 'react'

export interface IPrimarylayout {
  children: ReactNode
}

const PrimaryLayout = ({ children }: IPrimarylayout) => {
  return (
    <>
      <div className=''>{children}</div>
    </>
  )
}

export default PrimaryLayout
