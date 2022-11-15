import Hosts from "resources/api/hosts";

const endpoints = {
  getCharacters: Hosts.base.in({
    route: "character",
    optionalQueryParams: ["name", "status", "species", "type", "gender"],
  }),
  getLocations: Hosts.base.in({
    route: "location",
    optionalQueryParams: ["name", "type", "dimension"],
  }),
  getEpisodes: Hosts.base.in({
    route: "episode",
    optionalQueryParams: ["name", "episode"],
  }),
};

export default endpoints;
