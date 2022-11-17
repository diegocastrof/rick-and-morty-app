import { useApi } from "context/context";
import { Favorite } from "context/types";
import React, { useCallback } from "react";

const useFavorite = () => {
  const { state } = useApi();

  const findIsFavorite = useCallback(
    (id: Favorite["id"]): boolean =>
      !!state.favorites.find((favorite) => favorite.id === id),
    [state.favorites],
  );

  return {
    findIsFavorite,
  };
};

export default useFavorite;
