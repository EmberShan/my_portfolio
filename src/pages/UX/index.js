import React from 'react'
import './UX.scss'
import { FullPage, Title, Arrow } from '../../components/styles'
import {Button} from '../../components/Button/Button';


const UX = () => {
  return (
    <FullPage dark id="ux">
        <Title> UX Researcher </Title>
        <Title center long style={{marginBottom: '3%'}}> 
            Empathy -
            Communicate -
            Analyze 
        </Title>

        <Button text="Learn More" 
          pos={'relative'}
          route={'/project2'}
        > </Button>


    </FullPage>
  )
}

export default UX
