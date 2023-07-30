import React from 'react'
import { scifi } from  '../components/Data';
import { FaTimes, FaRocket } from 'react-icons/fa';
import { Image, CloudinaryContext} from 'cloudinary-react';

const Scifi = () => {
    return (
        <div>
            <div>
                <div>
                    <h2>Sci-fi</h2>
                    <FaRocket />
                </div>
                <button>
                    <FaTimes />
                </button>
          </div>
            <ul>
            {scifi.map((sci) => {
                const {id, cover, img, name, info, rating, director, producer, casts} = sci
                    return (
                    <li key={id}>
                        <div>
                            <CloudinaryContext cloudName="ugwutotheeshoes">
                                <Image publicId={cover} alt="profile">
                                </Image>
                            </CloudinaryContext>
                            <div>
                                <CloudinaryContext cloudName="ugwutotheeshoes">
                                    <Image publicId={img} alt="profile">
                                    </Image>
                                </CloudinaryContext>
                            </div>
                            <div>
                                <h2>{name}</h2>
                                <p>{info}</p>
                                <p>Rating: {rating}</p>
                                <p>Director: {director}</p>
                                <p>Producer: {producer}</p>
                                <p>Casts: {casts}</p>
                            </div>
                        </div>
                    </li>
                    )
                  })}
              </ul>
        </div>
    )
}

export default Scifi
