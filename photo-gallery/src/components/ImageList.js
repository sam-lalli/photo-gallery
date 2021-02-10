import React from 'react'
import { Link } from 'react-router-dom'
import { gallery } from '../gallery'

export const ImageList = () => {
    return (
        <div>
            { gallery.map(({id, img, week}) => (
            <Link key={id} to={`/gallery/${id}`}>
                <img src={img} height={100} />
                <p>{week}</p>
            </Link>
            ))}
      </div>
    )
}
