import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";

export default function App() {
  const name = "Boon";
  return (
    <div>
      <Navbar />
      <button>{name}</button>
    </div>
  );
}
