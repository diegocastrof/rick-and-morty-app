import { useQuery } from "react-query";
import AppService from "services/appService";
import { GetCharactersArgs } from "services/types/app";
import useDebounce from "hooks/useDebounce";
import { useApi } from "context/context";
import { useEffect } from "react";
import { setCurrentPage } from "context/actions";

const useGetCharacters = (args: GetCharactersArgs) => {
  const { state, dispatch } = useApi();
  const debouncedSearch = useDebounce(args.name ?? "", 300);

  const getCharacters = async () => {
    const response = await AppService.getCharacters({
      ...args,
      name: debouncedSearch,
      page: state.currentPage,
    });
    return response.data;
  };

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["characters", debouncedSearch, state.currentPage],
    queryFn: getCharacters,
    keepPreviousData: true,
  });

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [debouncedSearch]);

  return {
    characters: data?.results ?? [],
    metadata: data?.info,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useGetCharacters;
