import React, { Dispatch, FC, SetStateAction } from "react";
import { Container, Title, SearchInput, SearchContainer } from "./styles";

interface ISearchBar {
  title: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
  searchInput: string;
}

const SearchBar: FC<ISearchBar> = ({ title, setSearchInput, searchInput }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Buscar..."
          value={searchInput}
          onChange={(value) => {
            setSearchInput(String(value.target.value));
          }}
        ></SearchInput>
      </SearchContainer>
    </Container>
  );
};

export default SearchBar;
