

import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About"
import Navbar from "./Components/Layout/Navbar";
import Contact  from "./Components/Pages/Contact";
import {  Router,Route, Routes } from "react-router-dom";


function App(){

  return(
    <div>

     
     <Navbar/>
      <Routes>
      
        console.console.log(hiii);
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
      
   
     
     
    </div>
  );
}


export default App;