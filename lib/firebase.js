// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBUF39a5kh3dJowhuqEB4x0t2F-rF5pQRs',
  authDomain: 'file-sharing-379712.firebaseapp.com',
  projectId: 'file-sharing-379712',
  storageBucket: 'file-sharing-379712.appspot.com',
  messagingSenderId: '789975008659',
  appId: '1:789975008659:web:518f79f3288061b8f4d466',
  measurementId: 'G-V4RXCSC6WE'
}

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig)
// const analytics = getAnalytics(firebase);
export const db = getFirestore(firebase)
