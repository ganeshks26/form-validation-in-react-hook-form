import React from 'react'
import Signup from './components/Signup'
import {Routes,Route} from "react-router-dom";
import Login from './components/Login';
import "./App.css"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App

