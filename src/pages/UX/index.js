import React from 'react'
import { FullPage, Title, Arrow } from '../../components/styles'
import './UX.scss'

const UX = () => {
  return (
    <FullPage dark id='ux'>
        <Title> UX Researcher </Title>
        <Title center long> 
            Always <br></br>
            Deign <br></br>
            for Users <br></br>
        </Title>

        <Arrow className='arrow'> <i class="fa-solid fa-circle-arrow-down"></i> </Arrow>

    </FullPage>
  )
}

export default UX
