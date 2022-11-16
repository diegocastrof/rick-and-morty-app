import { useQuery } from "react-query";
import AppService from "services/appService";
import { GetLocationsArgs } from "services/types/app";
import useDebounce from "hooks/useDebounce";
import { useApi } from "context/context";
import { setCurrentPage } from "context/actions";
import { useEffect } from "react";

const useGetLocations = (args: GetLocationsArgs) => {
  const { state, dispatch } = useApi();

  const debouncedSearch = useDebounce(args.name ?? "", 300);

  const getLocations = async () => {
    const response = await AppService.getLocations({
      ...args,
      name: debouncedSearch,
      page: state.currentPage,
    });
    return response.data;
  };

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["locations", debouncedSearch, state.currentPage],
    queryFn: getLocations,
  });

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [debouncedSearch]);

  return {
    locations: data?.results ?? [],
    metadata: data?.info,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useGetLocations;
