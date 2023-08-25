// import axios from "axios";
import React, { useContext, useReducer } from "react";
// useEffect,
import reducer from "../reducer/movies_reducer";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  // GET_MOVIES_BEGIN,
  // GET_MOVIES_SUCCESS,
  // GET_MOVIES_ERROR,
  // GET_SINGLE_MOVIE_BEGIN,
  // GET_SINGLE_MOVIE_SUCCESS,
  // GET_SINGLE_MOVIE_ERROR,
} from "../actions";

const initialState = {
  isSidebarOpen: false,
  movies_loading: false,
  movies_error: false,
  movies: [],
  trending_movies: [],
  single_movie_loading: false,
  single_movie_error: false,
  single_movie: {},
};

const MoviesContext = React.createContext()

export const MoviesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const openSidebar = () => {
        dispatch({ type: SIDEBAR_OPEN })
      }
      const closeSidebar = () => {
        dispatch({ type: SIDEBAR_CLOSE })
      }

    return (
        <MoviesContext.Provider
          value={{
            ...state,
            openSidebar,
            closeSidebar,
            // fetchSingleMovie,
          }}
        >
          {children}
        </MoviesContext.Provider>
      )
}

export const useMoviesContext = () => {
    return useContext(MoviesContext)
  }