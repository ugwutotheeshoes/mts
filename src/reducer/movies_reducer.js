import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
//   GET_MOVIES_BEGIN,
//   GET_MOVIES_SUCCESS,
//   GET_MOVIES_ERROR,
//   GET_SINGLE_MOVIE_BEGIN,
//   GET_SINGLE_MOVIE_SUCCESS,
//   GET_SINGLE_MOVIE_ERROR,
} from "../actions";

const movies_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default movies_reducer;
