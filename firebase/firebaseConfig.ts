import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC4FXbf0H2KcseFyeLj7hQfTcy7mbVl6XA',
  authDomain: 'eden-tree.firebaseapp.com',
  projectId: 'eden-tree',
  storageBucket: 'eden-tree.appspot.com',
  messagingSenderId: '256230131576',
  appId: '1:256230131576:web:7c5384c1040ae43c4bea8d',
  measurementId: 'G-FRRY4ZG88N',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
