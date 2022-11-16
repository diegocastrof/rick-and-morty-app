import { useQuery } from "react-query";
import AppService from "services/appService";
import { GetEpisodesArgs } from "services/types/app";
import useDebounce from "hooks/useDebounce";
import { useApi } from "context/context";
import { setCurrentPage } from "context/actions";
import { useEffect } from "react";

const useGetEpisodes = (args: GetEpisodesArgs) => {
  const { state, dispatch } = useApi();
  const debouncedSearch = useDebounce(args.name ?? "", 300);

  const getEpisodes = async () => {
    const response = await AppService.getEpisodes({
      ...args,
      name: debouncedSearch,
      page: state.currentPage,
    });
    return response.data;
  };

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["episodes", debouncedSearch, state.currentPage],
    queryFn: getEpisodes,
    keepPreviousData: true,
  });

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [debouncedSearch]);

  return {
    episodes: data?.results ?? [],
    metadata: data?.info,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useGetEpisodes;
