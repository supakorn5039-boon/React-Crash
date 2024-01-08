import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Button from "./Components/Button";
import Input from "./Components/Input";
import "./App.css";

export default function App() {
  const [posts, setPosts] = useState([]);

  function addpost () {
    
  }
  return (
    <div className="App">
      <Navbar />
      <Input />
    </div>
  );
}
