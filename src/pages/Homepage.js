import { FaArrowRight, FaSearch } from "react-icons/fa";
import { movies } from "../utils/constants";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="main-container">
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
        <h2>Trending</h2>
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
                    id % 2 === 0 
                      ? "movie-container right"
                      : "movie-container left"
                  }
                  style={{
                    backgroundImage: `url(${poster})`,
                  }}
                >
                  {/* <div class="fade-big"></div> */}
                  {/* <img className="poster" src={poster} alt="movie poster" /> */}
                  {/* <p>ratings: {ratings}</p> */}

                  {id % 2 === 0 ? (
                    <div className="movie-info">
                      <img className="cover" src={img} alt="movie cover" />
                      <div className="mini align-left">
                        <h1>{name}</h1>
                        <p className="info">{details}</p>
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
                    <div className="movie-info">
                      <div className="mini align-right">
                        <h1>{name}</h1>
                        <p className="info">{details}</p>
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
                      <img className="cover" src={img} alt="movie cover" />
                    </div>
                  )}
                </div>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Homepage;
