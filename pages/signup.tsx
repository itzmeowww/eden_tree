import React, { useEffect, useState } from 'react';
import { GoogleLoginButton } from 'ts-react-google-login-component';
import GoogleLogin from 'react-google-login';
import MicrosoftLoginButton from '../components/MicrosoftLoginButton';
import SignupForm from '../components/SignupForm';


const Register = () => {





    return (
        <div>
            <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
                <div className="w-full sm:max-w-md p-5 mx-auto">
                    <h2 className="mb-12 text-center text-4xl font">Sign Up</h2>
                    <div className="p-8 rounded-md border border-black divide-y divide-black divide-solid">
                        <div>
                            <SignupForm />
                            <div className='flex items-center justify-end mb-4'>
                                <a href="/signin"><button className=" border border-black rounded text-black bg-white hover:bg-black py-2 px-4 hover:text-white"> Sign In</button></a>
                            </div>
                        </div>
                        <div>
                            <div className="mt-6 flex items-center justify-center">
                                <GoogleLogin disabled={true} className=' px-2 border rounded-xl text-base w-auto justify-center items-center border-' clientId='#your_id'
                                />
                            </div>
                            <div className="mt-6 flex items-center justify-center">
                                <MicrosoftLoginButton buttonTheme='light' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;