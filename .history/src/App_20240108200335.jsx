import React from "react";
import Navbar from "./Components/Navbar";
import './'



export default function App() {
  const name = "Boon";
  return (
    <div>
      <Navbar />

      <button>{name}</button>
    </div>
  );
}
