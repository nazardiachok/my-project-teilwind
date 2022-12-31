import { createSlice } from "@reduxjs/toolkit";

const initialState = [
{id: "1", title: "Learning Redux Toolkit", content: "I have heard good things."},
{id: "2", title: "JHLKJh jkhkj hlkhö", content: "iÖ Höhjk hH lkJH kjhhk jH L."}
]

const postSlice =createSlice({
    name: "posts",
    initialState,
    reducers:{
        postAdded(state,action){
            state.push(action.payload)
        }
    }
})

export const {postAdded} = postSlice.actions;

export default postSlice.reducer