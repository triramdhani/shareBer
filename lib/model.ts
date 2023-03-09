import { setDoc, doc } from 'firebase/firestore'
import { db } from './firebase'

// interface IAddPublicFile {
//   fileId :string
//   createdAt : string
//   urlFile : string
// }

export const AddPublicFile = async (
  fileId: string,
  createdDate: string,
  fileUrlPage: string,
  liveUrl: string,
  fileName: string,
  file: File
) => {
  console.log('start create data')
  await setDoc(doc(db, 'config', fileId), {
    fileName: file.name,
    fileId: fileId,
    createdAt: createdDate,
    storageUrl: liveUrl,
    urlFile: fileUrlPage,
    fileType: file.type,
    fileSize: file.size
  })
  console.log('succesful!!')
}

export const ReadPublicFile = () => {
  console.log('read')
}
