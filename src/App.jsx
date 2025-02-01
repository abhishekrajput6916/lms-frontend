import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Hii from Home</h1>} />
        <Route path="/about" element={<h1>Hii from About</h1>} />
      </Routes>
    </>
  );
}

export default App;
