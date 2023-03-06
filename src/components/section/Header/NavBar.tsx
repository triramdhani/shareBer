import Link from 'next/link'
import { ReactNode } from 'react'

interface INavChild {
  children: ReactNode
  handleCloseNav: () => void
}

const NavChild = ({ children, handleCloseNav }: INavChild) => {
  return (
    <div className='absolute w-6/12 h-full pt-10 px-4 top-0 left-0 bg-blue-300 z-20 md:flex md:relative md:p-0 md:w-full md:bg-inherit '>
      <span className='absolute top-0 right-2 md:hidden' onClick={handleCloseNav}>
        X
      </span>
      <div className='px-2 text-black hidden md:block lg:block'>
        <Link href={'/'}>Upload</Link>
      </div>
      {children}
    </div>
  )
}

export default NavChild
