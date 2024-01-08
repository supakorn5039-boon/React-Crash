import React, { useState } from "react";
import Navbar from "./Components/Navbar";

import Input from "./Components/Input";
import Post from "./Components/Post";

import "./App.css";

let id = 1;

export default function App() {
  const [posts, setPosts] = useState([]);
  function addpost(title) {
    const newPost = { id, title };
    setPosts([newPost, ...posts]);
    id += 1;
  }

  return (
    <div className="App">
      <Navbar />
      <Input addpost={addpost} />
      {posts.map((post) => (
        <Post id={post.id} title={post.title} />
      ))}
    </div>
  );
}
