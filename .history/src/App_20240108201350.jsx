import React from "react";
import Navbar from "./Components/Navbar";
import Button from "./Components/Button";
import "./App.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <Button name="Search"></Button>
    </div>
  );
}
