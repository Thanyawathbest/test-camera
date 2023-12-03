import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './component/Navbar';
import Home from './component/Page/Home';
import Location from './component/Page/Location';
import Upload from './component/Page/Upload';
import Contact from './component/Page/Contact';


function Homepage() {
  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/location" element={<Location/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default Homepage;