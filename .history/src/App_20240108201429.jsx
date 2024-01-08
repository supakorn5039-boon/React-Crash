import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Button from "./Components/Button";
import "./App.css";

export default function App() {
  const [name , setName] = useState('Click me')
  return (
    <div>
      <Navbar />
      <Button name="Search"></Button>
    </div>
  );
}