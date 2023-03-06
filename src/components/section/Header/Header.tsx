import Link from 'next/link'
import { Dispatch, SetStateAction, useState } from 'react'
import { NAV_LIST } from '../data'
import GetSize from '@/hooks/GetSize'
import { useRouter } from 'next/router'
import TopHeader from './TopHeader'
import NavChild from './NavBar'

function Header() {
  const [isOpenNav, setIsOpeNav] = useState(false)
  const handleMenuClick = (): void => {
    setIsOpeNav(!isOpenNav)
  }
  const width = GetSize()
  const router = useRouter()

  const isUserPage = router.pathname === '/user'
  console.log(router.pathname)
  const user = 'Tri'
  if (isUserPage) {
    return (
      <TopHeader handleMenuClick={handleMenuClick}>
        <div className='hidden md:flex'>
          <span>Hallo, {user}!!</span>
          <button>Logout</button>
        </div>
        {isOpenNav ? (
          <div className='md:hidden'>
            <NavBar setIsOpenNav={setIsOpeNav} />
          </div>
        ) : null}
      </TopHeader>
    )
  }
  return (
    <TopHeader handleMenuClick={handleMenuClick}>
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
    </TopHeader>
  )
}

interface INavBar {
  setIsOpenNav: Dispatch<SetStateAction<boolean>>
}
const NavBar = ({ setIsOpenNav }: INavBar) => {
  const handleCLoseNav = (): void => {
    setIsOpenNav((prev) => !prev)
  }
  const router = useRouter()
  const isUserPage = router.pathname === '/user'

  if (isUserPage) {
    return (
      <NavChild handleCloseNav={handleCLoseNav}>
        {NAV_LIST.map((item) => {
          if (item.isProtected === true)
            return (
              <div key={item.name} className='mb-2 px-2 text-white text-inherit'>
                <Link href={item.path}>{item.name}</Link>
              </div>
            )
        })}
      </NavChild>
    )
  }
  return (
    <NavChild handleCloseNav={handleCLoseNav}>
      {NAV_LIST.map((item) => {
        if (item.isProtected === false)
          return (
            <div key={item.name} className='mb-2 px-2 text-white text-inherit'>
              <Link href={item.path}>{item.name}</Link>
            </div>
          )
      })}
    </NavChild>
  )
}
export default Header
