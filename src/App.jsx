import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Liked from "./pages/Liked";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liked" element={<Liked />} />
      </Routes>
    </BrowserRouter>
  );
}