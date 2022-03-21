import React from 'react'

import { FullPage, FullHeightImg } from '../../components/styles'
import {graphic_imgs} from '../../imgs/'

import CustomCarousel from '../../components/Carousel/index'

const Page2 = () => {

  return (
    <FullPage dark display={'grid'}>
      <CustomCarousel imgs={graphic_imgs}/>
    </FullPage>
  )
}

export default Page2
