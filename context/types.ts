export type Dispatch = (action: Action) => void;

export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_STORE_STATE = "SET_STORE_STATE";
export const SET_FAVORITE = "SET_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";

export interface State {
  currentPage: number;
  favorites: Favorite[];
}

export interface Favorite {
  id: string;
  name: string;
  imageSrc?: string;
  link: string;
}
interface setCurrentPage {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
}

interface setStoreState {
  type: typeof SET_STORE_STATE;
  state: State;
}

interface setFavorite {
  type: typeof SET_FAVORITE;
  favorite: Favorite;
}

interface removeFromFavorite {
  type: typeof REMOVE_FROM_FAVORITE;
  favoriteId: Favorite["id"];
}

export type Action =
  | setStoreState
  | setCurrentPage
  | setFavorite
  | removeFromFavorite;
