import {
  Action,
  Favorite,
  REMOVE_FROM_FAVORITE,
  SET_CURRENT_PAGE,
  SET_FAVORITE,
  SET_STORE_STATE,
  State,
} from "./types";

export const setCurrentPage = (currentPage: number): Action => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setState = (state: State): Action => ({
  type: SET_STORE_STATE,
  state,
});

export const setFavorite = (favorite: Favorite): Action => ({
  type: SET_FAVORITE,
  favorite,
});

export const removeFromFavorite = (favoriteId: Favorite["id"]): Action => ({
  type: REMOVE_FROM_FAVORITE,
  favoriteId,
});
