import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import GreenComponents from "./Components/GreenComponents";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
