import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

import HomePage2 from "./pages/HomePage2";
import SamplePage from "./pages/SamplePage";
import TestPage from "./pages/TestPage";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-full bg-black ">
        <Navbar />
        {/* <SamplePage /> */}
        {/* <TestPage/> */}
        {/* <HomePage /> */}
        <HomePage2 />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
