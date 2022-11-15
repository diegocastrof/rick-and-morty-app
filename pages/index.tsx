import useGetCharacters from "hooks/useGetCharacters";
import { useQuery } from "react-query";
import AppService from "services/appService";

export default function Home() {
  // const getCharacters = async () => {
  //   const response = await AppService.getCharacters({ name: "Rick " });
  //   return response.data;
  // };

  // const { data } = useQuery({
  //   queryKey: ["characters"],
  //   queryFn: getCharacters,
  // });

  // console.log(data);
  // console.log("first");
  const { characters } = useGetCharacters({ name: "morty" });
  console.log(characters);
  return <div>holi</div>;
}
