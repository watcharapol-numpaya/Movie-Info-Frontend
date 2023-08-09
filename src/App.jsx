import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SamplePage from "./pages/SamplePage";
import TestPage from "./pages/TestPage";
import { Route, Routes } from "react-router-dom";
import MobileSearchPage from "./pages/MobileSearchPage";

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mobileSearchPage" element={<MobileSearchPage />} />
    </Routes>
  );
}

export default App;
