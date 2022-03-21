import React, { useState } from "react";
// stylesheet
import './Nav.scss'
// import components
import { MenuItems } from "./MenuItems";
import useWindowDimensions from './windowDimension'


const Nav = (props) => {
    const [clicked, setClicked] = useState(false);
    const { width } = useWindowDimensions();

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

            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {/* looping through the menu items */}
                {MenuItems.map(( item, index ) => {
                    return(
                        <li key={index} className="title"> 
                            <a onClick={togglerClicked} className={item.className} href={item.url}>{item.title}</a> 
                        </li>
                    )
                })}  
            </ul>

        </nav>
    )
}

export default Nav