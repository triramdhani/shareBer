import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout'
import Header from '@/components/section/Header/Header'
import Head from 'next/head'
import { ChangeEvent, createRef, useState } from 'react'
import { NextPageWithLayout } from './page'
import { generateId } from '../../utils/generateId'
import Link from 'next/link'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { firebase } from '../../lib/firebase'
import { AddPublicFile } from '../../lib/model'
import { format } from 'date-fns'

const berkas = getStorage(firebase)
const HOST_URL = process.env.NEXT_PUBLIC_HOST

const Home: NextPageWithLayout = () => {
  const inputRef = createRef<HTMLInputElement>()
  const [fileValue, setFileValue] = useState('') // from input
  const [newFileId, setNewFileId] = useState('') //fileid
  const [succes, setSucces] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const PostUploadFile = async (file: any, fileId: string) => {
    console.log('upload file start')
    const createdDate = format(new Date(), 'dd/MM/yyyy HH:mm:ss')
    const fileUrlPage = `${HOST_URL}/${fileId}`
    const storageRef = ref(berkas, `config/${file.name}`)
    const fileName = file.name
    const uploadTask = uploadBytesResumable(storageRef, file)
    console.log('finish upload')

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        // setProgresspercent(progress);
      },
      (error) => {
        alert(error)
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          return downloadURL
        })
        AddPublicFile(fileId, createdDate, fileUrlPage, url, fileName, file)
        setIsLoading(false)
        setSucces(true)
      }
    )
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFileValue(e.currentTarget.value) // for input value
    const files = e.currentTarget.files
    setFile(files!.item(0)) // store files api to state
    setSucces(false) //if file changed succes should false
  }
  const cleanState = () => {
    setFile(null)
    setFileValue('')
  }
  const handleUploadButton = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const fileId = generateId()
      setNewFileId(fileId)
      PostUploadFile(file, fileId)
      setTimeout(() => {
        cleanState()
      }, 1000)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Head>
        <title>Easyshare Beta</title>
        <meta name='description' content='Easy share easy Earn' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='py-10 text-center'>
        <p>File maximum size 1Mb</p>
        <div className='px-3 py-6 mt-1 w-8/12 m-auto md:w-4/12 border border-dashed border-slate-600 rounded'>
          <form action='' onSubmit={handleUploadButton} className='text-center'>
            <input
              type='file'
              name='file'
              id='file'
              ref={inputRef}
              value={fileValue}
              onChange={handleFileChange}
              className='w-full overflow-hidden'
            />
            <br />
            <button
              type='submit'
              className='border px-3 py-1 mt-2 rounded bg-blue-500 text-white'
              disabled={fileValue === '' ? true : false}
            >
              Upload
            </button>
          </form>
        </div>
        <p>{}</p>
        {isLoading ? (
          <div className='w-10/12 mt-3 py-6 border rounded m-auto'>
            <h1 className='text-xl font-semibold'>Uploading your file....</h1>
            <p className='text-[12px] text-blue-800 font-bold'>Please Wait a moments!!!!</p>
          </div>
        ) : null}
        {succes ? (
          <div className='w-10/12 mt-3 py-4 border rounded m-auto'>
            <p>File has been Uploaded successfully!</p>
            <Link href={`/${newFileId}`}>Go to File</Link> <br />
            <textarea
              name='newFile'
              id='newFile'
              rows={1}
              value={`${HOST_URL}/${newFileId}`}
              onChange={() => setSucces(true)}
              className='text-xs w-8/12 m:w-3/12 lg:w-3/12 px-2 py-1'
            ></textarea>
            <p className='text-red-800 font-semibold text-[12px]'>Make sure you saved your link!!</p>
          </div>
        ) : null}
      </main>
    </>
  )
}

export default Home

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <Header />
      {page}
    </PrimaryLayout>
  )
}
