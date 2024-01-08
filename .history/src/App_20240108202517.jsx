import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Button from "./Components/Button";
input
import "./App.css";
import input from "./Components/input";

export default function App() {
  const [name, setName] = useState("Click me");
  return (
    <div>
      <Navbar />
      <Button name="Search">{name}</Button>
    </div>
  );
}
