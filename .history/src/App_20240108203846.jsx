import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Button from "./Components/Button";
import Input from "./Components/Input";
import "./App.css";

let id =1 

export default function App() {
  const [posts, setPosts] = useState([]);

  function addpost (title) {
    const newPost = {id,title}
    setPosts()
  }
  return (
    <div className="App">
      <Navbar />
      <Input />
    </div>
  );
}
