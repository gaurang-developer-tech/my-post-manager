import { createContext, useReducer } from "react";

export const PostList= createContext({
    postList:[],
    addPost :()=>{},
    addsPost :()=>{},
    deletePost :()=>{}  ,
  })
const PostListReducer=(currentPostList,action)=>
{
    let newpost=currentPostList;
    if(action.type==='DELETE_POST'){
        newpost=currentPostList.filter(post=>
            post.id!==action.payload.postid)
    }
    else if(action.type==='ADD_POST')
    {
       newpost=[action.payload,...currentPostList] 
    }
    else if(action.type==='ADDS_POST')
    {
        newpost=action.payload.posts;
    }
    return newpost;
}

const PostListProvider =({children})=>
{
    const addPost=(userId,titleId,body,reactions,tags)=>{
        dispatchPostList({
            type:"ADD_POST",
            payload:{
                id:Date.now(),
                title:titleId,
                body:body,
                reaction:reactions,
                userId:userId,
                tags:tags,
            }
        })

    }
    const addsPost=(posts)=>{
        dispatchPostList({
            type:"ADDS_POST",
            payload:{
                posts,
            }
        })

    }

    const deletePost=(postid)=>{
    dispatchPostList({
        type:"DELETE_POST",
        payload:{
         postid,
        },
    });
    }
    const[postList,dispatchPostList]=useReducer(PostListReducer,[]);
    return(
        <PostList.Provider value={
            {
                postList,addPost,deletePost,addsPost
            }
        }>{children}</PostList.Provider>
    )
}
export default PostListProvider