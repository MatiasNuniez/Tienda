import React from 'react'
import './App.css'
import { RegisterPage } from './components/RegisterPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/Register' element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
