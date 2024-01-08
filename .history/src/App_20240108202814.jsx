import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Button from "./Components/Button";
iport 
import "./App.css";

export default function App() {
  const [name, setName] = useState("Click me");
  return (
    <div className="App">
      <Navbar />
      <input />
      <Button name="Search">{name}</Button>
    </div>
  );
}
