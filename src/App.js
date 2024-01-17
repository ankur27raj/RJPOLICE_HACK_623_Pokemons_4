import './App.css';
import { Routes, Route } from "react-router-dom";
import Error from "./Components/Error";
import Home from "./Components/Home";
import FirForm from "./Components/FirForm";
import {React} from "react";
import Navbar from "./Components/Navbar"
import DisplayFirForm from './Components/DisplayFirForm';
import Contact from './Components/Contact';


function App() {
  return (
    <div className= "flex flex-col ">
        <Navbar />
      <Routes >
      <Route path='/' element = { <Home/>} ></Route>
      <Route path='/firForm' element = { <FirForm/>} ></Route>
      <Route path='/DisplayFirForm' element = { <DisplayFirForm/>} ></Route>
      <Route path='/ContactForm' element = { <Contact/>} ></Route>
      <Route path='*' element = { <Error/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
