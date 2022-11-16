import {
  ReactNode,
  createContext,
  useReducer,
  useContext,
  useEffect,
} from "react";
import { setState } from "./actions";
import _ from "lodash";

import apiReducer, { initialState } from "./reducer";
import { State, Dispatch } from "./types";

type ApiProviderProps = { children: ReactNode };

const ApiContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const ApiProvider = ({ children }: ApiProviderProps) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  useEffect(() => {
    const storedState = localStorage.getItem("state");
    if (storedState) dispatch(setState(JSON.parse(storedState)));
  }, []);

  useEffect(() => {
    if (!_.isEqual(state, initialState)) {
      localStorage.setItem("state", JSON.stringify(state));
    }
  }, [state]);

  const value = { state, dispatch };
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

const useApi = () => {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error("useApi must be used within a ApiProvider");
  }
  return context;
};

export { ApiProvider, useApi };
