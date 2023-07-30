import React from 'react'
import { animation } from  '../components/Data';
import { FaTimes, FaDog } from 'react-icons/fa';
import { Image, CloudinaryContext} from 'cloudinary-react';

const Animation = () => {
    return (
        <div>
            <div>
                <div>
                    <h2>Animation</h2>
                    <FaDog />
                </div>
                <button>
                    <FaTimes />
                </button>
          </div>
            <ul>
            {animation.map((ani) => {
                const {id, cover, img, name, info, rating, director, producer, casts} = ani
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

export default Animation
