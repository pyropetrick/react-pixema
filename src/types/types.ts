export type Theme = "dark" | "light";

export interface IRatingAPI {
  Source: string;
  Value: string;
}
interface IRating {
  source: string;
  value: string;
}

interface IPeopleList {
  id: string;
  name: string;
}
interface IActorsList extends IPeopleList {
  image: string;
  asCharacter: string;
}
interface IGenres {
  key: string;
  value: string;
}

interface ICompanyList {
  id: string;
  name: string;
}
interface ICountryList {
  key: string;
  value: string;
}

interface ILanguageList {
  key: string;
  value: string;
}

interface IPlot {
  plainText: string;
  html: string;
}

interface IWikipediaInfo {
  imDbId: string;
  title: string;
  fullTitle: string;
  type: string;
  year: string;
  language: string;
  titleLanguage: string;
  url: string;
  plotShort: IPlot;
  plotFull: IPlot;
  errorMessage: string | null;
}

interface ITrailerInfo {
  imDbId: string;
  title: string;
  fullTitle: string;
  type: string;
  year: string;
  videoId: string;
  videoTitle: string;
  videoDescription: string;
  thumbnailUrl: string;
  uploadDate: string;
  link: string;
  linkEmbed: string;
  errorMessage: string | null;
}

interface IBoxOffice {
  budget: string;
  openingWeekendUSA: string;
  grossUSA: string;
  cumulativeWorldwideGross: string;
}

interface ISimilarMovie {
  id: string;
  title: string;
  image: string;
  imDbRating: string;
}
export interface IMovieInfoAPI {
  id: string;
  title: string;
  originalTitle: string;
  fullTitle: string;
  type: string;
  year: string;
  image: string;
  releaseData: string;
  runtimeMins: string;
  runtimeStr: string;
  plot: string;
  plotLocal: string;
  plotLocalIsRtl: boolean;
  awards: string;
  directors: string;
  directorList: IPeopleList[];
  writers: string;
  writerList: IPeopleList[];
  stars: string;
  starList: IPeopleList[];
  actorsList: IActorsList[];
  fullcast: null;
  genres: string;
  genreList: IGenres[];
  companies: string;
  companyList: ICompanyList[];
  countries: string;
  countriesList: ICountryList[];
  languages: string;
  languagesList: ILanguageList[];
  contentRating: string;
  imDbRating: string;
  imDbRatingVotes: string;
  metacriticRating: string;
  ratings: null;
  wikipedia: IWikipediaInfo;
  posters: null;
  images: null;
  trailer: ITrailerInfo;
  boxOffice: IBoxOffice;
  tagline: null;
  keywords: string;
  keywordList: string[];
  similars: ISimilarMovie[];
  tvSeriesInfo: null;
  tvEpisodeInfo: null;
  errorMessage: string | null;
}

export interface IMovie {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
}

interface IResultSearch {
  id: string;
  image: string;
  title: string;
  description: string;
  runtimeStr: string;
  genres: string;
  genresList: IGenres[];
  contentRating: string;
  imdbRating: string;
  imDbRatingVotes: string;
  metacriticRating: string;
  plot: string;
  stars: string;
  starList: IPeopleList[];
}
export interface IResponseSearchAPI {
  queryString: string;
  results: IResultSearch[];
  errorMessage: string | null;
}

interface IPopularMovie {
  id: string;
  rank: string;
  rankUpDown: string;
  title: string;
  fullTitle: string;
  year: string;
  image: string;
  crew: string;
  imDbRating: string;
  imDbRatingCount: string;
}

interface IComingSoonMovie {
  id: string;
  title: string;
  fullTitle: string;
  year: string;
  releaseState: string;
  image: string;
  runTimeMins: null;
  runTimeStr: null;
  plot: null;
  contentRating: null;
  imDbRating: null;
  imDbRatingCount: null;
  metacriticRating: null;
  genres: string;
  genresList: IGenres;
  directors: null;
  directorsList: IPeopleList[];
  stars: string;
  starList: IPeopleList[];
}

export interface IResponsePopularMovies {
  items: IPopularMovie[];
  errorMessage: string | null;
}

export interface IResponseComingSoonMovies {
  items: IComingSoonMovie[];
  errorMessage: string | null;
}

export interface IRequestOption {
  title: string;
  titleType: string | null;
  releaseData: string | null;
  genres: string | null;
}

export interface IMovieInfo {
  imdbID: string;
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

export interface ISettingsData {
  email: string;
  password: string;
  name: string;
  theme: Theme;
}
