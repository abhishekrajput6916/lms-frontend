import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className={"bg-rose-500 "}>
        Hello World
      </div>
      <Routes>
        <Route path="/" element={<h1>Hii from Home</h1>} />
        <Route path="/about" element={<h1>Hii from About</h1>} />
      </Routes>
    </>
  );
}

export default App;
