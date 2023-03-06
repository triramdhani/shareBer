import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction, useState } from 'react'
import { NAV_LIST } from '../data'
import GetSize from '@/hooks/GetSize'

function Header() {
  const [isOpenNav, setIsOpeNav] = useState(false)
  const handleMenuClick = (): void => {
    setIsOpeNav(!isOpenNav)
  }
  const width = GetSize()

  return (
    <div className='py-4 md:flex justify-between'>
      <div className='flex justify-between sticky top-0'>
        <Link href={'/'}>
          <Image src='' alt='' />
          <h1>easyShare</h1>
        </Link>
        <span className='cursor-pointer md:hidden' onClick={handleMenuClick}>
          Menu
        </span>
      </div>
      {isOpenNav ? (
        <div>
          <NavBar setIsOpenNav={setIsOpeNav} />
        </div>
      ) : null}
      {isOpenNav !== true && width > 768 && (
        <div className='hidden md:flex gap-4'>
          <NavBar setIsOpenNav={setIsOpeNav} />
        </div>
      )}
    </div>
  )
}

interface INavBar {
  setIsOpenNav: Dispatch<SetStateAction<boolean>>
}
const NavBar = ({ setIsOpenNav }: INavBar) => {
  const handleCLoseNav = () => {
    setIsOpenNav((prev) => !prev)
  }
  return (
    <div className='absolute w-6/12 h-full pt-10 px-4 top-0 left-0 bg-blue-300 z-20 md:flex md:relative md:p-0 md:w-full md:bg-inherit '>
      <span className='absolute top-0 right-2 md:hidden' onClick={handleCLoseNav}>
        X
      </span>
      <div className='px-2 text-black hidden md:block lg:block'>
        <Link href={'/'}>Upload</Link>
      </div>
      {NAV_LIST.map((item) => {
        return (
          <div key={item.name} className='mb-2 px-2 text-white text-inherit'>
            <Link href={item.path}>{item.name}</Link>
          </div>
        )
      })}
    </div>
  )
}
export default Header
