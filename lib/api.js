// import axios from 'axios'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { firebase } from './firebase'
import { AddPublicFile } from './model'
import { format } from 'date-fns'

const berkas = getStorage(firebase)
const HOST_URL = process.env.NEXT_PUBLIC_HOST

export const PostUploadFile = async (file, fileId) => {
  console.log('upload file start')
  const createdDate = format(new Date(), 'dd/MM/yyyy HH:mm:ss')
  const fileUrlPage = `${HOST_URL}/${fileId}`
  const storageRef = ref(berkas, `config/${file.name}`)
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
    () => {
      let liveUrl = ''
      const getUrl = () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL)
          liveUrl = downloadURL
        })
      }
      getUrl()
      if (liveUrl !== '') {
        AddPublicFile(fileId, createdDate, fileUrlPage, liveUrl)
      }
      console.log('harus sesudah url')
      setTimeout(() => {
        AddPublicFile(fileId, createdDate, fileUrlPage, liveUrl)
        console.log('selesai')
      }, 1000)
    }
  )
}

export const GetDowloadFile = () => {}
