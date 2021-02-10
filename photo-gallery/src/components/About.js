import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`

 
 h1{
     font-size: 5rem;
     font-weight: bold;
     margin: 7%;
     text-align: center;
 }

 h3{
     font-size: 3.5rem;
     text-align: center;
     margin: 5%;
 }
 p{
     font-size: 2rem;
     margin-left: 5%;
     margin-right: 5%;
     margin-bottom: 5%;
 }
`

const About = () => {
    return (
        <StyledDiv>
            <h1>What Is The Meaning Of This?</h1>

            <h3>Everyone wants to make a difference, but most struggle to know how</h3>

            <p>This was true for Sam Lalli, who struggled to know how to change the world. The time came where a decsion was to be made, do something or do nothing.
            After careful thought and prayer a question was formed. How could I, Sam Lalli make people smile... even when I am not with them?
            What is one item that everyone has with them all the time? Their cellphones. The decision was made, I need to get Sam Lalli inside everyone's phones.
            On average a person picks up their phone about 100 times a day.
            My Ultimate goal is to make people smile each and everytime they pick their phone up.
            Please enjoy these wallpapers and now a centralized hub of Sam Lalli</p>
            
        </StyledDiv>
    )
}

export default About
