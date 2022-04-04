import {Top, Context, Summary, Content, VideoWrapper, Video, Footer} from './styles';
import './detail.scss'

import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

export default function MDP() {
  const navigate = useNavigate();

  return (

    <div id='mdp'>

        <Top className='mdp'>
            <div className='btnWrapper' style={{
                top: '10%', 
            }}>

                <button className="backBtn" onClick={() => navigate(-1)} > 
                    <i class="fa-solid fa-angle-left"></i>
                    <div className='mobile-hide'>Back</div>
                </button>  

            </div>

            <h1> Navigation App for MotorCity Casino Hotel </h1> 
            <h2>  </h2>  
        </Top>


        <Context>
            <span>

                <span>
                    <h2 style={{
                        color: '#F1FAFF', 
                    }}> role </h2>
                    <p> UI Designer, Frontend Developer </p>
                </span>

                <span>
                    <h2 style={{
                        color: '#F1FAFF', }}> time </h2>
                    <p> 2022 Jan - now </p>
                </span>

            </span>
        </Context>


        <Summary dark>
          <div className='text'>
            <h2> Context Overview </h2>
            <p>  
                MotorCity Casino Hotel needs a navigation app for its 2-floor casino. 
                Users need to be able to locate important points of interest (bathroom for example), 
                and are able to find available slot machines with the games that they search for. 
            </p>
          </div>

          <div className='text'>
            <h2> Skills Utilized </h2>
            <p>  
                <ul>
                    <li> Figma </li>
                    <li> React </li>
                    <li> Android Studio </li>
                </ul> 
            </p> 
          </div>

          <div className='text'>
            <h2> Key Takeaways </h2>
            <p> 
                <ul>
                    <li> Understood that different user groups have different needs 
                        and how to make a trade-off between their different needs. </li>
                    <li> User Interface should never compete with the content </li>
                    <li> Importance of limiting functionalities/information on one screen to as little as possible </li>
                </ul>
                
            </p>
          </div>

      </Summary>


    


        <Footer>
            <Link to="mdp">
                <i class="fa-solid fa-angle-up"></i>
            </Link>
        </Footer>

    </div>
  )
}