import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SamplePage from "./pages/SamplePage";
import TestPage from "./pages/TestPage";
import { Route, Routes } from "react-router-dom";
import MobileSearchPage from "./pages/MobileSearchPage";
import MovieInformationPage from "./pages/MovieInformationPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mobileSearchPage" element={<MobileSearchPage />} />
      <Route path="/movieInfo/:id" element={<MovieInformationPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
