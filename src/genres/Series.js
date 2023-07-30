import React from 'react'
import { series } from  '../components/Data';
import { FaTimes, FaFilm } from 'react-icons/fa';
import { Image, CloudinaryContext} from 'cloudinary-react';

const Series = () => {
    return (
        <div>
            <div>
                <div>
                    <h2>Tv Series</h2>
                    <FaFilm />
                </div>
                <button>
                    <FaTimes />
                </button>
          </div>
            <ul>
            {series.map((serie) => {
                const {id, cover, img, name, info, seasons, rating, created, producer, casts} = serie
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
                                <p>No of Seasons: {seasons}</p>
                                <p>Rating: {rating}</p>
                                <p>Created by: {created}</p>
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

export default Series
