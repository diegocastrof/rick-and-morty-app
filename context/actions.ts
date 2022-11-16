import { Action, SET_CURRENT_PAGE, SET_STORE_STATE, State } from "./types";

export const setCurrentPage = (currentPage: number): Action => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setState = (state: State): Action => ({
  type: SET_STORE_STATE,
  state,
});
