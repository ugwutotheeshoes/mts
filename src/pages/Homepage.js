import { FaArrowRight, FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { movies } from "../utils/constants";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <HomeContainer className="main-container">
      <div className="search">
        <h3>Find Movies, TV shows and more</h3>
        <div className="search-home">
          <div className="search-content">
            <form action="">
              <div className="search-icon">
                <FaSearch className="fa"></FaSearch>
              </div>
              <input type="text" className="search-input" />
              <button className="btn btn-submit">
                <FaArrowRight className="fa" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="title">
        <h2>Popular Movies</h2>
        <div className="underline"></div>
      </div>
      <ul className="pop">
        {movies.map((movies) => {
          const {
            id,
            name,
            img,
            genre,
            ratings,
            front,
            border,
            poster,
            details,
            director,
            writers,
            casts,
            release,
            url,
          } = movies;
          return (
            <li key={id}>
              {front ? (
                <div
                  className={
                    border === "right"
                      ? "movie-container right"
                      : "movie-container left"
                  }
                  // style=
                >
                  <img src={img} alt="movie poster" />
                  {/* <p>ratings: {ratings}</p> */}
                  <div className="movie-info">
                    <img src={poster} alt="movie cover" />
                    <h1>{name}</h1>
                    <p>{details}</p>
                    <div className="mini-bits">
                      <p>
                        <b>Ratings:</b> {ratings}
                      </p>
                      <p>
                        <b>Genre:</b> {genre}
                      </p>
                      <p>
                        <b>Director:</b> {director}
                      </p>
                      <p>
                        <b>Writers:</b> {writers}
                      </p>
                      <p>
                        <b>Casts:</b> {casts}
                      </p>
                      <p>
                        <b>Release date:</b> {release}
                      </p>
                      <Link to={url}></Link>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
    </HomeContainer>
  );
};

const HomeContainer = styled.nav`
  .main-container {
    position: absolute;
    text-transform: uppercase;
    max-width: 100vw;
    width: 100%;
    /* height: 100vh; */
  }

  .search {
    position: relative;
    padding: 10rem 0 0 0;
    text-align: center;
    clear: both;
    width: 100%;
    display: inline-block;
    background: var(--clr-grey-7);
  }

  .search h3 {
    letter-spacing: 0.05rem;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .search-home {
    position: relative;
    display: inline-block;
    max-width: 980px;
  }

  .search-content {
    position: relative;
    margin-right: 80px;
    bottom: -25px;
  }

  .search-icon {
    width: 50px;
    height: 50px;
    line-height: 58px;
    font-size: 20px;
    color: var(--clr-black);
    display: inline-block;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
  }

  .search-input {
    height: 50px;
    margin: 0;
    border-radius: 45px;
    padding-right: 85px;
    background: var(--clr-white);
    color: var(--clr-grey-7);
    border: none;
    font-size: 1.8em;
    font-weight: 300;
    padding-left: 65px;
  }

  .btn-submit {
    background: var(--clr-primary-5);
    position: absolute;
    top: -2%;
    right: -60px;
    bottom: 0;
    z-index: 9;
    padding: 0;
    border-radius: 35px;
    width: 53px;
    height: 53px;
    line-height: 60px;
    font-size: 20px;
    cursor: pointer;
  }

  .title {
    text-align: center;
    margin: 10rem 0 5rem 0;
  }

  .title .underline {
    height: 0.25rem;
    margin-left: auto;
    margin-right: auto;
    width: 7rem;
    background: var(--clr-primary-5);
  }

  .fa {
    font-weight: 900;
  }

  .pop {
    /* font-family: "Poppins", sans-serif; */
    /* display: grid; */
    /* margin: 7rem 0 0 0; */
    /* align-items: center; */
    /* justify-content: space-between; */
    /* text-align: center; */
    /* padding: 2rem; */
  }

  .movie-container {
    padding: 10rem 3rem;
  }

  .right {
    border-top: 3px solid var(--clr-grey-7);
    border-bottom: 3px solid var(--clr-grey-7);
    border-right: 6px solid var(--clr-grey-7);
  }

  .left {
    text-align: right;
    border-top: 3px solid var(--clr-grey-7);
    border-bottom: 3px solid var(--clr-grey-7);
    border-left: 6px solid var(--clr-grey-7);
  }

  .movie-info p {
    font-size: 18px;
  }

  .movie-info h1 {
    color: var(--clr-primary-5);
    font-size: 2.5rem;
  }

  .mini-bits p {
    font-size: 13px;
  }

  img {
    width: 150px;
    height: 230px;
  }

  @media (max-width: 680px) {
    .search h3 {
      letter-spacing: 0.06rem;
      font-size: 0.8rem;
      margin-bottom: 1rem;
    }

    .search-home {
      max-width: 630px;
    }

    .search-content {
      margin-right: 40px;
      bottom: -20px;
    }

    .search-icon,
    .btn-submit {
      width: 40px;
      height: 40px;
      line-height: 45px;
    }

    .btn-submit {
      right: -45px;
    }

    .search-input {
      height: 40px;
      padding: 0 35px;
    }

    .movie-container {
      padding: 5rem 1.5rem;
    }
  }

  @media (min-width: 860px) {
    .search {
      position: relative;
      padding: 15rem 0 0 0;
      text-align: center;
      clear: both;
      /* width: auto; */
      display: inline-block;
      background: var(--clr-grey-7);
    }

    .search-input {
      height: 50px;
      margin: 0;
      border-radius: 45px;
      padding-right: 85px;
      background: var(--clr-white);
      color: var(--clr-grey-7);
      border: none;
      font-size: 1.8em;
      font-weight: 300;
      padding-left: 65px;
    }

    .search-content {
      margin-right: 40px;
      bottom: -25px;
    }

    .search-icon {
      width: 50px;
      height: 50px;
      line-height: 58px;
    }

    .btn-submit {
      width: 53px;
      height: 53px;
      line-height: 60px;
      right: -60px;
      top: -4%;
    }
  }
`;

export default Homepage;
