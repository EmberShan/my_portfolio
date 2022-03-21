import React from 'react'
import '../FrontEnd.scss'
import {FullPage, VideoContainer, VideoBg, Container} from '../../../components/styles'
import Video from '../../../imgs/videos/Impressionism.mp4'
// import { motion } from "framer-motion";

const Page2 = () => {
  return (
    <FullPage className='page2'>
      <VideoContainer>
        <VideoBg 
          autoPlay={true} 
          loop={true}
          controls={false} 
          playsInline
          muted 
          src={Video}
          type="video/mp4" 
        />
        <span className='link'>
          <a href="https://embershan.github.io/339final-portfolio/impressionism.html" target={'blank'}> Link to Website </a>
        </span>
      </VideoContainer>
    </FullPage>
  )
}

export default Page2
