import { useState } from 'react';
import React from 'react';
import Header from './Header';



const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div className="relative h-screen w-full flex flex-col ">

      <Header />


      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_small.jpg"
        alt="background"
        className="absolute h-full w-full object-cover  -z-10"
      />

      {/* Login Form */}
      <form
        action="submit"
        className="w-3/12 absolute mx-auto my-36  right-0 left-0 bg-opacity-70 text-white"
      >
        <div className="bg-black bg-opacity-80 p-8 rounded-md w-80 shadow-lg">
          <h1 className="text-2xl font-bold mb-6">{isSignInForm ? "Sign Up" : "Sign In"}</h1>
          {
            !isSignInForm &&
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full p-3 mb-4 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
            />
          }

          <input
            type="text"
            placeholder="Enter UserId"
            className="w-full p-3 mb-4 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-3 mb-4 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full p-3 bg-red-600 rounded-md font-semibold hover:bg-red-700"
            onClick={toggleSignIn}
          >
            {isSignInForm ? "Sign Up" : "Sign In"}
          </button>
          <p className=''><input type='checkbox' ></input> Remember Me </p>

          <div className='py-6'>
            <p className='font-bold  mx-1 text-white hover:text-xs cursor-pointer' onClick={toggleSignIn}>
              {isSignInForm ?
                "New to Netflix? Sign Up Now" :
                "Already a Memeber? Sign in"}
            </p>
            <p className='text-[10px] py-3 text-gray-500'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
