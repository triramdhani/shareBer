import Link from 'next/link'
import { NAV_LIST } from '../data'

const Sidebar = () => {
  return (
    <div className='w-2/12 bg-green-400 sticky h-[80vh] top-20'>
      {NAV_LIST.map((item) => {
        return (
          <div key={item.name} className='mb-2'>
            <Link href={item.path}>{item.name}</Link>
          </div>
        )
      })}
    </div>
  )
}

export default Sidebar
