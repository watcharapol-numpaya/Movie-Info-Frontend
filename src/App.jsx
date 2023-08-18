import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import MobileSearchPage from "./pages/MobileSearchPage";
import MovieInfoPage from "./pages/MovieInfoPage";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import CastInfo from "./pages/CastInfo";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/mobileSearchPage" element={<MobileSearchPage />} />
        <Route path="/movieInfo/:id" element={<MovieInfoPage />} />
        <Route path="/castInfo/:id" element={<CastInfo />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
