// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: 'file-sharing-379712',
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: '1:789975008659:web:518f79f3288061b8f4d466',
  measurementId: 'G-V4RXCSC6WE'
}

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig)
// const analytics = getAnalytics(firebase);
export const db = getFirestore(firebase)
