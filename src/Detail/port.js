import {Top, Context, Summary, Content, ImgWrapper, Footer, GoToTop, VideoWrapper, Video} from './styles';
import './detail.scss'

import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import video from './imgs/portfolio/mobile.mov';


export default function Portfolio() {
  const navigate = useNavigate();

  return (

    <div id='portfolio'>

        <GoToTop>
          <Link to="portfolio">
              <i class="fa-solid fa-circle-arrow-up"></i> 
          </Link>
        </GoToTop>

        <Top className='portfolio'>
            <div className='btnWrapper' style={{
                top: '10%', 
            }}>

                <button className="backBtn" onClick={() => {
                    if (window.history.state && window.history.state.idx > 0) {
                        navigate(-1);
                    } else {
                        navigate('/', { replace: true }); // the current entry in the history stack will be replaced with the new one with { replace: true }
                    }
                }} > 
                    <i class="fa-solid fa-angle-left"></i>
                    <div className='mobile-hide'>Back</div>
                </button>  

            </div>
            
            <h1> Process about this React Website </h1> 
            <h2> Self Challenge: Learning React from scratch </h2>  
        </Top>

        <Summary dark>

            <div className='text'>
            <h2> Skills Utilized </h2>
            <p>  
                <ul>
                    <li> ReactJS </li>
                    <li> React Router </li>
                    <li> SASS </li>
                    <li> Styled component </li>
                    <li> React Context: Custom cursor </li>
                    <li> React Hooks </li>
                    <li> ... </li>
                </ul> 
            </p> 
            </div>

            <div className='text'>
            <h2> Key Takeaways </h2>
            <p> 
                <ul>
                    <li> Problem solving: Stackoverflow, Youtube, Medium, ... </li>
                    <li> Time management: work through the project step by step </li> 
                    <li> Responsive Design: always checking the mobile </li>
                </ul>
                
            </p>
            </div>

        </Summary>


        <Content style={{
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
        }}>
            
            <div> 
                <h1> First Step: Wireframes </h1>
            </div>
            <img src={require('./imgs/portfolio/figma.png')}/>


            <ImgWrapper>

                <img src={require('./imgs/portfolio/1.png')} alt=""/>
                <span> 
                    <h2> Time is key: Reusability </h2> 
                </span>
            
            </ImgWrapper>

            <div style={{
                paddingTop: '50px', 
            }}> 
                <h1> Good responsive designs </h1>
            </div>
                <img src={require('./imgs/portfolio/desktop.png')}/>
           
            <div>
                <VideoWrapper>
                    
                    One column simple design on mobile. 
                    
                    <Video mobile_hide
                        autoPlay={true} 
                        loop={true}
                        controls={false} 
                        playsInline
                        muted 
                        src={video}
                        type="video/mov" 

                        className='video'
                    />
                </VideoWrapper>

            </div>

        </Content>



        <Footer></Footer>

    </div>
  )
}