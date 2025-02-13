import { useContext,useRef } from "react";
import styles from "./CreatePost.module.css"
import { PostList } from "../store/Post-store";
const CreatePost=()=>{
  const {addPost}=useContext(PostList)

  const userIdElement=useRef();
  const bodyElement=useRef();
  const titleElement=useRef();
  const reactionsElement=useRef();
  const tagsElement=useRef();

  const HandleSubmit =(event)=>{
 event.preventDefault();
   const userId=userIdElement.current.value;
   const body=bodyElement.current.value;
   const titleId=titleElement.current.value;
   const reactions=reactionsElement.current.value;
   const tags=tagsElement.current.value.split(" ");
   userIdElement.current.value='',bodyElement.current.value='',titleElement.current.value='',reactionsElement.current.value='',tagsElement.current.value='',
   addPost( userId,titleId,body,reactions,tags);
  }
    return( <form className={`${styles.createpost}`} onSubmit={HandleSubmit}>
       <div className="mb-3">
          <label htmlFor="id" className="form-label">UserId</label>
          <input type="text" className="form-control" id="id" placeholder="Enter your UserID" ref={userIdElement}/>
          </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Post Title</label>
          <input type="text" className="form-control" id="title" placeholder="How are you feeling today"
          ref={titleElement}/>
          </div>
          <div className="mb-3">
          <label htmlFor="body" className="form-label">Post Content </label>
          <textarea rows="4" type="text" className="form-control" id="body" placeholder="Tell us more about you"
          ref={bodyElement}/>
          </div>

          <div className="mb-3">
          <label htmlFor="reactions" className="form-label">Number of reactions</label>
          <input type="text" className="form-control" id="title" placeholder="How many people reacted to this"
          ref={reactionsElement}/>
          </div>
          <div className="mb-3">
          <label htmlFor="tags" className="form-label">Enter your HashTags here</label>
          <input type="text" className="form-control" id="title" placeholder="Please enter tags with space"
          ref={tagsElement}/>
          </div>
       
        <button type="submit" className="btn btn-primary">Post</button>
      </form>)
}
export default CreatePost;