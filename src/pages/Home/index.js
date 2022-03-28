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

        
        <a className='github mobile_hide' href="https://github.com/EmberShan/my_portfolio" target={'_blank'}>
          <i class="fab fa-github"></i>
          <span> Check the code for this React portfolio website </span>
        </a>
        
      </Container>

      <div className='arrow-container'>
        <Arrow className='arrow'> <i class="fa-solid fa-circle-arrow-down"></i> </Arrow>
      </div>
      
    </FullPage>
  )
}

export default Home
