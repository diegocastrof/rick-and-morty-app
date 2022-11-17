import useGetEpisodes from "hooks/useGetEpisodes";
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
        <ResultsLayout>
          {episodes.map((episode) => (
            <Card
              key={episode.id}
              name={episode.name}
              link={`episodes/${episode.id}`}
            />
          ))}
        </ResultsLayout>
      )}
    </Layout>
  );
}
