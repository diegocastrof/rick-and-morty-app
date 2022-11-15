import { useQuery } from "react-query";
import AppService from "services/appService";
import { GetEpisodesArgs } from "services/types/app";

const useGetEpisodes = (args: GetEpisodesArgs) => {
  const getEpisodes = async () => {
    const response = await AppService.getEpisodes({ ...args });
    return response.data;
  };

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["episodes"],
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
