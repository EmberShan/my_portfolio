import React from 'react'
import './CustomCursor.scss'
// import { motion } from "framer-motion";
import useWindowDimensions from '../Nav/windowDimension'

export const CustomCursor = () => {
  const cursorRef = React.useRef(null);
  const { width } = useWindowDimensions();

  React.useEffect(() => {
    if(cursorRef.current && cursorRef.current.scrollWidth && cursorRef.current.clientWidth){
      document.addEventListener('mousemove', (event) => {
        const {clientX, clientY} = event;
        const mouseX = clientX - cursorRef.current.clientWidth / 2;
        const mouseY = clientY - cursorRef.current.clientHeight / 2;
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      });
    }
    
  }, []);

  return (
        <div className='cursor' ref = {cursorRef}
            style={ width > 1140 ? {display: 'block'} : {display: 'none'}}
        > 
          <span className='dot' ></span> 
        </div>
  );
}
