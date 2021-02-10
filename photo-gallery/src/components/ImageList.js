import React from 'react'
import { gallery } from '../gallery'

export const ImageList = () => {
    return (
        <div>
            { gallery.map(({id, img, title}) => (
            <div key={id}>
            <img src={img} height={100} />
            <p>{title}</p>
            </div>
            ))}
      </div>
    )
}
