import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch :false,
    },
    reducers:{
        toggleGptSearchView :(state ,action)=>
        {
           state.showGptSearch =!state.showGptSearch;
        }
    }
})
   

export default GptSlice.reducer;
export const {toggleGptSearchView} =GptSlice.actions;