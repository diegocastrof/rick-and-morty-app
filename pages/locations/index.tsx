import useGetLocations from "hooks/useGetLocations";
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

export default function LocationsPage() {
  const { dispatch } = useApi();

  const [searchInput, setSearchInput] = useState<string>("");

  const { locations, isLoading, isError, isSuccess } = useGetLocations({
    name: searchInput,
  });

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, []);

  return (
    <Layout>
      <SearchBar
        title="Locaciones"
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
          {locations.map((location) => (
            <Card key={location.id} name={location.name} />
          ))}
        </ResultsLayout>
      )}
    </Layout>
  );
}
