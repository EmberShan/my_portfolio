import React from 'react'
import Marquee from "react-fast-marquee";
// importing scss variables 
import colors from '../Constant.scss'

const CustomMarquee = () => {
    const marqueeStyle = { 
        textTransform: 'uppercase', 
        backgroundColor: '#FDF0D5', 
        color: '#001926', 
        height: 'clamp(2rem, 8%, 15%)', 
        //push marquee to the very bottom 
        position: 'absolute',
        bottom: '0',  
        letterSpacing: '.3rem', 
    }

    return (
        <Marquee 
        style={marqueeStyle} 
        gradient={false}
        pauseOnHover={true}
        speed={60}
        >
            reusable react components --- accessibility --- responsive design --- mobile first ---  
        </Marquee>
    
    )
}

export default CustomMarquee
