import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-post" element={<CreatePost />} />
      <Route path="/summarize" element={<Summarize />} />
    </Routes>
  );
}

export default App;
