import { useContext } from "react";
import { PostList } from "../store/Post-store";
import { FaDeleteLeft } from "react-icons/fa6";
const Post=({post})=>{

const {deletePost }=useContext(PostList);

    return <div className="card card-body" style={{width: "30rem"}}>
    {/* <img src="..." className="card-img-top" alt="..."/> */}
    <div className="card-body">
      <h5 className="card-title">{post.title}
      <span  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
      onClick={()=>{deletePost(post.id)}}  >
      <FaDeleteLeft /></span>
      </h5>
      <p className="card-text">{post.body}</p>
      { post.tags.map((tag)=>(<span key={tag}className="badge text-bg-primary hashtag">{tag}</span>))}
    </div>
    <div className="alert alert-success reactions" role="alert">
This Post has been reacted by {post.reaction} people.
</div>
  </div>
}
export default Post;