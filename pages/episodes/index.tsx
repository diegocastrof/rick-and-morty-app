import useGetEpisodes from "hooks/useGetEpisodes";
import {
  SearchBar,
  Loading,
  Layout,
  ErrorMessage,
  Pagination,
} from "components";
import { useEffect, useState } from "react";
import { useApi } from "context/context";
import { setCurrentPage } from "context/actions";

export default function EpisodesPage() {
  const { dispatch } = useApi();
  const [searchInput, setSearchInput] = useState<string>("");

  const { episodes, isLoading, isError, isSuccess } = useGetEpisodes({
    name: searchInput,
  });

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, []);

  return (
    <Layout>
      <SearchBar
        title="Episodios"
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <Pagination />
      {isLoading && <Loading />}
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
