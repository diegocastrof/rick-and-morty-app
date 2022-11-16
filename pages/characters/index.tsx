import useGetCharacters from "hooks/useGetCharacters";
import { SearchBar, Loading, Layout, ErrorMessage } from "components";
import { useState } from "react";

export default function Home() {
  const [searchInput, setSearchInput] = useState<string>("");

  const { characters, isLoading, isError, isSuccess } = useGetCharacters({
    name: searchInput,
  });

  if (isLoading) return <Loading />;

  return (
    <Layout>
      <SearchBar
        title="Personajes"
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      {!isLoading && isError && (
        <ErrorMessage errorMessage="Ops, algo salió mal. Por favor inténtelo nuevamente." />
      )}
      {!isLoading && isSuccess && (
        <ul>
          {characters.map((character) => (
            <li>{character.name}</li>
          ))}
        </ul>
      )}
    </Layout>
  );
}
