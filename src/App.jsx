import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold my-6">Hii from Home</h1>
          </div>
        } />
        <Route path="/about" element={
           <div className="container mx-auto px-4">
           <h1 className="text-3xl font-bold my-6">
            Hello from About</h1>
         </div>
        } />
      </Routes>
    </>
  );
}

export default App;
