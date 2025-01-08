import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter } from 'react-router'
import { RouterProvider} from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/firebase';
import {useDispatch} from 'react-redux';
import {addUser ,removeUser} from '../utils/userSlice';
import { useSelector } from 'react-redux'; 


const Body = () => {
  const dispatch =useDispatch();
  
  useEffect( ()=>{
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid,email,displayName} = user;
            dispatch(addUser({uid:uid ,email:email ,displayName:displayName}))
          } else {
            dispatch(removeUser());
          }
        });
    
      },[]);

      const appRouter = createBrowserRouter([
        {
            path: "/",
            element:  <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }

    ])


    
    return (
        <div>
            <RouterProvider router= {appRouter}/>
        </div>
    )
}

export default Body;
