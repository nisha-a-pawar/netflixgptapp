import {configureStore} from '@reduxjs/toolkit';

import userReducer from "./userSlice";
import { app } from './firebase';

const appStore = configureStore (
{
    reducer:{
        user:userReducer,
    },
}
   

)
export default appStore;
