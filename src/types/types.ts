export interface IRatingAPI {
  Source: string;
  Value: string;
}
interface IRating {
  source: string;
  value: string;
}

export interface IMovieInfoAPI {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: IRatingAPI[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD?: string;
  totalSeasons?: string;
  BoxOffice?: string;
  Response: string;
  Production?: string;
  Website?: string;
}

export interface IMovie {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
}
export interface IMovieAPI {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IResponseSearchAPI {
  Search: IMovieAPI[];
  totalResult: string;
  Response: string;
}

export interface IRequestOption {
  name: string;
  type?: string;
  year?: string;
  page?: number;
}

export interface IMovieInfo {
  title: string;
  year: string;
  released: string;
  genres: string[];
  director: string;
  writer: string;
  actors: string;
  plot: string;
  country: string;
  poster: string;
  ratings: IRating[];
  metascore: string;
  imdbRating: string;
  totalSeasons?: string;
  boxOffice?: string;
  production?: string;
  runTime?: string;
}

export interface ISignUpData {
  email: string;
  password: string;
  name: string;
}

export interface ISignInData {
  email: string;
  password: string;
}
