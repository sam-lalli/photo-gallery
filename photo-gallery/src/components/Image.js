import React from 'react'
import { gallery } from '../gallery'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'


const StyledDiv = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 5%;

img{
    height: 70vh;
}

.box{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h3{
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
}

.link{
    text-decoration: none;
    color: black;
    transition: .3s;
    margin: 3%;

    :hover{
        color: white;
        animation: ease-in-out .3s;
    }
}

`

const Image = () => {

    const params = useParams();

    const filteredImg = gallery.filter((image) => image.id == params.id)

    return (
        <StyledDiv>
            { filteredImg.map(({img, title}) => (
                <div className={'box'}>
                    <img src={img} height={100}/>
                    <h3>{title}</h3>
                    <Link className={'link'} to={'/'}>
                        <p>Go Back To Gallery</p>
                    </Link>
                </div>
            ))}
        </StyledDiv>
    )
}

export default Image
