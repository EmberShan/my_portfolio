import {Top, Context, Summary, Content, ImgWrapper, Footer} from './styles';
import './detail.scss'

import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

export default function Rutabagga() {
  const navigate = useNavigate();

  return (

    <div id='rutabagga'>


        <Top className='rutabagga'>
            <div className='btnWrapper' style={{
                top: '10%', 
            }}>

                <button className="backBtn" onClick={() => navigate(-1)}> 
                    <i class="fa-solid fa-angle-left"></i>
                    <div className='mobile-hide'>Back</div>
                </button>  

            </div>

        </Top>


        <Context>
            <span>

                <span>
                    <h2 style={{
                        color: '#F1FAFF', 
                    }}> role </h2>
                    <p> UI Designer, Logo Designer </p>
                </span>

                <span>
                    <h2 style={{
                        color: '#F1FAFF', }}> Course </h2>
                    <p> Graphic Design </p>
                </span>

            </span>
        </Context>


        <Summary dark>
            <div className='text'>
            <h2> Context Overview </h2>
            <p>  
                A diet delivery company focuses on the idea of delivering fresh root vegetables 
                and reducing package waste. Students need to design a set of different screens for 
                the company's food ordering app. 
            </p>
            </div>

            <div className='text'>
            <h2> Skills Utilized </h2>
            <p>  
                <ul>
                    <li> Figma </li>
                    <li> Illustrator (logo design) </li>
                    <li> Color Theory </li>
                </ul> 
            </p> 
            </div>

            <div className='text'>
            <h2> Key Takeaways </h2>
            <p> 
                <ul>
                    <li> Utilizing grids to design clean and organized layouts </li>
                    <li> Built company identity through colors and logos </li>
                    <li> Atomic design (reusable UI elements and consistent headings and text) </li>
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

            <img style={{
                width: '75%', 
            }}
            src={require('./imgs/rutabagga/1.jpg')} alt="Color styling guide"/>


            <div> 
                <h2> Grid Layout </h2>
                <p>
                    The whole layout utilizes cards and shapes that are conventional 
                    to other apps in the industry to help people better understand the 
                    app without extra instructions. One screen will only display a limited 
                    amount of information (or cards in this case) to avoid overwhelming the users.
                </p>
            </div>


            <img src={require('./imgs/rutabagga/2.jpg')} alt=""/>
            <img src={require('./imgs/rutabagga/5.jpg')} alt=""/>


            <img src={require('./imgs/rutabagga/3.jpg')} alt=""/>
            <img src={require('./imgs/rutabagga/4.jpg')} alt=""/>


        </Content>


        <Footer>
            <Link to="rutabagga">
                <i class="fa-solid fa-angle-up"></i>
            </Link>
        </Footer>

    </div>

    )
}