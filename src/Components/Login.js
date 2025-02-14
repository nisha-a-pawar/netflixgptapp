import { useState, useRef } from 'react';
import React from 'react';
import Header from './Header';
import { checkValidData } from "../utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constant';
const Login = () => {

  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {

    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const nameValue = name.current?.value || "";
    const message = checkValidData(emailValue, passwordValue);
    setErrorMessage(message);

    if (message) return;  //if message is there dont go forward

    if (!isSignInForm) {    //sign up form logic
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          //  console.log("User created:", user);
          updateProfile(user, {
            displayName: nameValue,
            photoURL: USER_AVATAR
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL
                }))


            }).catch((error) => {
              setErrorMessage(error.message);
            });


        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
          console.error(errorCode, errorMessage);
        });
    }
    else {

      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {

          const user = userCredential.user;
          console.log(user);

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
          console.error(errorCode, errorMessage);
        });


    }


  };


  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };


  return (
    <div>
      <Header />
      <div className="">
        <img
          src={BG_URL}
          alt="background"
          className="absolute h-full w-full object-cover -z-10"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute mx-auto my-36 right-0 left-0 bg-opacity-70 text-white"
      >
        <div className="bg-black bg-opacity-80 p-8 rounded-md w-80 shadow-lg">
          <h1 className="text-2xl font-bold mb-6">{isSignInForm ? "Sign Up" : "Sign In"}</h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Enter Full Name"
              className="w-full p-3 mb-4 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Enter UserId"
            className="w-full p-3 mb-4 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
          />
          <input
            ref={password}
            type="password"
            placeholder="Enter Password"
            className="w-full p-3 mb-4 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
          />
          <p className="text-red-500 font-semibold py-3 text-sm ">{errorMessage}</p>

          <button
            type="submit"
            className="w-full p-3 bg-red-600 rounded-md font-semibold hover:bg-red-700"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign Up" : "Sign In"}
          </button>
          <p>
            <input type="checkbox" /> Remember Me
          </p>

          <div className="py-6">
            <p
              className="font-bold mx-1 text-white hover:text-xs cursor-pointer"
              onClick={toggleSignIn}
            >
              {isSignInForm
                ? "New to Netflix? Sign Up Now"
                : "Already a Member? Sign In"}
            </p>
            <p className="text-[10px] py-3 text-gray-500">
              This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
            </p>
          </div>
        </div>
      </form>
    </div>
    
  );
};
export default Login;