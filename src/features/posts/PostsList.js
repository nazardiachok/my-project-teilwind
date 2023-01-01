import { useSelector } from "react-redux";
import AddPostForm from "./AddPostForm";

function PostsList() {
    const posts = useSelector(state=> state.posts)

    return ( 
        <>
        <AddPostForm></AddPostForm>

        <div className="flex p-10 w-96 mx-auto flex-col">
            <div className="font-bold p-5">Posts: </div>
            <div className="">
                {posts
                    /* .sort((a,b)=>a.id-b.id) */
                    .map(post=>
                    <div className="border rounded-lg p-5 mt-5" key={post.id}>
                        <h3 className="font-bold font-xl">{post.title}</h3>
                        <p>{post.content}</p>
                        <p> {post.author === "" || post.author === undefined ? "By Uknown Author" : `By ${post.author}` }</p>
                    </div> )}
            </div>
    </div> 
        </>
    
    );
}

export default PostsList;