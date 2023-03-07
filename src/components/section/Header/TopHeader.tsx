import Link from 'next/link'
import React, { ReactNode } from 'react'
// import Image from 'next/image'

interface ITopHeader {
  children: ReactNode
  handleMenuClick: () => void
}
const TopHeader = ({ children, handleMenuClick }: ITopHeader) => {
  return (
    <header className='px-4 py-4 md:flex justify-between bg-blue-500 sticky top-0'>
      <div className='flex justify-between '>
        <Link href={'/'}>
          {/* <Image src='' alt='' /> */}
          <h1>easyShare</h1>
        </Link>
        <span className='cursor-pointer md:hidden' onClick={handleMenuClick}>
          Menu
        </span>
      </div>
      {children}
    </header>
  )
}

export default TopHeader
