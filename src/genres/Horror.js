import React from 'react';
import { horror } from  '../components/Data';
import { FaTimes, FaGhost } from 'react-icons/fa';
import { Image, CloudinaryContext} from 'cloudinary-react';

const Horror = () => {
    return (
        <div>  
            <div>
                <div>
                    <h2>Horror</h2>
                    <FaGhost />
                </div>
                <button>
                    <FaTimes />
                </button>
          </div>
            <ul>
            {horror.map((horr) => {
                const {id, cover, img, name, info, rating, director, producer, casts} = horr
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

export default Horror
