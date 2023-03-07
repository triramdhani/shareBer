import { ReactNode } from 'react'

interface INavChild {
  children: ReactNode
  handleCloseNav: () => void
}

const NavChild = ({ children, handleCloseNav }: INavChild) => {
  return (
    <nav className='absolute w-6/12 h-screen pt-10 px-4 top-0 left-0 text-slate-600 font-medium bg-blue-300 z-20 md:flex md:h-full md:relative md:p-0 md:w-full md:bg-inherit '>
      <span className='absolute top-0 right-2 md:hidden' onClick={handleCloseNav}>
        X
      </span>
      {children}
    </nav>
  )
}

export default NavChild
