import React, { useEffect, useState } from 'react';
import { GoogleLoginButton } from 'ts-react-google-login-component';
import GoogleLogin from 'react-google-login';
import MicrosoftLoginButton from '../components/MicrosoftLoginButton';
import SigninForm from '../components/SigninForm';
import DottedBackground from '../components/DottedBackground';
import Nav from '../components/Nav';
const Register = () => {





    return (
        <div>
            <Nav />
            <DottedBackground />
            <div className="w-full min-h-screen  flex flex-col sm:justify-center items-center pt-6 sm:pt-0">

                <div className="w-full sm:max-w-md p-5 mx-auto">
                    <h2 className="mb-12 text-center text-4xl font">Sign In</h2>
                    <div className="p-8 rounded-md bg-white border border-black divide-y divide-black divide-solid">

                        <div>
                            <SigninForm />
                            <div className='flex items-center justify-end mb-4'>
                                <a href="/signup"><button className=" border border-black rounded text-black bg-white hover:bg-black py-2 px-4 hover:text-white"> Sign Up</button></a>
                            </div>
                        </div>
                        <div>
                            <div className="mt-6 flex items-center justify-center">
                                <GoogleLogin disabled={true} className='px-2 border rounded-xl text-base w-auto justify-center items-center border-' clientId='#your_id'
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