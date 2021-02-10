import React from 'react'
import logo from '../assets/IMG-1909.jpg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.div`
 background-color: black;
 color: white;
 display: flex;
 align-items: center;
 font-family: 'Marck Script', cursive;
 font-weight: 400;
 width: 100%;
 height: 25vh;

 .left-section{
     display: flex;
     height: 100%;
     justify-content: center;
     align-items: flex-end;
     width: 45%;
     margin: 2%;
     margin-bottom: 5%;

 }

 img{
     border-radius: 50%;
     max-width:40%;
     height: 60%;
     margin-bottom: 3%;
 }

 h1{
     font-size: 3.5rem;
     margin-left: 10%;
 }

 .right-section{
     display: flex;
     justify-content: space-evenly;
     align-items: flex-end;
     margin: 2%;
     width: 45%;
     height: 100%;
     margin-bottom: 5%;
 }

 .link{
     color: white;
     text-decoration: none;
     justify-content: space-between;
     font-size: 2rem;
     margin-left: 15%;
     transition: .3s;

     :hover{
         color: grey;
         animation: ease-in-out .3s;
     }
 }


 @media(max-width:500px){

    height: 15vh;

    h1{
        font-size: 1.3rem;
    }

    .link{
        font-size: 1rem;
    }
}
`


const Header = () => {
    return (
        <StyledHeader>
            <div className={'left-section'}>
            <img src={logo} height={50} />
            <h1>The Gallery Of Sam Lalli</h1>
            </div>
            <div className={'right-section'}>
                <Link className={'link'} to={'/'}>Gallery</Link>
                <Link className={'link'} to={'/about'}>About</Link>
            </div>
            
        </StyledHeader>
    )
}

export default Header
