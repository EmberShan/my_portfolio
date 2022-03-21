import React from 'react';
import '../FrontEnd.scss';
import {webSkills} from '../../../imgs';
import {FullPage, Arrow, Container, Icon, Title} from '../../../components/styles'

const Page1 = () => {
  return (
    <FullPage dark className='page1'>

      <Title long center blue className='title'> Web Developer <br/> From Design to Final Product </Title>

      {/* print out the softwares */}
      <Icon className='webskill-container' amount={webSkills.length}>
        {webSkills.map(( item, index ) => {
            return(
              <img className={item.name} key={index} src= {item.src}/>
            )
        })}  
      </Icon>
      
      <div>
        <Arrow className='arrow'> <i class="fa-solid fa-circle-arrow-down"></i> </Arrow>
      </div>

    </FullPage>
  )
}

export default Page1
