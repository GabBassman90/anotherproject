import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyNavbar } from "./components/MyNavbar/MyNavbar";
import { Welcome } from "./components/Welcome/Welcome";
import { Home } from "./components/Home/Home";
import { ProductDetail } from "./components/ProductDetail/ProductDetail";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <MyNavbar />
        <div className="mt-5">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/products" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
