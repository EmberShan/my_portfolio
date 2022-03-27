import React, { useState, useEffect, useContext } from 'react'
import Nav from '../components/Nav/Nav'
import Page from '../pages/AllPages/Page.js'
import Loading from '../pages/Loading';
// for custom cursor 
import DotRing from '../components/CustomCursor/DotRing/DotRing'

import './App.scss';


function App(){
  // const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const [isLoading, setIsLoading] = useState(false); 
  const [scrollDir, setScrollDir] = useState(true);
  // scrolling down = false, scrolling up = true

  return (
    <div className="App">
      {isLoading ? (<Loading />) : 
      (
        <div id="App">
            <DotRing/>        
            <Nav visible={true}/>
            
            <Page />

        </div>
      )}
    </div>
  );
}

export default App;
