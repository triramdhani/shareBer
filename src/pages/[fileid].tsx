import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout'
import Header from '@/components/section/Header/Header'
import { NextPageWithLayout } from './page'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

type Data = {}
export const getServerSideProps: GetServerSideProps<{ data: Data }> = async (context) => {
  // const res = await fetch('https://.../data')
  // const data: Data = await res.json()
  let data = 'tri'
  console.log(context.params)

  return {
    props: {
      data
    }
  }
}

const FileDowloadPage: NextPageWithLayout = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // console.log(data)
  return (
    <div>
      <h1>File Download Page</h1>
      {data}
    </div>
  )
}

export default FileDowloadPage

FileDowloadPage.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <Header />
      {page}
    </PrimaryLayout>
  )
}
