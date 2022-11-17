import {
  State,
  Action,
  SET_CURRENT_PAGE,
  SET_STORE_STATE,
  SET_FAVORITE,
  REMOVE_FROM_FAVORITE,
} from "./types";

export const initialState: State = {
  currentPage: 1,
  favorites: [],
};

const apiReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SET_STORE_STATE: {
      return {
        ...action.state,
      };
    }
    case SET_FAVORITE: {
      return {
        ...state,
        favorites: [...state.favorites, action.favorite],
      };
    }
    case REMOVE_FROM_FAVORITE: {
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite.id !== action.favoriteId,
        ),
      };
    }
    default: {
      return state;
    }
  }
};

export default apiReducer;
