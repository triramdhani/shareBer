import React, { ReactNode } from 'react'

export interface IPrimarylayout {
  children: ReactNode
}

const PrimaryLayout = ({ children }: IPrimarylayout) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default PrimaryLayout
