import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Button from "./Components/Button";
import Input from "./Components/Input";
import "./App.css";

export default function App() {
  const [name, setName] = useState("Click me");
  return (
    <div className="App">
      <Navbar />
      <Input />
      <Button name="Search">{name}</Button>
    </div>
  );
}
