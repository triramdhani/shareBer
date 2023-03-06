import Sidebar from '@/components/section/Sidebar/Sidebar'
import { ReactNode } from 'react'

interface IAuthLayout {
  children: ReactNode
}
const AuthLayout = ({ children }: IAuthLayout) => {
  return (
    <main className='flex'>
      <div className='w-2/12 bg-slate-300 hidden md:block md:w-2/12'>
        <Sidebar />
      </div>
      <div className=' md:w-10/12 py-4 px-8'>{children}</div>
    </main>
  )
}

export default AuthLayout
