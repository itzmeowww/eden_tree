
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'
import { auth, db } from '../firebase/firebaseConfig'
import { getDoc, doc } from "firebase/firestore";
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Nav = () => {
  const [username, setUsername] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedIn(true)
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      getDoc(doc(db, 'users', uid)).then((snap) => {
        if (snap) {
          setLoading(false)
          setUsername(snap.data().username)
        }
      })

      // ...
    } else {
      setLoading(false)
      setIsLoggedIn(false)
      // User is signed out
      // ...
    }
  });

  const OnSignOut = () => {
    signOut(auth)
  }
  return <div className="text-white w-full h-14 fixed z-10 opacity-95 bg-black flex justify-between items-center px-6" >

    <div>
      <a href="/"><h1 className="text-lg font-bold">Eden-Tree</h1></a>
    </div>
    <div>
      {loading ? <AiOutlineLoading3Quarters className='animate-spin' />
        : isLoggedIn ?
          <div className="flex items-center gap-4"> {`Hi, ${username}`}
            <button onClick={OnSignOut} className="text-sm border border-white px-4 py-1 rounded-md hover:bg-white hover:text-black transition-colors">Sign Out</button></div>
          :
          <a href="/signin"> <button className="text-sm border border-white px-4 py-1 rounded-md hover:bg-white hover:text-black transition-colors">Sign In</button></a>
      }

    </div>

  </div>
}
export default Nav
