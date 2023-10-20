import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
    name:'login',
    initialState:{
        logic:false
    },
    reducers:{
        setStatus(state,action){
            
            state.logic = action.payload.logic

        }
    }
});

export  const LoginActions = LoginSlice.actions;

export default LoginSlice;