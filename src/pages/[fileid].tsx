import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout'
import Header from '@/components/section/Header/Header'
import { NextPageWithLayout } from './page'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { firebase } from '../../lib/firebase'
import { useEffect, useState } from 'react'
import { GetFileProp } from './page'
import { formatBytes } from '../../utils/byteConverter'
import Head from 'next/head'
export const db = getFirestore(firebase)
interface prop {
  params?: any
}

const FileDowloadPage: NextPageWithLayout<prop> = ({ params }) => {
  const [file, setFile] = useState({} as GetFileProp)
  const [succes, setSucces] = useState(false)

  const getData = async (fileId: any) => {
    const docRef = doc(db, 'config', fileId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const data = docSnap.data()
      const result: GetFileProp = {
        createdAt: data?.createdAt,
        fileId: data?.fileId,
        storageUrl: data?.storageUrl,
        urlFile: data?.urlFile,
        fileName: data?.fileName,
        fileType: data?.fileType,
        fileSize: data?.fileSize
      }
      setFile(result)
      setSucces(true)
    } else {
      console.log('No such document!')
    }
  }
  // console.log(file)
  useEffect(() => {
    const { fileid } = params
    getData(fileid)
  }, [])

  // console.log(data)

  if (!succes) {
    return (
      <div className='text-center m-auto'>
        <p className='my-6 text-2xl text-red-700'>Loading.....</p>
      </div>
    )
  }
  return (
    <>
      <Head>
        <title>Easyshare Alpha</title>
        <meta name='description' content='Easy share easy Earn' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='w-10/12 md:w-6/12 m-auto py-8 mt-6 border-2 border-dashed border-slate-800'>
        <h1 className='mb-4 text-center font-semibold'>File Download Page </h1>
        <div className='flex-col justify-center text-center'>
          <h1>{file.fileName}</h1>
          <div>
            <p>
              File Type : <span>{file.fileType}</span>
            </p>
            <p>
              File Size : <span>{formatBytes(file.fileSize)}</span>
            </p>
            <p>
              Date Published : <span>{file.createdAt}</span>
            </p>
          </div>
        </div>
        <div className='text-center pt-6 border'>
          <a
            className='px-4 py-2 text-base text-white bg-blue-400 font-semibold rounded'
            href={file.storageUrl}
            download={file.storageUrl}
          >
            Download
          </a>
        </div>
      </div>
    </>
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
FileDowloadPage.getInitialProps = async (context) => {
  const data = context.query
  return { params: data }
}
