import useGetCharacters from "hooks/useGetCharacters";
import {
  SearchBar,
  Loading,
  Layout,
  ErrorMessage,
  Pagination,
  Card,
  ResultsLayout,
} from "components";
import { useEffect, useState } from "react";
import { useApi } from "context/context";
import { setCurrentPage } from "context/actions";

export default function CharactersPage() {
  const { dispatch } = useApi();
  const [searchInput, setSearchInput] = useState<string>("");

  const { characters, isLoading, isError, isSuccess } = useGetCharacters({
    name: searchInput,
  });

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, []);

  return (
    <Layout>
      <SearchBar
        title="Personajes"
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <Pagination />
      {isLoading && <Loading />}
      {!isLoading && isError && (
        <ErrorMessage errorMessage="Ops, algo salió mal. Por favor inténtelo nuevamente." />
      )}
      {!isLoading && isSuccess && (
        <ResultsLayout>
          {characters.map((character) => (
            <Card
              key={character.id}
              image={character.image}
              name={character.name}
            />
          ))}
        </ResultsLayout>
      )}
    </Layout>
  );
}
