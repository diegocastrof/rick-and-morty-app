import Url from "resources/api/utils";

const BASE_URL = "https://rickandmortyapi.com/api/";

const Hosts = {
  base: new Url({ route: BASE_URL }),
};

export default Hosts;
