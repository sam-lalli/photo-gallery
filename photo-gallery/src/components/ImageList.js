import React from 'react'
import { Link } from 'react-router-dom'
import { gallery } from '../gallery'
import styled from 'styled-components'

const StyledCard = styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: space-evenly;

 .card{
  text-decoration: none;
  color: black;
  margin: auto;
  width: 25%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 2.5%;
 }

 img{
     height: auto;
     width: 90%;
     margin: 15%;
     border-radius: 8px;
     transition: .3s;

     :hover{
        box-shadow: 0 50px 50px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        animation: ease-in-out .3s
     }
 }

 p{
     font-size: 2rem;
 }
`

export const ImageList = () => {
    return (
        <StyledCard>
            { gallery.map(({id, img, week}) => (
            <Link className={'card'} key={id} to={`/gallery/${id}`}>
                    <img src={img} height={100} />
                    <p>{week}</p>
            </Link>
            ))}
      </StyledCard>
    )
}
