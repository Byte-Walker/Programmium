import React, { useState } from 'react';
import LogInImg from '../../resources/LogIn.svg';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';

// ------------------------------------------------------------------

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [name, setName] = useState('');
    const {auth, errorMessage, signUpWithGoogle, signInWithEmail} = useFirebase();

    return (
        <div className="max-width p-12 py-24">
            <div className="grid grid-cols-2 gap-8 place-items-center">

                {/* Left side create account section */}
                <div className="p-14 rounded-lg border border-blue-300">
                    {/* Heading */}
                    <div className="pb-4 text-center">
                        <h1 className="text-4xl font-semibold my-4 text-blue-600">
                            Log In
                        </h1>
                    </div>

                    {/* Form */}
                    <form className="mx-auto" onSubmit={(e) => {signInWithEmail(e, auth, email, password)}}>
                        <div className="mb-5">
                            <label
                                className="block text-sm font-bold mb-2 text-gray-600"
                                htmlFor="email"
                            >
                                Email address
                            </label>
                            <input
                                className="border border-gray-300 bg-gray-100 focus:bg-white focus:shadow-lg focus:outline-none focus:ring rounded py-2 px-4 w-full"
                                type="email"
                                name="email"
                                placeholder="example@domain.com"
                                onBlur={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                className="block text-sm font-bold mb-2 text-gray-600"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="border border-gray-300 bg-gray-100 focus:bg-white focus:shadow-lg focus:outline-none focus:ring rounded py-2 px-4 w-full"
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                onBlur={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>
                        <div className="flex justify-between items-center text-sm">
                         <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="agree"
                                className="mr-2"
                            />
                            <p>
                                Remember me
                            </p>
                        </div>

                        <Link to="/accountrecovery" className="text-blue-600 font-bold hover:underline">Forgot password?</Link>
   
                        </div>
                        
                        {/* Error message */}
                        <small className="text-red-600 font-bold mt-4 block">
                            {errorMessage}
                        </small>

                        {/* Submit button */}
                        <div className="text-center">
                            <input
                                className="px-4 py-3 mb-8 mt-2 w-full font-semibold bg-blue-600 text-white focus:bg-blue-200 focus:text-blue-600 cursor-pointer rounded"
                                type="submit"
                                value="Log In"
                            />
                        </div>
                    </form>

                    {/* Divider */}
                    <div className="flex justify-around items-center">
                        <div className="w-2/5 h-px bg-gray-300"></div>
                        <p className="mx-2 font-semibold text-gray-500">OR</p>
                        <div className="w-2/5 h-px bg-gray-300"></div>
                    </div>

                    {/* Google sign up button */}
                    <div>
                        <button
                            onClick={signUpWithGoogle}
                            className="flex items-center justify-center my-8 border font-semibold py-3 rounded bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white border-blue-300 text-center w-full transition-all duration-300"
                        >
                            <i className="fab fa-google mx-2.5"></i>
                            <p>Continue with Google</p>
                        </button>
                    </div>

                    <div className="text-center">
                        <p>
                            Don't have an account yet?{' '}
                            <Link to="/signup" className="text-blue-600 font-bold hover:underline">Register here</Link>
                        </p>
                    </div>
                </div>

                {/* Right side image */}
                <div>
                    <img className="w-full" src={LogInImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default LogIn;
