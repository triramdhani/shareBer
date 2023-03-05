import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout'
import { signIn, useSession } from 'next-auth/react'
import { NextPageWithLayout } from './page'

const Home: NextPageWithLayout = () => {
  const { data: session } = useSession()

  const handleLogin = (): void => {
    signIn()
  }
  return (
    <>
      <div className='flex min-w-full justify-center '>
        <p className='text-2xl px-2'>next js starter by tri</p>
        <button onClick={handleLogin} className='border rounded px-2 bg-blue-800 text-white'>
          Login
        </button>
      </div>
      {!session ? guest() : authorizedUser({ session })}
    </>
  )
}
const guest = () => {
  return (
    <div className=''>
      <h1>Welcome guest</h1>
      <p>please login!!</p>
      <p>{}</p>
    </div>
  )
}
const authorizedUser = ({ session }: any) => {
  return (
    <div>
      <h1>Welcome Authorized guest</h1>
      <p>succesfull login!</p>
      <p>{session?.user.name}</p>
      <p>{session?.user.email}</p>
    </div>
  )
}
export default Home

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}
