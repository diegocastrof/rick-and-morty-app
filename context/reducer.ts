import { State, Action, SET_CURRENT_PAGE, SET_STORE_STATE } from "./types";

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
    default: {
      return state;
    }
  }
};

export default apiReducer;
