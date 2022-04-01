import React from 'react'
import { HashLink } from 'react-router-hash-link';
import {Top, Context, Summary, Content, VideoWrapper, Video, Footer} from './styles';
import v from './imgs/impressionism/2.mov';

const Impressionism = () => {
  return (
    <div>

        <Top className='impressionism'>
            <div className='btnWrapper' style={{
                top: '10%', 
            }}>
                <HashLink smooth to="/#impressionism">
                    <button className="backBtn"  > 
                        <i class="fa-solid fa-angle-left"></i>
                        <div className='mobile-hide'>Back</div>
                    </button>  
                </HashLink> 
            </div>

            <h1> Responsive Website</h1> 
            <h2> From Design to Finish </h2>  
        </Top>


        <Context>
            <span>

                <span>
                    <a href='https://embershan.github.io/339final-portfolio/impressionism.html'
                        target={'_blank'}
                    > 
                        Website Link Here 
                    </a>
                </span>


                <span>
                    <h2 style={{
                        color: '#F1FAFF', 
                    }}> role </h2>
                    <p> UI Designer, Frontend Developer </p>
                </span>

                <span>
                    <h2 style={{
                        color: '#F1FAFF', }}> time </h2>
                    <p> 2021 Sep - Dec </p>
                </span>

            </span>
        </Context>


        <Summary dark>
          <div className='text'>
            <h2> Course Project Overview </h2>
            <p> Create a 5-page response website having different designs on mobile, tablet, and desktop </p>
          </div>

          <div className='text'>
            <h2> Skills Utilized </h2>
            <p>  
                <ul>
                    <li> Figma </li>
                    <li> Adobe color </li>
                    <li> HTML + CSS + Javascript </li>
                    <li> Accessibility tools (Wave, Axe, and W3C) </li>
                    <li> Bootstrap 5 </li>
                </ul> 
            </p> 
          </div>

          <div className='text'>
            <h2> Key Takeaways </h2>
            <p> 
                <ul>
                    <li> Understood the limitations and advantages of different screen sizes  </li>
                    <li> Adjust different UI elements for different screens 
                         <br></br> (ex change buttons on desktop to drop-down list on mobile) </li>
                    <li> Understood the importance of not relying 
                        only on colors considering colorblind people </li> 
                </ul>
                
            </p>
          </div>

      </Summary>

      <Content>

        <div>
            <h2> 1. Figma Design </h2>
            <p> 
                The goal of the website is to trigger interest in 
                people who don't know impressionist paintings. 
                With this goal in mind, I started to draw few drafts on both paper and in Figma. 
                Learned from my art courses, I constantly checked the white space in my design. 
                <br></br>
                <br></br>
                Paintings, if not placed carefully, tend to make the website seem messy. I tried 
                to balance the complexity of paintings with white space, simple and dark color scheme, 
                and highly organized layout using grid and flex. 
            </p>
          </div>

          <img src={require('./imgs/impressionism/1.png')} alt="Miro affinity diagram"/>
        
        <div> 
        <h2> 2. Mobile First </h2>
            <p> 
                Nowadays, many people would read website mostly on mobile devices. So, I always 
                design my websites on mobile first. Fitting content on mobile is another challenge. 
                I tried to keep the information as minimum as possible to avoid overwhelming the audience. 
                <br></br>
                <br></br>
                In my opinion, the mobile version of websites is simply a call to action, meaning that it 
                only needs to deliver the most important information (usually this is asking people to 
                choose a product or subscribe to the newsletter). 
                <br></br>
                <br></br>
                <VideoWrapper>
                    Considering many people would probably only skim through the titles/first lines of the passages. 
                    I hide most of the test unless clicking "read more". This makes the website seem more manageable
                    and effortless to read. 
                    
                    <Video 
                        autoPlay={true} 
                        loop={true}
                        controls={false} 
                        playsInline
                        muted 
                        src={v}
                        type="video/mov" 

                        className='video'
                    />
                </VideoWrapper>

                Another challenge caused by the small screen size is that the buttons and 
                links are more difficult to click. Because of this, I hide arrows and change buttons 
                to drop-down menu on mobile and tablet. 

            </p>
        </div>
          
        
        

      </Content>


      <Footer>
        <a href='#'>
          <i class="fa-solid fa-angle-up"></i>
          Back to Top
        </a>
        
      </Footer>


    </div>
  )
}

export default Impressionism
