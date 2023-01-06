import axios from "axios";
import { IResponseSearchAPI, IMovieInfoAPI, IRequestOption } from "types";

class restMoviesAPI {
  private readonly urlAPI = process.env.REACT_APP_API_URL;
  private readonly keyAPI = process.env.REACT_APP_API_KEY;
  private readonly API = axios.create({
    baseURL: this.urlAPI,
    params: {
      apikey: this.keyAPI,
    },
  });

  public async getMovie(id: string) {
    const params = {
      i: id,
      plot: "full",
    };
    const { data } = await this.API.get<IMovieInfoAPI>("", { params });
    return data;
  }
  public async getSearchMovies({ name, type, year, page }: IRequestOption) {
    const params = {
      s: name,
      type,
      y: year,
      page,
    };
    const { data } = await this.API.get<IResponseSearchAPI>("", { params });
    if (data.Error) throw new Error(data.Error);
    return data;
  }
}

export const moviesApi = new restMoviesAPI();
