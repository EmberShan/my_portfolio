import React from 'react'
import {ui} from '../../imgs/'
import { FullPage, FullHeightImg, Title, FullBgImg } from '../../components/styles'


const Page2 = () => {
  return (
    <FullPage>
      <Title long style={{
          position: 'absolute', 
          bottom: '20%', 
          left: '20px', 
          color: '#003049', 
          }}> 
        Navigation App for <br></br> MotorCity Casino Hotel 
      </Title>
      <FullBgImg src={ui[0].src}> </FullBgImg>
    </FullPage>
  )
}

export default Page2
