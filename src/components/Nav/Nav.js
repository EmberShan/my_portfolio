import React, { useState, useContext } from "react";
// stylesheet
import './Nav.scss'
// import components
import { MenuItems } from "./MenuItems";
import useWindowDimensions from './windowDimension'
import { MouseContext } from '../context/mouse-context'

import { HashLink as Link } from 'react-router-hash-link';

const Nav = (props) => {
    const [clicked, setClicked] = useState(false);
    const { width } = useWindowDimensions();
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);


    const togglerClicked = () => {
        setClicked((state) => (state === true ? false : true));
        console.log(clicked);
    }

    return (
        // disappear on scroll only when on desktop
        
        <nav className="NavBar" 
            style={ width > 1140 ? 
                (props.visible ? {top: '0'} : {top: '-100%'}) 
            : {top: '0'} }
        >

            {/* icon for hamburger */}
            <div className="nav-toggler">
                <div className="nav-toggler-icon" onClick={togglerClicked}>
                    <span 
                        className={clicked ? "nav-toggler-bar nav-toggler-top clicked" : "nav-toggler-bar nav-toggler-top"}> 
                    </span>
                    <span 
                        className={clicked ? "nav-toggler-bar nav-toggler-bottom clicked" : "nav-toggler-bar nav-toggler-bottom"}> 
                    </span>
                </div>
            </div>

            <div className={clicked ? "nav-menu active" : "nav-menu"}>
                {/* looping through the menu items */}
                {MenuItems.map(( item, index ) => {
                    return(
                        // <li key={index} className="title"
                        //     onMouseEnter={() => cursorChangeHandler("hovered")}
                        //     onMouseLeave={() => cursorChangeHandler("")}
                        // > 
                            <Link 
                                key={index}
                                to={`/${item.url}`} 
                                className={'nav_links '+ item.className}
                                onClick={togglerClicked}
                                onMouseEnter={() => cursorChangeHandler("hovered")}
                                onMouseLeave={() => cursorChangeHandler("")}
                            > 
                                {item.title}
                            </Link>
                            
                        // </li>
                    )
                })}  
            </div>

        </nav>
    )
}

export default Nav