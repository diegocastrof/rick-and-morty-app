import { useQuery } from "react-query";
import AppService from "services/appService";
import { GetCharactersArgs } from "services/types/app";
import useDebounce from "hooks/useDebounce";

const useGetCharacters = (args: GetCharactersArgs) => {
  const debouncedSearch = useDebounce(args.name ?? "", 300);

  const getCharacters = async () => {
    const response = await AppService.getCharacters({
      ...args,
      name: debouncedSearch,
    });
    return response.data;
  };

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["characters", debouncedSearch],
    queryFn: getCharacters,
  });

  return {
    characters: data?.results ?? [],
    metadata: data?.info,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useGetCharacters;
