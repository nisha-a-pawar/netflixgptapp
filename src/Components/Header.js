import React from 'react';
import { useSelector } from 'react-redux';
import {auth} from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router';

const Header = () => {
  const user = useSelector(state => state.user);
  const navigate = useNavigate()

  const handleSignOut = () => {

    
    signOut(auth).then(() => {
     navigate("/");
    }).catch((error) => {
     navigate("/errorpage");

    });

  }
  return (
    <div className="absolute px-24  bg-gradient-to-b from-black  w-full flex justify-between">

      <div>
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          className="w-56"
          alt="Netflix logo"
        />

      </div>
  {user ?
        <div className='p-4 flex'>
        <button className="p-4 h-10 m-4 bg-red-600 text-white rounded  flex items-center"
          onClick={handleSignOut}>Sign Out</button>
         <p className='text-white font-bold p-4 m-4 text-center'> {user ? user.displayName : 'Loading...'}  {/* Display 'Loading...' if user is null */}</p>
      </div>
      :
      
      <div className="flex items-center gap-4">
        
        <button
          name="language"
          id="language"
          className="px-4 py-2 text-white border border-gray-400 rounded bg-transparent flex items-center gap-2"
        >
          English <span>▽</span>
        </button>

        
        <button className="px-6 py-2 bg-red-600 text-white rounded">
          Login
        </button>
      </div> 
  }
      








    </div>
  );
};

export default Header;
