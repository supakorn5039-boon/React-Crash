import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";

export default function App(props) {
  const [name, setName] = useState("Click me");
  return (
    <div>
      <Navbar />
      <button>{props.name}</button>
    </div>
  );
}
