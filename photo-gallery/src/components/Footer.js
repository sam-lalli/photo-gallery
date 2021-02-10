import React from 'react'
import styled from "styled-components"

const StyledFooter = styled.div`
 background-color: black;
 color: white;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 height: 20vh;

 h2{
     margin: 1%;
 }

`

const Footer = () => {
    return (
        <StyledFooter>
            <h2>Create By Sam Lalli</h2>
            <h2>CopyRight © 2021</h2>
            <h2>All Rights Reserved</h2>
        </StyledFooter>
    )
}

export default Footer
