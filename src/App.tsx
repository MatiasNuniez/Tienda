import React from "react";
import "./App.css";
import { RegisterPage } from "./components/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./components/LoginPage";
import { ProductsPage } from "./components/ProductsPage";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="w-full">
      <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
        <header>
          <Navbar />
        </header>
        <main>
          <BrowserRouter>
            <Routes>
              <Route path="/Register" element={<RegisterPage />} />
              <Route path="/Login" element={<LoginPage />} />
              <Route path="/Products" element={<ProductsPage />} />
            </Routes>
          </BrowserRouter>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
