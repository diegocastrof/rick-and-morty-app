import { Favorite } from "services/types/app";

export type Dispatch = (action: Action) => void;

export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_STORE_STATE = "SET_STORE_STATE";

export interface State {
  currentPage: number;
  favorites: Favorite[];
}

interface setCurrentPage {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
}

interface setStoreState {
  type: typeof SET_STORE_STATE;
  state: State;
}

export type Action = setStoreState | setCurrentPage;
