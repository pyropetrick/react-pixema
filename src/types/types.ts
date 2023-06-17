export type Theme = "dark" | "light";

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
  releaseDate: string;
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
  actorList: IActorsList[];
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

export interface ISearchMovie {
  id: string;
  image: string;
  title: string;
  description: string;
  runtimeStr: string;
  genres: string;
  genresList: IGenres[];
  contentRating: string;
  imDbRating: string;
  imDbRatingVotes: string;
  metacriticRating: string;
  plot: string;
  stars: string;
  starList: IPeopleList[];
}
export interface IResponseSearchAPI {
  queryString: string;
  results: ISearchMovie[];
  errorMessage: string | null;
}

export interface IRequestOption {
  title?: string | null;
  type?: string | null;
  years?: string | null;
  genres?: string | null;
  groups?: string | null;
}

export interface IMovieInfo {
  imdbID: string;
  type: string;
  title: string;
  year: string;
  released: string;
  genres: string[];
  director: string;
  writer: string;
  stars: string;
  plot: string;
  country: string;
  poster: string;
  metascore: string;
  imdbRating: string;
  boxOffice?: string;
  runTime?: string;
  similars: ISimilarMovie[];
  trailer: string;
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
