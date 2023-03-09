import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout'
import Header from '@/components/section/Header/Header'
import { NextPageWithLayout } from './page'
import axios from 'axios'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { firebase } from '../../lib/firebase'
import { useEffect, useState } from 'react'
import { GetFileProp } from './page'
import { getDownloadURL, ref } from 'firebase/storage'
import { getStorage } from 'firebase/storage'

const berkas = getStorage(firebase)

export const db = getFirestore(firebase)
// type Data = {}
// export const getServerSideProps: GetServerSideProps<{ data: Data }> = async (context) => {
//   // const res = await fetch('https://.../data')
//   // const data: Data = await res.json()
//   const params = context
//   let data = params.query
//   data.json()
//   console.log(data)
//   return {
//     props: {
//       data
//     }
//   }
// }
interface prop {
  params?: any
}

const FileDowloadPage: NextPageWithLayout<prop> = ({ params }) => {
  const [file, setFile] = useState({} as GetFileProp)
  const [succes, setSucces] = useState(false)
  // const {fileid} = params
  // console.log(fileid)
  const getData = async (fileId: any) => {
    const docRef = doc(db, 'config', fileId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      const data = docSnap.data()
      console.log(data)
      const result: GetFileProp = {
        createdAt: data?.createdAt,
        fileId: data?.fileId,
        storageUrl: data?.storageUrl,
        urlFile: data?.urlFile
      }
      setFile(result)
      setSucces(true)
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!')
    }
  }
  // console.log(file)
  useEffect(() => {
    const { fileid } = params
    getData(fileid)
    console.log(file)
  }, [])

  // console.log(data)

  if (!succes) {
    return <div>opps something wrong!!!</div>
  }
  return (
    <div className='w-10/12 md:w-6/12 m-auto text-center py-8 mt-6 border-2 border-dashed border-slate-800'>
      <h1>File Download Page {file?.fileId}</h1>
      <a className='px-4 py-2 text-base text-white bg-blue-400 font-semibold rounded' href={file.storageUrl}>
        Download
      </a>
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
FileDowloadPage.getInitialProps = async (context) => {
  // const params = context
  const data = context.query
  return { params: data }
}
