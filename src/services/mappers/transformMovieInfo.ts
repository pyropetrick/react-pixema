import { IMovieInfo, IMovieInfoAPI } from "types";

export const transformMovieInfo = (movieInfo: IMovieInfoAPI): IMovieInfo => ({
  imdbID: movieInfo.id,
  title: movieInfo.title,
  type: movieInfo.type,
  actors: movieInfo.actorsList.map((actor) => actor.name).join(),
  released: movieInfo.releaseData,
  year: movieInfo.year,
  genres: movieInfo.genres.split(","),
  director: movieInfo.directors,
  writer: movieInfo.writers,
  plot: movieInfo.wikipedia.plotShort.plainText,
  country: movieInfo.countries,
  poster: movieInfo.image,
  metascore: movieInfo.metacriticRating,
  imdbRating: movieInfo.imDbRating,
  boxOffice: movieInfo.boxOffice.cumulativeWorldwideGross,
  similars: movieInfo.similars,
  runTime: movieInfo.runtimeStr,
  trailer: movieInfo.trailer.linkEmbed,
});
