import React from 'react';
import { GoogleLoginButton} from 'ts-react-google-login-component';

class Login extends React.Component {

    preLoginTracking(): void {
        console.log('Attemp to login with google');
    }

    errorHandler(error: string): void{
        console.error(error)
    }

    responseGoogle(googleUser: gapi.auth2.GoogleUser): void {
        const id_token = googleUser.getAuthResponse(true).id_token
        const googleId = googleUser.getId()

        console.log({ googleId })
        console.log({accessToken: id_token})

    }

    render(): JSX.Element {
        const clientConfig = { client_id: 'youappid' }
        const signInOptions = { scope: 'profile' }
        return (
        <div>
            <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
                <div className="w-full sm:max-w-md p-5 mx-auto">
                    <h2 className="mb-12 text-center text-5xl font-extrabold">Login</h2>
                    <div className="divide-y-4 divide-slate-700 divide-dashed outline p-4 outline-offset-4">
                        <div>
                            <div className="mb-4">
                                <label className="block mb-1">Email-Address</label>
                                <input id="email" type="text" name="email" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Password</label>
                                <input id="password" type="password" name="password" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
                            </div>
                            <div className="mb-2 grid justify-items-center">
                                <button className="rounded bg-green-700 hover:bg-green-900 
                                py-2 px-4 text-white"> Sign up</button>
                            </div>
                            <div className="mb-6 text-center">
                                <a href="#" className="text-sm"> Forgot your password? </a>
                            </div>
                        </div>
                        <div>
                            <div className="mt-6 flex items-center justify-center">
                                <GoogleLoginButton
                                    responseHandler={this.responseGoogle}
                                    clientConfig={clientConfig}
                                    preLogin={this.preLoginTracking}
                                    failureHandler={this.errorHandler}
                                    singInOptions={signInOptions}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

}

export default Login;