
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'
import { auth, db } from '../firebase/firebaseConfig'
import { getDoc, doc } from "firebase/firestore";
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import StyledButton from './StyledButton';

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
    <div className='flex items-center'>
      <a href="/"><h1 className="text-lg font-bold tracking-widest">SaraTree</h1></a>

    </div>
    <div>
      {loading ? <div className='flex items-center gap-2 justify-center'> <AiOutlineLoading3Quarters className='animate-spin' />
        <StyledButton onClick={OnSignOut} label="Sign Out" /> </div>
        : isLoggedIn ?
          <div className="flex items-center gap-4"> {`Hi, ${username}`}
            <StyledButton onClick={OnSignOut} label="Sign Out" /></div>
          :
          <a href="/signin"> <StyledButton onClick={OnSignOut} label="Sign In" /></a>
      }
    </div>
  </div>

}

export default Nav