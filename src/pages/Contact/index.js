import React from 'react'
import {FullPage, Title, Arrow, Email} from '../../components/styles'
import './Contact.scss'


const Contact = () => {
  return (
    <FullPage column id="contact">
      <Title> Contact Me </Title>

      <Email className='email'>
        <i class="fa-solid fa-envelope"></i>
        <a href="mailto: embershan3@gmail.com"> embershan3@gmail.com </a>
      </Email>

      <Arrow rotate className='arrow'> 
        <i class="fa-solid fa-circle-arrow-down"></i> 
      </Arrow>
    </FullPage>
  )
}

export default Contact
