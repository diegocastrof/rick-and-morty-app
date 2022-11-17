import React from "react";
import { useApi } from "context/context";
import { removeFromFavorite, setFavorite } from "context/actions";
import { Favorite } from "context/types";
import { LinkButton } from "./styles";

interface Props {
  isFavorite: boolean;
  favoriteData: Favorite;
}

const FavoriteButtons = ({ isFavorite, favoriteData }: Props) => {
  const { dispatch } = useApi();

  return (
    <>
      {!isFavorite ? (
        <LinkButton onClick={() => dispatch(setFavorite(favoriteData))}>
          Guardar como favorito
        </LinkButton>
      ) : (
        <LinkButton
          onClick={() => dispatch(removeFromFavorite(favoriteData.id))}
        >
          Quitar de favoritos
        </LinkButton>
      )}
    </>
  );
};

export default FavoriteButtons;
