import React from "react";
import styled from "styled-components";
import { genre } from "../utils/constants";
// import { Image, CloudinaryContext} from 'cloudinary-react';

const Genre = () => {
  return (
    <Container>
      <ul>
        {genre.map((gen) => {
          const { id, image, text, url, border } = gen;
          return (
            <li key={id} className={border}>
              <a href={url}>
                {/* <CloudinaryContext cloudName="ugwutotheeshoes">
                  <Image publicId={image} alt="profile"></Image>
                </CloudinaryContext> */}
                <img src={image} alt="genre name" />
              </a>
              <h2>{text}</h2>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 10rem auto;

  ul {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-row-gap: 70px;
    grid-column-gap: 90px;
    color: #fff;
    justify-items: center;
    align-items: center;
    padding-bottom: 100px;
  }

  h2 {
    /* font-size: 1.5rem; */
    bottom: -40px;
    text-transform: uppercase;
    font-size: 25px;
    text-align: center;
    font-weight: 400;
    letter-spacing: 0.1rem;
  }

  img {
    width: 210px;
    height: 350px;
    background-size: cover;
    transition: 0.3s;
  }

  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  img:hover {
    width: 230px;
    height: 380px;
  }

  .purple {
    img {
      border: 5px solid rgb(148, 7, 167);
    }
    h2 {
      margin-top: 0.2rem;
      color: rgb(148, 7, 167);
    }
  }

  .darkgreen {
    img {
      border: 5px solid rgb(19, 75, 51);
    }
    h2 {
      margin-top: 0.2rem;
      color: rgb(19, 75, 51);
    }
  }

  .blue {
    img {
      border: 5px solid rgb(0, 110, 236);
    }
    h2 {
      margin-top: 0.2rem;
      color: rgb(0, 110, 236);
    }
  }

  .red {
    img {
      border: 5px solid rgb(245, 7, 7);
    }
    h2 {
      margin-top: 0.2rem;
      color: rgb(245, 7, 7);
    }
  }

  .white {
    img {
      border: 5px solid rgb(252, 252, 252);
    }
    h2 {
      margin-top: 0.2rem;
      color: rgb(252, 252, 252);
    }
  }

  .brown {
    img {
      border: 5px solid rgb(119, 73, 5);
    }
    h2 {
      margin-top: 0.2rem;
      color: rgb(119, 73, 5);
    }
  }

  .grey {
    img {
      border: 5px solid rgb(104, 156, 163);
    }
    h2 {
      margin-top: 0.2rem;
      color: rgb(104, 156, 163);
    }
  }

  .yellow {
    img {
      border: 5px solid rgb(223 197 9);
    }
    h2 {
      margin-top: 0.2rem;
      color: rgb(223 197 9);
    }
  }

  .green {
    img {
      border: 5px solid rgb(160 255 8);
    }
    h2 {
      margin-top: 0.2rem;
      color: rgb(160 255 8);
    }
  }

  @media (max-width: 680px) {
    ul {
      display: grid;
      grid-template-columns: 2fr 2fr;
      gap: 40px 30px;
    }

    img {
      width: 140px;
      height: 250px;
    }

    img:hover {
      width: 160px;
      height: 280px;
    }

    h2 {
      font-size: 20px;
    }
  }

  @media (min-width: 860px) {
  }
`;

export default Genre;
