import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout'
import Header from '@/components/section/Header/Header'
import { IFileDownload, NextPageWithLayout } from './page'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import axios from 'axios'

type Data = {}
export const getServerSideProps: GetServerSideProps<{ data: Data }> = async (context) => {
  // const res = await fetch('https://.../data')
  // const data: Data = await res.json()
  const res = await axios.get()
  let data = 'tri'
  console.log(context.params)

  return {
    props: {
      data
    }
  }
}

const FileDowloadPage: NextPageWithLayout = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const handleDowload = async () => {}
  // console.log(data)
  return (
    <div className='w-10/12 md:w-6/12 m-auto text-center py-8 mt-6 border-2 border-dashed border-slate-800'>
      <h1>File Download Page</h1>
      <button className='px-4 py-2 text-base text-white bg-blue-400 font-semibold rounded' onClick={handleDowload}>
        Download
      </button>
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
