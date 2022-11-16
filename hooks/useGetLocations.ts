import { useQuery } from "react-query";
import AppService from "services/appService";
import { GetLocationsArgs } from "services/types/app";
import useDebounce from "hooks/useDebounce";

const useGetLocations = (args: GetLocationsArgs) => {
  const debouncedSearch = useDebounce(args.name ?? "", 300);

  const getLocations = async () => {
    const response = await AppService.getLocations({
      ...args,
      name: debouncedSearch,
    });
    return response.data;
  };

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["locations", debouncedSearch],
    queryFn: getLocations,
  });

  return {
    locations: data?.results ?? [],
    metadata: data?.info,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useGetLocations;
