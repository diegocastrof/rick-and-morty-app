import useGetLocations from "hooks/useGetLocations";
import { SearchBar, Loading, Layout, ErrorMessage } from "components";
import { useState } from "react";

export default function Home() {
  const [searchInput, setSearchInput] = useState<string>("");

  const { locations, isLoading, isError, isSuccess } = useGetLocations({
    name: searchInput,
  });

  if (isLoading) return <Loading />;

  return (
    <Layout>
      <SearchBar
        title="Locaciones"
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      {!isLoading && isError && (
        <ErrorMessage errorMessage="Ops, algo salió mal. Por favor inténtelo nuevamente." />
      )}
      {!isLoading && isSuccess && (
        <ul>
          {locations.map((location) => (
            <li>{location.name}</li>
          ))}
        </ul>
      )}
    </Layout>
  );
}
