import Link from 'next/link'
import { NAV_LIST } from '../data'

const Sidebar = () => {
  return (
    <div className='fixed h-full pt-5 px-4 '>
      {NAV_LIST.map((item) => {
        if (item.isProtected === true)
          return (
            <div key={item.name} className='my-4 px-6'>
              <Link href={item.path}>{item.name}</Link>
            </div>
          )
      })}
    </div>
  )
}

export default Sidebar
