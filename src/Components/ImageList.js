import React from 'react';
import "./ImageList.css"

const imageList = props => {
    const images = props.images.map((image) => {
        return (
            <img key={image.id} src={image.urls.regular} alt={image.description} className='img' />
        )
    })

    return <div className='image-sec'>
        {images}
    </div>
}

export default imageList;