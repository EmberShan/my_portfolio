import React from 'react'
import './Home.scss'
import {Title, FullPage, SubTitle, Arrow, Email, Container} from '../../components/styles'


const Home = () => {
  return (
    <FullPage id='home' padding={'10%'}>
      <Container className='container'>

        <span className='school'> 
          <i class="fa-solid fa-location-pin"></i>
          University of Michigan - Ann Arbor
        </span>

        <div className='alignStart'>
          <Title className='title'> Ember Shan </Title>
          <SubTitle className='subtitle'> 
            -Frontend Developer - UX Researcher <br></br>
            -Graphic Designer - Programmer
          </SubTitle>

          <Email className='email'>
            <i class="fa-solid fa-envelope"></i>
            <a href="mailto: embershan3@gmail.com"> embershan3@gmail.com </a>
          </Email>
        </div>
        
      </Container>

      <div className='arrow-container'>
        <Arrow className='arrow' href='#ui'> <i class="fa-solid fa-circle-arrow-down"></i> </Arrow>
      </div>
      
    </FullPage>
  )
}

export default Home
