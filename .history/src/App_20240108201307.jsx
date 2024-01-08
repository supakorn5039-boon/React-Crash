import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";

export default function App() {
  const [name, setName] = useState("Click me");
  return (
    <div>
      <Navbar />
      <button>{name}</button>
    </div>
  );
}
