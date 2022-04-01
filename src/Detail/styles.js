// list of componenets for constructing the detail page 
import styled from 'styled-components';
import c from '../components/Constant.scss';


export const Top = styled.div`
    background-size: cover; 
    height: 100vh;
    width: 100vw;
    text-align: center; 

    h1{
        padding-top: 3%; 
        color: #F1FAFF; 
    }
    h2{
        color: #F1FAFF; 
        font-size: 1.3rem; 
    }

    @media screen and (max-width: 768px) {
        background-position: center; 
    }
`

export const Context = styled.div`
    background-color: #003049; 
    color: #FDF0D5;
    font-family: 'Roboto', sans-serif;
    display: flex; 
    text-align: center; 
    flex-direction: column; 
    padding: 3% 0; 
    
    h1{
        padding-top: 5%; 
        font-family: 'Squada One', sans-serif;   
    }

    span{
        margin-top: 3%;
        display: flex; 
        flex-direction: row; 
        justify-content: space-around; 
        padding: 0 10%; 

        span{
            display: flex; 
            flex-direction: column; 
            justify-content: flex-start; 
            h2{
                color: #FFA00F; 
                font-weight: 300; 
                font-family: 'Squada One', sans-serif;
            }
            a{
                font-family: 'Squada One', sans-serif;   
                font-size: 2rem; 
                color: #F1FAFF;
                transition: color .4s ease; 

                &:hover{
                    color: red; 
                }
            }
            p{

            }
        }
    }
    

`

export const Summary = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex; 
    flex-direction: column; 
    padding: 5% 15%; 
    
    .text{
        line-height: 2; 

        h2{
            font-weight: 700; 
            color: ${ ({dark}) => (dark ? '#003049' : '#FFA00F' ) };
            font-size: 1.3rem;
            margin-top: 1rem; 
        }
    }

    img{
        width: 100%; 
        height: auto; 
    }

    
`


export const Content = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex; 
    flex-direction: column; 
    padding: 0 5%; 
    
    div{
        line-height: 2; 
        padding: 3% 7%; 

        h2{
            font-size: 2rem;
            font-family: 'Squada One', sans-serif;   
        }
        h3{
            font-weight: 700; 
            font-size: 1.2rem;
            margin-top: 2rem;
        }
    }

    img{
        width: 100%; 
        height: auto; 
        margin-bottom: 3%;
    }

    
`


export const Footer = styled.div`
    background-color: #003049; 
    margin-top: 2%;
    padding: 20px;  
    text-align: center; 

    a{
        display: flex; 
        flex-direction: column; 
        justify-content: center; 
        align-items: center; 
        color: #FDF0D5; 
        text-decoration: none; 

        i{
            color: #FDF0D5; 
            font-size: 3rem; 
        }

        &:hover, &:active{
            color: red; 
            i{
                color: red; 
            }
        }
    }
    
`


export const VideoWrapper = styled.div`
    overflow: hidden;
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;

    padding: 0; 
    margin: 0; 
    display: flex; 
    align-items: center; 
    gap: 20px; 
`


export const Video = styled.video`
    max-height: 80vh;
    width: auto; 
    max-width: 100vw; 
    
    -o-object-fit: ${(props) => (props.objectFit) ? (props.objectFit) : 'cover'}; 
    object-fit: ${(props) => (props.objectFit) ? (props.objectFit) : 'cover'};
    background: ${(props) => (props.bgColor) ? (props.bgColor) : 'white'};
    object-position: ${(props) => (props.pos) ? (props.pos) : 'center'};

    @media screen and (max-width: 576px) {
        display: ${ ({mobile_hide}) => (mobile_hide ? 'none' : 'block')};
        object-position: center; 
    }
`