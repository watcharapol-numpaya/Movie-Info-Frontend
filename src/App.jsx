import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
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
        <HomePage />

        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
