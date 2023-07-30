import React from 'react'
import { genres } from '../components/Data'
import { Image, CloudinaryContext} from 'cloudinary-react';

const Genre = () => {
    return (
        <div className="poptrailers">
            {/* <ul>
                {genres.map((gen) => {
                    const {id, img, name, url} = gen
                    return(
                        <li key={id}>
                            <a href={url}>
                            <CloudinaryContext cloudName="ugwutotheeshoes">
                                <Image publicId={img} alt="profile">
                                </Image>
                            </CloudinaryContext>
                            </a>
                            <h2>{name}</h2>
                        </li>
                    )
                })}
            </ul> */}
            <h1>genre</h1>
        </div>
    )
}

export default Genre
