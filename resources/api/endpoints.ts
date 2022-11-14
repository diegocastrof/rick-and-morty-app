import Hosts from "resources/api/hosts";

const endpoints = {
  getCharacters: Hosts.base.in({
    route: "character",
  }),
  getLocations: Hosts.base.in({
    route: "location",
  }),
  getEpisodes: Hosts.base.in({
    route: "episode",
  }),
};

export default endpoints;
