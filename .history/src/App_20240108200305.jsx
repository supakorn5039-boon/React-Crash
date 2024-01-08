import React from "react";
import Navbar from "./Components/Navbar";

export default function App() {
  const name = "Boon";
  return (
    <div>
      <Navbar />

      <button>{name}</button>
    </div>
  );
}
