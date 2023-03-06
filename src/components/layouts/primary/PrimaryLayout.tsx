import React, { ReactNode } from 'react'

export interface IPrimarylayout {
  children: ReactNode
}

const PrimaryLayout = ({ children }: IPrimarylayout) => {
  return (
    <>
      <div className='px-4 md:px-10 lg:px-16'>{children}</div>
    </>
  )
}

export default PrimaryLayout
