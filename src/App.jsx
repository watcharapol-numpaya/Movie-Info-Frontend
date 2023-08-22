import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import MobileSearchPage from "./pages/MobileSearchPage";
import MovieInfoPage from "./pages/MovieInfoPage";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import CastInfo from "./pages/CastInfo";
import ViewMoreMoviePage from "./pages/ViewMoreMoviePage";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/view-more/:title" element={<ViewMoreMoviePage />} />
        <Route path="/mobile-search-page" element={<MobileSearchPage />} />
        <Route path="/movieInfo/:id" element={<MovieInfoPage />} />
        <Route path="/castInfo/:id" element={<CastInfo />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
