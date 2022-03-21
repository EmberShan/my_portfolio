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

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

      const updateScrollDir = () => {
          const scrollY = window.pageYOffset;

          if (Math.abs(scrollY - lastScrollY) < threshold) {
          ticking = false;
          return;
          }
          setScrollDir(scrollY > lastScrollY ? false : true);
          lastScrollY = scrollY > 0 ? scrollY : 0;
          ticking = false;
      };

      const onScroll = () => {
          if (!ticking) {
          window.requestAnimationFrame(updateScrollDir);
          ticking = true;
          }
      };

      window.addEventListener("scroll", onScroll);
      console.log(scrollDir);

      return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);


  return (
    <div className="App">
      {isLoading ? (<Loading />) : 
      (
        <div id="App">
            <DotRing/>        
            <Nav visible={scrollDir}/>
            
            <Page />

        </div>
      )}
    </div>
  );
}

export default App;
