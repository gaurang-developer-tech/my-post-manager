import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import { useState } from "react";
import PostList from "./components/PostList";
import PostListProvider from "./store/Post-store";
function App() {

const[selecttab,setselecttab]=useState("Home");

  return (
    <>
    <PostListProvider>
    <div className="app-container">
    <Sidebar selecttab={selecttab} setselecttab={setselecttab}/>
    <div className="content">
    <Header/>
    {selecttab==="Home" ?  <PostList/>:<CreatePost/>}
    
   
   <Footer/>
   </div>
   </div>
   </PostListProvider>
    </>
  )
}

export default App;
