interface BaseResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  };
}

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface GetCharactersArgs {
  name?: string;
  status?: "alive" | "dead" | "unknown";
  species?: string;
  type?: string;
  gender?: "female" | "male" | "genderless" | "unknown";
}

export interface GetCharactersResponse extends BaseResponse {
  results: Character[];
}

export interface GetLocationsArgs {
  name?: string;
  type?: string;
  dimension?: string;
}

export interface GetLocationsResponse extends BaseResponse {
  results: Location[];
}

export interface GetEpisodesArgs {
  name?: string;
  episode?: string;
}

export interface GetEpisodesResponse extends BaseResponse {
  results: Episode[];
}
