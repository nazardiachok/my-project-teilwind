import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postSlice";
import { useSelector } from "react-redux";

function AddPostForm() {
    const[title,setTitle]=useState("");
    const[content,setContent]=useState("");
    const[author,setAuthor]=useState("");


    const dispatch = useDispatch();
    const users = useSelector(state=> state.users)

    function onTitleChanged(e){
        setTitle(e.target.value)
    }
    function onContentChanged(e){
        setContent(e.target.value)
    }

    function onAuthorChanged(e){
        setAuthor(e.target.value);
        console.log(e.target.value)
    }

    function onSavePostClicked(){
        if(title && content){
            dispatch(postAdded({
                id:nanoid(),
                title,
                content,
                author
            }))

            setTitle(""); /* dafür muss in input value={title} stehen */
            setContent("");
            
        }
    }

    const canSave = Boolean(title) && Boolean(content);

    return ( 
        <div className="">
            <h2 className="flex mx-auto justify-center">Add Post Form:</h2>
            <form className="flex p-1 w-96 mx-auto flex-col">
                <label htmlFor="postTitle">Post Title: </label>
                <input className="border" type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChanged} />

                <label htmlFor="postTitle">Content: </label>
                <textarea className="border" id="postContent" name="postContent" value={content} onChange={onContentChanged} />

                <label htmlFor="Author">Author: </label>
                <select className="border mt-1" id="Author" value={author} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {users.map(user => 
                        <option key={user.id} value={user.name}>{user.name}</option>)}
                </select>
                
                <button className="flex border bg-cyan-800  w-20 mx-auto mt-2 text-white"
                type="button" 
                onClick={()=>onSavePostClicked()}
                disabled ={!canSave}
                >{canSave ? "Save" : "Disabled"}</button>
            </form>
        </div>
     );
}

export default AddPostForm;
