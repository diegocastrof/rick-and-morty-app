import { useQuery } from "react-query";
import AppService from "services/appService";
import { GetCharactersArgs } from "services/types/app";

const useGetCharacters = (args: GetCharactersArgs) => {
  const getCharacters = async () => {
    const response = await AppService.getCharacters({ ...args });
    return response.data;
  };

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["characters"],
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
