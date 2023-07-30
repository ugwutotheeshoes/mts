import React from 'react';
import { family } from  '../components/Data';
import { FaTimes, FaHome } from 'react-icons/fa';
import { Image, CloudinaryContext} from 'cloudinary-react';

const Family = () => {
    return (
        <div>  
            <div>
                <div>
                    <h2>Family</h2>
                    <FaHome />
                </div>
                <button>
                    <FaTimes />
                </button>
          </div>
            <ul>
            {family.map((fam) => {
                const {id, cover, img, name, info, rating, director, producer, casts} = fam
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

export default Family
