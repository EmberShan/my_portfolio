import React, { useState, useEffect, useContext } from 'react'
import Loading from '../pages/Loading';
// for custom cursor 
import DotRing from '../components/CustomCursor/DotRing/DotRing'

import './App.scss';

import Page from '../pages/AllPages/Page.js';
import Project2 from '../Detail/project2';
import Impressionism from '../Detail/impressionism';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import ScrollToTop from "./ScrollToTop";


function App(){
  const [isLoading, setIsLoading] = useState(false); 

  return (
    <div className="App">
      <DotRing/> 
      {isLoading ? (<Loading />) : 
      (
        <BrowserRouter>
        <ScrollToTop>
        <Routes>
            <Route path="/" element={<Page />} />
              <Route path="project2" element={<Project2 />} />
              <Route path="impressionism" element={<Impressionism />} />
          </Routes>
        </ScrollToTop>
          
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
