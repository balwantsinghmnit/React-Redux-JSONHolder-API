import {FETCH_POSTS,NEW_POST,DELETE_POST} from "./types";

//fetch posts
export const fetchPosts = ()=> dispatch=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(posts=>dispatch({
        type:FETCH_POSTS,
        payload:posts
    }))
}

//new post 
export const createPost = (newPost)=>dispatch=>
{
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(newPost)
    })
    .then(res=>res.json())
    .then(post=>dispatch({
        type:NEW_POST,
        payload:post
    }))
}

//delete post
export const deletePost = (id)=>dispatch=>{
    dispatch({
        type:DELETE_POST,
        payload:id
    });
}
