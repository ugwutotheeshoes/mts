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
              <input type="text" class="search-input" />
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
            video,
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
                    border == "right"
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
    padding: 15rem 0 0 0;
    text-align: center;
    clear: both;
    width: 100%;
    display: inline-block;
    background: var(--clr-grey-7);
  }

  .search-home {
    position: relative;
    display: inline-block;
    max-width: 980px;
  }

  .search-content {
    position: relative;
    margin-right: 80px;
    bottom: -35px;
  }

  .search-icon {
    width: 70px;
    height: 70px;
    line-height: 70px;
    font-size: 20px;
    color: var(--clr-black);
    display: inline-block;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
  }

  .search-input{
    height: 70px;
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

  .btn-submit{
    background: var(--clr-primary-5);
    position: absolute;
    top: 0;
    right: -80px;
    bottom: 0;
    z-index: 9;
    padding: 0;
    border-radius: 35px;
    width: 70px;
    height: 70px;
    line-height: 70px;
    font-size: 20px;
    cursor: pointer;
  }

  .pop {
    /* font-family: "Poppins", sans-serif; */
    display: grid;
    margin: 7rem 0 0 0;
    /* align-items: center; */
    /* justify-content: space-between; */
    /* text-align: center; */
    /* padding: 2rem; */
  }

  .movie-container {
    padding: 14rem 5rem;
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

  .mini-bits p {
    font-size: 13px;
  }

  img {
    width: 150px;
    height: 230px;
  }

  @media screen and (max-width: 800px) {
    /* .search {
      background: var(--clr-white);
      h3 {
        padding: 2.5rem 1.5rem;
      }
    } */
  }
`;

export default Homepage;
