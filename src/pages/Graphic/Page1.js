import React from 'react'
import { FullPage, Title, Arrow, Container, Icon, SubTitle } from '../../components/styles'
import './Graphic.scss'
import {adobe} from '../../imgs';

const Page1 = () => {
  return (
    <FullPage id='ux'>
        <Title center> 
            Graphic Design
        </Title>

        <Icon className='adobe-container' amount={adobe.length}>
            {adobe.map(( item, index ) => {
                return(
                <img className={item.name} key={index} src= {item.src} alt={item.name}/>
                )
            })}  
        </Icon>

        <SubTitle center long className='subtitle-margin' style={{marginTop: '3%'}}> 
            Contrast - Bold - Details - Gestalt  
        </SubTitle>

        <Arrow className='arrow'> <i class="fa-solid fa-circle-arrow-down"></i> </Arrow>

    </FullPage>
  )
}

export default Page1