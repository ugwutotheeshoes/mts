import React from 'react'
import { action } from '../components/Data'
import { FaTimes, FaCarCrash } from 'react-icons/fa';
import { Image, CloudinaryContext} from 'cloudinary-react';

const Action = () => {
    return (
        <div>
          <div>
            <div>
            <h2>Action</h2>
            <FaCarCrash />
            </div>
            <button>
              <FaTimes />
            </button>
          </div>
        <ul>
            {action.map((act) => {
                const {id, cover, img, name, info, rating, director, producer, casts} = act
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

export default Action
