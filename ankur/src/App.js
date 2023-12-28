import './App.css';
import { Routes, Route } from "react-router-dom";
import Error from "./Components/Error";
import Home from "./Components/Home";
import FirForm from "./Components/FirForm";
import React from "react";


function App() {
  return (
    <div className= "flex flex-col ">
      <Routes >
      <Route path='/' element = { <Home/>} ></Route>
        <Route path='/firForm' element = { <FirForm/>} ></Route>
        <Route path='/finalFir' element = { <finalFir/>} ></Route>
        <Route path='*' element = { <Error/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
