import { useQuery } from "react-query";
import AppService from "services/appService";
import { GetEpisodesArgs } from "services/types/app";
import useDebounce from "hooks/useDebounce";

const useGetEpisodes = (args: GetEpisodesArgs) => {
  const debouncedSearch = useDebounce(args.name ?? "", 300);

  const getEpisodes = async () => {
    const response = await AppService.getEpisodes({
      ...args,
      name: debouncedSearch,
    });
    return response.data;
  };

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["episodes", debouncedSearch],
    queryFn: getEpisodes,
  });

  return {
    episodes: data?.results ?? [],
    metadata: data?.info,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useGetEpisodes;
