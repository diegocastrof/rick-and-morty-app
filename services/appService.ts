import apiService from "services/apiService";
import { AxiosPromise } from "services/types/api";
import R from "resources";
import {
  GetCharacterResponse,
  GetCharactersArgs,
  GetCharactersResponse,
  GetEpisodeResponse,
  GetEpisodesArgs,
  GetEpisodesResponse,
  GetLocationResponse,
  GetLocationsArgs,
  GetLocationsResponse,
} from "services/types/app";

class AppService {
  static getCharacters = (
    args: GetCharactersArgs,
  ): AxiosPromise<GetCharactersResponse> =>
    apiService.get<GetCharactersResponse>(
      R.api.getCharacters.getUrl({ ...args }),
    );

  static getCharacter = (
    characterId: number,
  ): AxiosPromise<GetCharacterResponse> =>
    apiService.get<GetCharacterResponse>(
      R.api.getCharacter.getUrl({ characterId: String(characterId) }),
    );

  static getLocations = (
    args: GetLocationsArgs,
  ): AxiosPromise<GetLocationsResponse> =>
    apiService.get<GetLocationsResponse>(
      R.api.getLocations.getUrl({ ...args }),
    );

  static getLocation = (
    locationId: number,
  ): AxiosPromise<GetLocationResponse> =>
    apiService.get<GetLocationResponse>(
      R.api.getLocation.getUrl({ locationId: String(locationId) }),
    );

  static getEpisodes = (
    args: GetEpisodesArgs,
  ): AxiosPromise<GetEpisodesResponse> =>
    apiService.get<GetEpisodesResponse>(R.api.getEpisodes.getUrl({ ...args }));

  static getEpisode = (episodeId: number): AxiosPromise<GetEpisodeResponse> =>
    apiService.get<GetEpisodeResponse>(
      R.api.getEpisode.getUrl({ episodeId: String(episodeId) }),
    );
}

export default AppService;
