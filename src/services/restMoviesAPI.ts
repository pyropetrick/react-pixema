import axios from "axios";
import {
  IResponseSearchAPI,
  IMovieInfoAPI,
  IRequestOption,
  IResponsePopularMovies,
  IResponseComingSoonMovies,
} from "types";

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
    home: ENDPOINT.HOME + this.keyAPI,
    trends: ENDPOINT.TRENDS + this.keyAPI,
    comingSoon: ENDPOINT.COMING_SOON + this.keyAPI,
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
  public async getSearch({
    title,
    titleType = null,
    releaseData = null,
    genres = null,
  }: IRequestOption) {
    const params = {
      title,
      title_type: titleType,
      release_data: releaseData,
      genres,
    };
    const { data } = await this.API.get<IResponseSearchAPI>(this.endpoints.search, {
      params,
    });
    if (data.errorMessage) throw new Error(data.errorMessage);
    return data;
  }
  public async getPopularMovies() {
    const { data } = await this.API.get<IResponsePopularMovies>(this.endpoints.trends);
    if (data.errorMessage) throw new Error(data.errorMessage);
    return data;
  }
  public async getHomeMovies() {
    const { data } = await this.API.get<IResponsePopularMovies>(this.endpoints.home);
    if (data.errorMessage) throw new Error(data.errorMessage);
    return data;
  }
  public async getComingSoonMovies() {
    const { data } = await this.API.get<IResponseComingSoonMovies>(this.endpoints.comingSoon);
    if (data.errorMessage) throw new Error(data.errorMessage);
    return data;
  }
}

export const moviesApi = new restMoviesAPI();
