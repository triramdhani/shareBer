import Link from 'next/link'
import React, { ReactNode } from 'react'
// import Image from 'next/image'

interface ITopHeader {
  children: ReactNode
  handleMenuClick: () => void
}
const TopHeader = ({ children, handleMenuClick }: ITopHeader) => {
  return (
    <header className='px-4 py-4 md:px-16 md:flex justify-between bg-[#E3DFFD] sticky top-0'>
      <div className='flex justify-between '>
        <Link href={'/'}>
          {/* <Image src='' alt='' /> */}
          <h1 className='text-slate-400 text-lg font-bold'>easyShare</h1>
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
