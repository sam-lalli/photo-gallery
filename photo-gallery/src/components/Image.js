import React from 'react'
import { gallery } from '../gallery'
import { useParams, Link } from 'react-router-dom'


const Image = () => {

    const params = useParams();

    const filteredImg = gallery.filter((image) => image.id == params.id)
    console.log(filteredImg.img)

    return (
        <div>
            { filteredImg.map(({img, title}) => (
                <div>
                    <img src={img} height={100}/>
                    <h3>{title}</h3>
                    <Link to={'/'}>
                        <p>Go Back To Gallery</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Image
