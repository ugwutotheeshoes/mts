import React from 'react';
import { adventure } from  '../components/Data';
import { FaTimes, FaCampground } from 'react-icons/fa';
import { Image, CloudinaryContext} from 'cloudinary-react';

const Adventure = () => {
    return (
        <div>
            <div>
                <div>
                    <h2>Adventure</h2>
                    <FaCampground />
                </div>
                <button>
                    <FaTimes />
                </button>
          </div>
        <ul>
            {adventure.map((adv) => {
                const {id, cover, img, name, info, rating, director, producer, casts} = adv
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

export default Adventure
