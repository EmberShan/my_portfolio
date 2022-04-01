import React from 'react'
import {ui} from '../../imgs'
import { FullPage, Title, FullBgImg } from '../../components/styles'
import {Button} from '../../components/Button/Button';


const Page2 = () => {

  return (
    <FullPage dark id='ui1'>

      <div style={{
        position: 'absolute', 
        bottom: '20%', 
        left: '5%', 
        }}>
        <Title long style={{
            color: '#003049', 
            marginBottom: '20px', 
            }}> 
          Navigation App for <br></br> MotorCity Casino Hotel 
        </Title>

        {/* <Button text="Learn More" 
          pos={'relative'}
          route={'/project2'}
        > </Button> */}
      </div>


      

      <FullBgImg src={ui[0].src}> </FullBgImg>
    </FullPage>
  )
}

export default Page2
