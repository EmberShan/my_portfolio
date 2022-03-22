import React from 'react';
import './Carousel.scss'

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function CustomCarousel(props)
{
    const imgStyle = {
        minHeight: '100vh', 
        height: '100vh', 
        width: (props.width ? (props.width) : ('100vw')),
        objectFit: 'cover', 
        objectPosition: (props.pos ? (props.pos) : ('center')), 
    };

    return (
        <Carousel 
            id='carousel'
            interval={null}
        >
            {props.imgs.map((img, index) => (
                <Carousel.Item>
                    <img src={img.src} style={imgStyle} key={index} alt={img.name}></img> 
                </Carousel.Item>
            ))}
        </Carousel>
        
    )

}

export default CustomCarousel