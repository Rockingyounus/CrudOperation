import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Create from './Components/Create';
import './App.css';
import Read from './Components/Read';
import Update from './Components/Update';


function App() {
  return (
    <div className="Container">
    
    <Routes>
    <Route  path="/" element={<Create/>}></Route>
    <Route  path="/read" element={<Read/>}></Route>
    <Route  path="/update" element={<Update/>}></Route>
    </Routes>
    
    </div>
  );
}

export default App;
