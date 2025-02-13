import { useContext, useEffect } from "react"
import Post from "./Post"
import { PostList as PostListData } from "../store/Post-store"
import WelcomeMessage from "./Welcomemessage"
const PostList=( )=>{
const {postList,addsPost}=useContext(PostListData)

useEffect(()=>{
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data=>{
     addsPost(data.posts)
})},[])
return(<>
{  postList.length === 0 && <WelcomeMessage /> }
{postList.map((post) =>(<Post key={post.id} post={post}/>))}
</>)
}
export default PostList