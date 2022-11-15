import { useQuery } from "react-query";
import AppService from "services/appService";
import { GetLocationsArgs } from "services/types/app";

const useGetLocations = (args: GetLocationsArgs) => {
  const getLocations = async () => {
    const response = await AppService.getLocations({ ...args });
    return response.data;
  };

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["locations"],
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
