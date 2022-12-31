import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postSlice";

function AddPostForm() {
    const[title,setTitle]=useState("");
    const[content,setContent]=useState("");
    const dispatch = useDispatch();

    function onTitleChanged(e){
        setTitle(e.target.value)
    }
    function onContentChanged(e){
        setContent(e.target.value)
    }

    function onSavePostClicked(){
        if(title && content){
            dispatch(postAdded({
                id:nanoid(),
                title,
                content}))

            setTitle("");
            setContent("")
        }
    }

    return ( 
        <div className="">
            <h2 className="flex mx-auto justify-center">Add Post Form:</h2>
            <form className="flex p-1 w-96 mx-auto flex-col">
                <label htmlFor="postTitle">Post Title: </label>
                <input className="border" type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChanged} />

                <label htmlFor="postTitle">Post Title: </label>
                <textarea className="border" id="postContent" name="postContent" value={content} onChange={onContentChanged} />

                <button className=" flex border bg-cyan-800 w-20 mx-auto mt-2" type="button" onClick={()=>onSavePostClicked()}>Save Post</button>
            </form>
        </div>
     );
}

export default AddPostForm;
