import React from 'react'
import { FullPage, SubTitle, Title, Arrow } from '../../components/styles'

const Page1 = () => {
  return (
    <FullPage id="programming">
      <Title> Programmer </Title>
      <SubTitle mobileCenter>
        Algorithms {'&'} Android Software - Java <br></br>
        SQL, API, Web Scrap - Python <br></br>
        Computer Graphics - C++ <br></br>
      </SubTitle>
      
      <div>
        <Arrow className='arrow'> <i class="fa-solid fa-circle-arrow-down"></i> </Arrow>
      </div>

    </FullPage>
  )
}

export default Page1
