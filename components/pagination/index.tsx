import { setCurrentPage } from "context/actions";
import { useApi } from "context/context";
import React from "react";
import { LinkButton, PaginationContainer, Text } from "./styles";

const Pagination = () => {
  const { state, dispatch } = useApi();

  return (
    <PaginationContainer>
      <LinkButton
        disabled={state.currentPage === 1}
        onClick={() => dispatch(setCurrentPage(state.currentPage - 1))}
      >
        Pagina anterior
      </LinkButton>
      <Text>Pagina actual: {state.currentPage}</Text>
      <LinkButton
        onClick={() => dispatch(setCurrentPage(state.currentPage + 1))}
      >
        Pagina siguiente
      </LinkButton>
    </PaginationContainer>
  );
};

export default Pagination;
