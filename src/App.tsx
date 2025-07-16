import React from "react";
import "./App.css";
import { RegisterPage } from "./components/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./components/LoginPage";
import { ProductsPage } from "./components/ProductsPage";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Products" element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
