import apiService from "services/apiService";
import { AxiosPromise } from "services/types/api";
import R from "resources";
import {
  GetCharactersArgs,
  GetCharactersResponse,
  GetEpisodesArgs,
  GetEpisodesResponse,
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

  static getLocations = (
    args: GetLocationsArgs,
  ): AxiosPromise<GetLocationsResponse> =>
    apiService.get<GetLocationsResponse>(
      R.api.getLocations.getUrl({ ...args }),
    );

  static getEpisodes = (
    args: GetEpisodesArgs,
  ): AxiosPromise<GetEpisodesResponse> =>
    apiService.get<GetEpisodesResponse>(R.api.getEpisodes.getUrl({ ...args }));
}

export default AppService;
