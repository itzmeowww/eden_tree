import React, { useState } from 'react';
import { useFormik } from 'formik';
import { db, auth } from '../firebase/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from "firebase/firestore";
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import { useRouter } from "next/router"


type SignUpData = {
  email?: string;
  password?: string;
}
const validate = values => {
  const errors: SignUpData = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required'
  }
  else if (values.password.length < 8) {
    errors.password = 'Must be 8 characters or more'
  }

  return errors;
};


const SignupForm = () => {
  const router = useRouter()

  const [signingUp, setSigningUp] = useState(false)



  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    }, validate,
    onSubmit: values => {
      setSigningUp(true)
      // alert(JSON.stringify(values, null, 2));
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          const user = userCredential.user;
          router.replace('/')
        })
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">Email Address</label>
        <input id="email"
          disabled={signingUp}
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className={`py-2 px-3 border ${formik.errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-black focus:outline-none rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full`} />
        <h4 className='text-sm text-red-500 mt-1 ml-1'> {formik.errors.email}</h4>
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-1">Password</label>
        <input id="password"
          disabled={signingUp}
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className={`py-2 px-3 border ${formik.errors.password ? 'border-red-500' : 'border-gray-300'} focus:border-black focus:outline-none rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full`} />
        <h4 className='text-sm text-red-500 mt-1 ml-1'> {formik.errors.password}</h4>
      </div>


      <div className="mb-2 flex items-center justify-end">
        <button disabled={signingUp} className=" border border-black rounded text-black bg-white hover:bg-black py-2 px-4 hover:text-white"> {signingUp ? <AiOutlineLoading3Quarters className='animate-spin' /> : "Sign In"}</button>
      </div>

    </form>
  );
};

export default SignupForm