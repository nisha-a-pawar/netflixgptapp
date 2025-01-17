import React from 'react';
import { useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { LOGO_URL, SupportedLanguages, USER_AVATAR } from '../utils/constant';
import { toggleGptSearchView } from '../utils/GptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const user = useSelector(store => store.user);
  const showGptSearch =useSelector(store=>store.gpt.showGptSearch);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleGptSearchClick =()=>{
    dispatch(toggleGptSearchView());
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName
        }))
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    return () => unsubscribe();
  }, []);



  const handleSignOut = () => {


    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/errorpage");

    });

  }

  const handleLanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className="absolute top-0 left-0 right-0  w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex  justify-between">
      <img className="w-44"  src={LOGO_URL} alt="logo" />

      

      <div className='p-1 flex gap-2 items-center'>
        
        {showGptSearch && (
          <select className='m-2 px-3 py-1 rounded-sm bg-gray-700 text-white'
         onChange={handleLanguageChange}>
          {SupportedLanguages.map((lang)=>(
               <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
          )
          )}
        </select>)}
        <button className='p-4 h-10 m-4 bg-purple-600 text-white rounded  flex items-center '
        onClick={handleGptSearchClick}>{showGptSearch ? "Back to Home" :"GPT Search"}</button>
        <div className='flex gap-0 items-center'>
        {user &&
          <img className=" h-8 w-8 m-1 rounded-lg" src={user?.photoURL || USER_AVATAR}></img>
        }
 
        {user &&  
          <><p className="text-white font-bold p-2 m-2 text-center">{user.displayName}</p>
          <button className="p-4 h-10 m-4 bg-red-600 text-white rounded  flex items-center"
              onClick={handleSignOut}>Sign Out</button></>
        
       
        }    
      </div>

    </div>
    </div>

 );
};

export default Header;
