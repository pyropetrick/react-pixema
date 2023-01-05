import { IMovieInfo, IMovieInfoAPI } from "types";

export const transformMovieInfo = (movieInfo: IMovieInfoAPI): IMovieInfo => ({
  imdbID: movieInfo.imdbID,
  title: movieInfo.Title,
  actors: movieInfo.Actors,
  released: movieInfo.Released,
  year: movieInfo.Year,
  genres: movieInfo.Genre.split(","),
  director: movieInfo.Director,
  writer: movieInfo.Writer,
  plot: movieInfo.Plot,
  country: movieInfo.Country,
  poster: movieInfo.Poster,
  ratings: movieInfo.Ratings.map((rate) => ({ value: rate.Value, source: rate.Source })),
  metascore: movieInfo.Metascore,
  imdbRating: movieInfo.imdbRating,
  totalSeasons: `${movieInfo.totalSeasons || ""}`,
  boxOffice: movieInfo.BoxOffice,
  production: movieInfo.Production,
  runTime: movieInfo.Runtime,
});
