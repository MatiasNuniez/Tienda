import React from "react";
import "./App.css";
import { RegisterPage } from "./components/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./components/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/Login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
