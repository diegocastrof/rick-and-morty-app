import useGetEpisodes from "hooks/useGetEpisodes";
import { SearchBar, Loading, Layout, ErrorMessage } from "components";
import { useState } from "react";

export default function Home() {
  const [searchInput, setSearchInput] = useState<string>("");

  const { episodes, isLoading, isError, isSuccess } = useGetEpisodes({
    name: searchInput,
  });

  if (isLoading) return <Loading />;

  return (
    <Layout>
      <SearchBar
        title="Episodios"
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      {!isLoading && isError && (
        <ErrorMessage errorMessage="Ops, algo salió mal. Por favor inténtelo nuevamente." />
      )}
      {!isLoading && isSuccess && (
        <ul>
          {episodes.map((episode) => (
            <li>{episode.name}</li>
          ))}
        </ul>
      )}
    </Layout>
  );
}
