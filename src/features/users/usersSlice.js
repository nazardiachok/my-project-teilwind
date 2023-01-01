import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: "1", name: "Nazar"},
    {id: "2", name: "Andrew"},
    {id: "3", name: "Sergey"},
    ]
    
    const usersSlice =createSlice({
        name: "users",
        initialState,
        reducers:{
            
        }
    })
    
    export const selectAllUsers = (state) => state.users;
    
    export default usersSlice.reducer