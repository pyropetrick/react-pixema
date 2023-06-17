import { IMovieInfo, IMovieInfoAPI } from "types";

export const transformMovieInfo = (movieInfo: IMovieInfoAPI): IMovieInfo => ({
  imdbID: movieInfo.id,
  title: movieInfo.title,
  type: movieInfo.type,
  stars: movieInfo.stars,
  released: movieInfo.releaseDate,
  year: movieInfo.year,
  genres: movieInfo.genres.split(","),
  director: movieInfo.directors,
  writer: movieInfo.writers,
  plot: movieInfo.plot,
  country: movieInfo.countries,
  poster: movieInfo.image,
  metascore: movieInfo.metacriticRating,
  imdbRating: movieInfo.imDbRating,
  boxOffice: movieInfo.boxOffice.cumulativeWorldwideGross,
  similars: movieInfo.similars,
  runTime: movieInfo.runtimeStr,
  trailer: movieInfo.trailer.linkEmbed,
});
