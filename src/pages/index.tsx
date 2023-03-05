import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout'
import { NextPageWithLayout } from './page'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <section className='flex min-w-full justify-center '>
        <p className='text-2xl px-2'>next js starter by tri</p>
      </section>
    </>
  )
}

export default Home

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}
