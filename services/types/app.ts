interface BaseArgs {
  name?: string;
  page?: number;
}
interface BasePaginatedResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  };
}

interface Item {
  id: number;
  name: string;
}

export interface Character extends Item {
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

export interface Episode extends Item {
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface Location extends Item {
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface GetCharactersArgs extends BaseArgs {
  status?: "alive" | "dead" | "unknown";
  species?: string;
  type?: string;
  gender?: "female" | "male" | "genderless" | "unknown";
}

export type GetCharacterResponse = Character;

export interface GetCharactersResponse extends BasePaginatedResponse {
  results: Character[];
}

export interface GetLocationsArgs extends BaseArgs {
  type?: string;
  dimension?: string;
}

export type GetLocationResponse = Location;

export interface GetLocationsResponse extends BasePaginatedResponse {
  results: Location[];
}

export type GetEpisodeResponse = Episode;

export interface GetEpisodesArgs extends BaseArgs {
  episode?: string;
}

export interface GetEpisodesResponse extends BasePaginatedResponse {
  results: Episode[];
}
