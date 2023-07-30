import React from 'react'
import { crime } from  '../components/Data';
import { FaTimes, FaJoint } from 'react-icons/fa';
import { Image, CloudinaryContext} from 'cloudinary-react';

const Crime = () => {
    return (
        <div>
            <div>
                <div>
                    <h2>Crime</h2>
                    <FaJoint />
                </div>
                <button>
                    <FaTimes />
                </button>
          </div>
            <ul>
            {crime.map((cri) => {
                const {id, cover, img, name, info, rating, director, producer, casts} = cri
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

export default Crime
