import axios from "axios";
import { IResponseSearchAPI, IMovieInfoAPI, IRequestOption } from "types";

enum ENDPOINT {
  SEARCH = "AdvancedSearch/",
  HOME = "Top250Movies/",
  TRENDS = "MostPopularMovies/",
  COMING_SOON = "ComingSoon/",
  MOVIE_BY_ID = "Title/",
}

class restMoviesAPI {
  private readonly urlAPI = process.env.REACT_APP_API_URL;
  private readonly keyAPI = process.env.REACT_APP_API_KEY;
  private readonly endpoints = {
    search: ENDPOINT.SEARCH + this.keyAPI,
    searchByID: ENDPOINT.MOVIE_BY_ID + this.keyAPI,
  };
  private readonly API = axios.create({
    baseURL: this.urlAPI,
  });

  public async getMovieById(id: string) {
    const params = "Trailer, Wikipedia";
    const { data } = await this.API.get<IMovieInfoAPI>(
      `${this.endpoints.searchByID}/${id}/${params}`,
    );
    if (data.errorMessage) throw new Error(data.errorMessage);
    return data;
  }
  public async getSearchMovies({
    title = null,
    type = null,
    years = null,
    genres = null,
    groups = null,
  }: IRequestOption) {
    const params = {
      title,
      title_type: type,
      release_data: years,
      genres,
      groups,
    };
    const { data } = await this.API.get<IResponseSearchAPI>(this.endpoints.search, {
      params,
    });
    if (data.errorMessage) throw new Error(data.errorMessage);
    return data;
  }
}

export const moviesApi = new restMoviesAPI();
