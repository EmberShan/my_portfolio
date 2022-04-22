import {Top, Context, Summary, Content, ImgWrapper, Footer, GoToTop} from './styles';
import './detail.scss'

import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

export default function Rutabagga() {
  const navigate = useNavigate();

  return (

    <div id='rutabagga'>
        <GoToTop>
          <Link to="rutabagga">
              <i class="fa-solid fa-circle-arrow-up"></i> 
          </Link>
        </GoToTop>

        <Top className='rutabagga'>
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

            <div> 
                <h2> Identity Guide: Logo and Colors </h2>
                <h3> Logo </h3>
                <p>
                The logo emphasizes the theme of environmentally friendly 
                (reduce packaging waste) and delivering fresh vegerables with care. 
                The contrast between the red color and the green background makes the logo very obvious. 
                The white bold text for “Rutabagga” is also very recognizable.
                </p>
            </div>

            <img className='small-img'
                src={require('./imgs/rutabagga/4.jpg')} alt="">
            </img>

            <img className='small-img'
                src={require('./imgs/rutabagga/6.jpg')} alt="">
            </img>

            <div> 
                <h2> Layout Grid </h2>
                <p>
                    Grid is utilized on all screens to make sure the layout is 
                    consistent. Below are only two examples of the layout grids 
                    used. As shown in the images, the left and right margins are 
                    the same throughout different screens. Titles and the top of 
                    the cards are also aligned.
                </p>
            </div>

            <img className='small-img'
                src={require('./imgs/rutabagga/5.jpg')} alt=""/>


            <div> 
                <h2> Low-fi Wireframes </h2>
                <p>
                    The whole layout utilizes cards and shapes that are conventional 
                    to other apps in the industry to help people better understand the 
                    app without extra instructions. One screen will only display a limited 
                    amount of information (or cards in this case) to avoid overwhelming the users.
                </p>
            </div>


            <img src={require('./imgs/rutabagga/2.jpg')} alt=""/>

            <div> 
                <h2> Lesson Learned: UI should never compete with the content </h2>
                <p>
                    First draft having heavy colors and distract users from the content. 
                </p>
            </div>

            <h3> Before </h3>
            <img src={require('./imgs/rutabagga/old.jpg')} alt=""/>

            <h3> After </h3>
            <p>  
                <ul>
                    <li> Less colors resulting in a cleaner look </li>
                    <li> Sticking to the identity color scheme </li>
                </ul>
            </p>
            <img src={require('./imgs/rutabagga/1.jpg')} alt=""/>
            


            
            

            <img className='small-img'
                src={require('./imgs/rutabagga/3.jpg')} alt="">
            </img>

            

        </Content>


        <Footer></Footer>

    </div>

    )
}