import Hosts from "resources/api/hosts";

const endpoints = {
  getCharacters: Hosts.base.in({
    route: "character",
    optionalQueryParams: ["name", "status", "species", "type", "gender"],
  }),
  getCharacter: Hosts.base.in({
    route: "character/{characterId}",
    pathParams: ["characterId"],
  }),
  getLocations: Hosts.base.in({
    route: "location",
    optionalQueryParams: ["name", "type", "dimension"],
  }),
  getLocation: Hosts.base.in({
    route: "location/{locationId}",
    pathParams: ["locationId"],
  }),
  getEpisodes: Hosts.base.in({
    route: "episode",
    optionalQueryParams: ["name", "episode"],
  }),
  getEpisode: Hosts.base.in({
    route: "episode/{episodeId}",
    pathParams: ["episodeId"],
  }),
};

export default endpoints;
